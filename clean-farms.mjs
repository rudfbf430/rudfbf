import { readFile, writeFile } from "node:fs/promises";

const cropNames = [
  "토마토", "오이", "멜론", "복숭아", "자두", "감자", "상추", "블루베리", "마늘", "양파",
  "파프리카", "수박", "딸기", "사과", "배", "포도", "감귤", "단감", "고구마", "시금치",
  "배추", "고추", "당근", "대파", "참외", "애호박", "가지", "무", "깻잎", "부추",
  "브로콜리", "양배추", "아스파라거스", "체리", "키위", "대추", "쑥갓", "청경채", "케일",
  "미나리", "연근", "우엉", "밤", "매실", "오미자", "유자", "무화과", "셀러리",
];

const regionNames = {
  경기: "경기도",
  강원: "강원특별자치도",
  충북: "충청북도",
  충남: "충청남도",
  전북: "전북특별자치도",
  전남: "전라남도",
  경북: "경상북도",
  경남: "경상남도",
  제주: "제주특별자치도",
  부산: "부산광역시",
};

const blockedPattern =
  /송어|양식|낚시|횟집|수산|축산|동물|곤충|카페|펜션|민박|리조트|캠핑|학교|유치원|어린이집|병원|교회|성당|사찰|박물관|휴양림|백화점|아파트|빌라|부동산|공인중개|요양|재활|정육|식당|맛집|입구|주차장|골프|컨트리|호텔|모텔|게스트하우스|스테이|파크|랜드|유원지|놀이|테마파크|동물원/;

const positivePattern =
  /농장|농원|농가|팜|과수원|작목반|로컬푸드|직거래|농산물|체험농장|토마토|오이|멜론|복숭아|자두|감자|상추|블루베리|마늘|양파|파프리카|수박|딸기|사과|포도|감귤|귤|단감|고구마|시금치|배추|고추|당근|대파|참외|애호박|가지|깻잎|부추|브로콜리|양배추|아스파라거스|체리|키위|대추|쑥갓|청경채|케일|미나리|연근|우엉|매실|오미자|유자|무화과|셀러리/;

function parseFarms(text) {
  const match = text.match(/const realFarmSources = ([\s\S]*?);\s*(?:window\.realFarmSources|$)/);
  if (!match) throw new Error("real-farms.js에서 realFarmSources 배열을 찾지 못했습니다.");
  return JSON.parse(match[1]);
}

function isGenericName(name = "") {
  return /^OSM /.test(name) || /농장구역 (node|way|relation)\//.test(name);
}

function displayLocation(farm) {
  const region = regionNames[farm.region] || farm.region || "전국";
  const city = farm.city && !farm.city.endsWith("권") ? farm.city : "";
  return [region, city].filter(Boolean).join(" ");
}

function isBadFarm(farm) {
  const text = `${farm.name || ""} ${farm.salesType || ""} ${farm.address || ""} ${farm.roadAddress || ""}`;
  if (isGenericName(farm.name)) return false;
  return blockedPattern.test(text) || !positivePattern.test(text);
}

const text = await readFile("real-farms.js", "utf8");
const farms = parseFarms(text);
const counters = new Map();
let removed = 0;
let renamed = 0;

const cleaned = farms
  .filter((farm) => {
    const remove = isBadFarm(farm);
    if (remove) removed += 1;
    return !remove;
  })
  .map((farm, index) => {
    if (!isGenericName(farm.name)) return farm;
    const cropName = cropNames[index % cropNames.length];
    const location = displayLocation(farm);
    const key = `${location} ${cropName}`;
    const count = (counters.get(key) || 0) + 1;
    counters.set(key, count);
    renamed += 1;
    return {
      ...farm,
      name: `${location} ${cropName}농장 ${count}`,
      generatedName: true,
    };
  })
  .sort((a, b) =>
    `${a.region}${a.city}${a.name}`.localeCompare(`${b.region}${b.city}${b.name}`, "ko")
  );

const output = `const realFarmSources = ${JSON.stringify(cleaned, null, 2)};\n\nwindow.realFarmSources = realFarmSources;\n`;
await writeFile("real-farms.js", output, "utf8");

console.log(`before: ${farms.length}`);
console.log(`removed: ${removed}`);
console.log(`renamed generic: ${renamed}`);
console.log(`after: ${cleaned.length}`);
