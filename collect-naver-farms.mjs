import { readFile, writeFile } from "node:fs/promises";
import crypto from "node:crypto";

const clientId = process.env.NAVER_CLIENT_ID;
const clientSecret = process.env.NAVER_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("NAVER_CLIENT_ID와 NAVER_CLIENT_SECRET 환경변수가 필요합니다.");
}

const regions = [
  "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "부산",
  "논산", "천안", "아산", "부여", "공주", "청주", "충주", "나주", "해남", "무안",
  "고흥", "김천", "영천", "성주", "청송", "창원", "밀양", "남해", "평창", "홍천",
  "서귀포", "제주 애월",
];

const farmKeywords = [
  "농장", "농원", "농가", "팜", "체험농장", "로컬푸드", "농산물 직거래",
  "딸기농장", "토마토농장", "사과농장", "포도농장", "감귤농장", "복숭아농장",
  "블루베리농장", "멜론농장", "고구마농장", "감자농장", "마늘농가", "양파농가",
];

const regionAliases = [
  ["경기", "경기도"], ["강원", "강원특별자치도"], ["충북", "충청북도"], ["충남", "충청남도"],
  ["전북", "전북특별자치도"], ["전남", "전라남도"], ["경북", "경상북도"], ["경남", "경상남도"],
  ["제주", "제주특별자치도"], ["부산", "부산광역시"],
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function stripHtml(value = "") {
  return value.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").trim();
}

function hashId(value) {
  return crypto.createHash("sha1").update(value).digest("hex").slice(0, 16);
}

function parseExistingFarms(text) {
  const match = text.match(/const realFarmSources = ([\s\S]*?);\s*(?:window\.realFarmSources|$)/);
  if (!match) throw new Error("real-farms.js에서 realFarmSources 배열을 찾지 못했습니다.");
  return JSON.parse(match[1]);
}

function getRegion(address = "") {
  const found = regionAliases.find(([, full]) => address.includes(full));
  if (found) return found[0];
  const short = regionAliases.find(([shortName]) => address.includes(shortName));
  return short?.[0] || "전국";
}

function getCity(address = "") {
  const parts = address.split(/\s+/).filter(Boolean);
  return parts.find((part) => /[시군구]$/.test(part)) || "";
}

function getSalesType(category = "") {
  if (category.includes("체험")) return "네이버 지역검색 등록 체험 농장";
  if (category.includes("시장") || category.includes("식품")) return "네이버 지역검색 등록 판매처";
  return "네이버 지역검색 등록 농장";
}

const blockedPlacePattern =
  /송어|양식|낚시|횟집|수산|축산|동물|곤충|카페|펜션|민박|리조트|캠핑|학교|유치원|어린이집|병원|교회|성당|사찰|박물관|휴양림|백화점|아파트|빌라|부동산|공인중개|요양|재활|정육|식당|맛집|입구|주차장|골프|컨트리|호텔|모텔|게스트하우스|스테이|파크|랜드|유원지|놀이|테마파크|동물원/;

const farmPlacePattern =
  /농장|농원|농가|팜|과수원|작목반|로컬푸드|직거래|농산물|체험농장|토마토|오이|멜론|복숭아|자두|감자|상추|블루베리|마늘|양파|파프리카|수박|딸기|사과|포도|감귤|귤|단감|고구마|시금치|배추|고추|당근|대파|참외|애호박|가지|깻잎|부추|브로콜리|양배추|아스파라거스|체리|키위|대추|쑥갓|청경채|케일|미나리|연근|우엉|매실|오미자|유자|무화과|셀러리/;

function isFarmLike(item) {
  const text = `${stripHtml(item.title)} ${item.category || ""} ${item.description || ""} ${item.address || ""} ${item.roadAddress || ""}`;
  return farmPlacePattern.test(text) && !blockedPlacePattern.test(text);
}

async function fetchLocal(query) {
  const url = new URL("https://openapi.naver.com/v1/search/local.json");
  url.searchParams.set("query", query);
  url.searchParams.set("display", "5");
  url.searchParams.set("start", "1");
  url.searchParams.set("sort", "random");

  const response = await fetch(url, {
    headers: {
      "X-Naver-Client-Id": clientId,
      "X-Naver-Client-Secret": clientSecret,
    },
  });

  if (response.status === 401 || response.status === 403) {
    const body = await response.text();
    throw new Error(
      `NAVER_AUTH_FAILED: 네이버 개발자센터에서 검색 API 권한을 켠 뒤 다시 실행하세요. ${body}`
    );
  }

  if (!response.ok) {
    throw new Error(`${query}: Naver ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  return data.items || [];
}

const existingText = await readFile("real-farms.js", "utf8");
const existingFarms = parseExistingFarms(existingText);
const farmsByKey = new Map();

for (const farm of existingFarms) {
  const key = `${farm.source}:${farm.id || farm.name}:${farm.roadAddress || farm.address || ""}`;
  farmsByKey.set(key, farm);
}

let fetched = 0;
let added = 0;

for (const region of regions) {
  for (const keyword of farmKeywords) {
    const query = `${region} ${keyword}`;
    try {
      const items = await fetchLocal(query);
      fetched += items.length;

      for (const item of items.filter(isFarmLike)) {
        const title = stripHtml(item.title);
        const address = item.roadAddress || item.address || "";
        if (!title || !address) continue;

        const key = `Naver:${title}:${address}`;
        if (farmsByKey.has(key)) continue;

        farmsByKey.set(key, {
          id: `naver/${hashId(key)}`,
          name: title,
          region: getRegion(address),
          city: getCity(address),
          address,
          roadAddress: item.roadAddress || "",
          salesType: getSalesType(item.category || ""),
          source: "Naver Local Search",
          osmUrl: item.link || `https://map.naver.com/p/search/${encodeURIComponent(address)}`,
        });
        added += 1;
      }
    } catch (error) {
      if (error.message.startsWith("NAVER_AUTH_FAILED")) {
        throw error;
      }
      console.error(error.message);
    }
    await sleep(120);
  }
}

const farms = [...farmsByKey.values()].sort((a, b) =>
  `${a.region}${a.city}${a.name}`.localeCompare(`${b.region}${b.city}${b.name}`, "ko"),
);

const output = `const realFarmSources = ${JSON.stringify(farms, null, 2)};\n\nwindow.realFarmSources = realFarmSources;\n`;
await writeFile("real-farms.js", output, "utf8");
console.log(`naver fetched: ${fetched}`);
console.log(`naver added: ${added}`);
console.log(`saved real-farms.js: ${farms.length}`);
