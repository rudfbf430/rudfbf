import { writeFile } from "node:fs/promises";

const endpoint = "https://overpass-api.de/api/interpreter";
const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  "User-Agent": "GeuncheobatFarmDataCollector/1.0",
};

const regionBounds = [
  { region: "경기", city: "수도권", bbox: [36.8, 126.0, 38.4, 128.0] },
  { region: "강원", city: "강원권", bbox: [37.0, 127.3, 38.7, 129.5] },
  { region: "충북", city: "충북권", bbox: [36.0, 127.0, 37.4, 128.6] },
  { region: "충남", city: "충남권", bbox: [35.9, 125.8, 37.1, 127.6] },
  { region: "전북", city: "전북권", bbox: [35.3, 126.2, 36.3, 127.9] },
  { region: "전남", city: "전남권", bbox: [34.0, 125.0, 35.6, 127.6] },
  { region: "경북", city: "경북권", bbox: [35.5, 127.7, 37.4, 130.0] },
  { region: "경남", city: "경남권", bbox: [34.6, 127.5, 35.8, 129.5] },
  { region: "제주", city: "제주권", bbox: [33.0, 126.0, 33.7, 127.1] },
  { region: "부산", city: "부산권", bbox: [35.0, 128.7, 35.4, 129.4] },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getCenter(element) {
  if (element.type === "node") return { lat: element.lat, lng: element.lon };
  if (element.center) return { lat: element.center.lat, lng: element.center.lon };
  return null;
}

function getName(element) {
  const tags = element.tags || {};
  return (
    tags["name:ko"] ||
    tags.name ||
    tags.operator ||
    `OSM 농장구역 ${element.type}/${element.id}`
  );
}

function getSalesType(element) {
  const tags = element.tags || {};
  if (tags.shop === "farm") return "농산물 직매장";
  if (tags.produce) return `생산 품목: ${tags.produce}`;
  return "지도 등록 농장구역";
}

async function fetchRegion({ region, city, bbox }) {
  const [south, west, north, east] = bbox;
  const query = `
    [out:json][timeout:90];
    (
      nwr["shop"="farm"](${south},${west},${north},${east});
      nwr["landuse"="farmyard"](${south},${west},${north},${east});
      nwr["produce"](${south},${west},${north},${east});
    );
    out center 1500;
  `;
  const body = `data=${encodeURIComponent(query)}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body,
  });

  if (!response.ok) {
    throw new Error(`${region} Overpass ${response.status}: ${await response.text()}`);
  }

  const data = await response.json();
  return (data.elements || [])
    .map((element) => {
      const center = getCenter(element);
      if (!center) return null;
      return {
        id: `${element.type}/${element.id}`,
        name: getName(element),
        region,
        city:
          element.tags?.["addr:city"] ||
          element.tags?.["addr:county"] ||
          element.tags?.["addr:town"] ||
          city,
        lat: Number(center.lat.toFixed(6)),
        lng: Number(center.lng.toFixed(6)),
        salesType: getSalesType(element),
        source: "OpenStreetMap",
        osmUrl: `https://www.openstreetmap.org/${element.type}/${element.id}`,
      };
    })
    .filter(Boolean);
}

const farmsById = new Map();

for (const bounds of regionBounds) {
  try {
    const farms = await fetchRegion(bounds);
    farms.forEach((farm) => farmsById.set(farm.id, farm));
    console.log(`${bounds.region}: ${farms.length}`);
  } catch (error) {
    console.error(error.message);
  }
  await sleep(1200);
}

const farms = [...farmsById.values()].sort((a, b) =>
  `${a.region}${a.city}${a.name}`.localeCompare(`${b.region}${b.city}${b.name}`, "ko"),
);

const output = `const realFarmSources = ${JSON.stringify(farms, null, 2)};\n`;
await writeFile("real-farms.js", output, "utf8");
console.log(`saved real-farms.js: ${farms.length}`);
