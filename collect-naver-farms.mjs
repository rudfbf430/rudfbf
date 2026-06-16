import { readFile, writeFile } from "node:fs/promises";
import crypto from "node:crypto";

const clientId = process.env.NAVER_CLIENT_ID;
const clientSecret = process.env.NAVER_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("NAVER_CLIENT_ID와 NAVER_CLIENT_SECRET 환경변수가 필요합니다.");
}

const queryDelayMs = Number(process.env.NAVER_QUERY_DELAY_MS || 80);
const maxQueries = Number(process.env.NAVER_MAX_QUERIES || 24000);

const regions = [
  "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종",
  "수원", "고양", "용인", "성남", "화성", "부천", "남양주", "안산", "평택", "안양", "시흥",
  "파주", "김포", "의정부", "광주 경기", "하남", "광명", "군포", "양주", "오산", "이천",
  "안성", "구리", "의왕", "포천", "양평", "여주", "동두천", "과천", "가평", "연천",
  "춘천", "원주", "강릉", "동해", "태백", "속초", "삼척", "홍천", "횡성", "영월",
  "평창", "정선", "철원", "화천", "양구", "인제", "고성 강원", "양양",
  "청주", "충주", "제천", "보은", "옥천", "영동", "진천", "괴산", "음성", "단양", "증평",
  "천안", "공주", "보령", "아산", "서산", "논산", "계룡", "당진", "금산", "부여",
  "서천", "청양", "홍성", "예산", "태안",
  "전주", "군산", "익산", "정읍", "남원", "김제", "완주", "진안", "무주", "장수",
  "임실", "순창", "고창", "부안",
  "목포", "여수", "순천", "나주", "광양", "담양", "곡성", "구례", "고흥", "보성",
  "화순", "장흥", "강진", "해남", "영암", "무안", "함평", "영광", "장성", "완도",
  "진도", "신안",
  "포항", "경주", "김천", "안동", "구미", "영주", "영천", "상주", "문경", "경산",
  "의성", "청송", "영양", "영덕", "청도", "고령", "성주", "칠곡", "예천", "봉화",
  "울진", "울릉",
  "창원", "진주", "통영", "사천", "김해", "밀양", "거제", "양산", "의령", "함안",
  "창녕", "고성 경남", "남해", "하동", "산청", "함양", "거창", "합천",
  "제주", "서귀포", "애월", "한림", "구좌", "조천", "성산", "표선", "남원 제주", "대정", "안덕",
];

const cropNames = [
  "토마토", "오이", "멜론", "복숭아", "자두", "감자", "상추", "블루베리", "마늘", "양파",
  "파프리카", "수박", "딸기", "사과", "배", "포도", "감귤", "귤", "단감", "고구마",
  "시금치", "배추", "고추", "당근", "대파", "참외", "애호박", "가지", "무", "깻잎",
  "부추", "브로콜리", "양배추", "아스파라거스", "체리", "키위", "대추", "쑥갓", "청경채",
  "케일", "미나리", "연근", "우엉", "밤", "매실", "오미자", "유자", "무화과", "셀러리",
];

const baseFarmKeywords = [
  "농장", "농원", "농가", "팜", "과수원", "작목반", "체험농장", "농산물 직거래",
];

const farmKeywords = [
  ...baseFarmKeywords,
  ...cropNames.map((crop) => `${crop}농장`),
  ...cropNames.map((crop) => `${crop}농원`),
  ...cropNames.map((crop) => `${crop}체험`),
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
let requested = 0;
const totalQueries = regions.length * farmKeywords.length;

for (const region of regions) {
  for (const keyword of farmKeywords) {
    if (maxQueries && requested >= maxQueries) break;
    const query = `${region} ${keyword}`;
    try {
      requested += 1;
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
    if (requested % 100 === 0) {
      console.log(`progress: ${requested}/${maxQueries || totalQueries}, fetched ${fetched}, added ${added}`);
    }
    await sleep(queryDelayMs);
  }
  if (maxQueries && requested >= maxQueries) break;
}

const farms = [...farmsByKey.values()].sort((a, b) =>
  `${a.region}${a.city}${a.name}`.localeCompare(`${b.region}${b.city}${b.name}`, "ko"),
);

const output = `const realFarmSources = ${JSON.stringify(farms, null, 2)};\n\nwindow.realFarmSources = realFarmSources;\n`;
await writeFile("real-farms.js", output, "utf8");
console.log(`naver fetched: ${fetched}`);
console.log(`naver added: ${added}`);
console.log(`naver queries: ${requested}/${totalQueries}`);
console.log(`saved real-farms.js: ${farms.length}`);
