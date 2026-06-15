const cropImages = {
  tomato:
    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80",
  cucumber:
    "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=900&q=80",
  melon:
    "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=900&q=80",
  peach:
    "https://images.unsplash.com/photo-1531171596281-8b5d26917d8b?auto=format&fit=crop&w=900&q=80",
  plum:
    "https://images.unsplash.com/photo-1627807435299-6d5c3a501c48?auto=format&fit=crop&w=900&q=80",
  potato:
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
  lettuce:
    "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=900&q=80",
  blueberry:
    "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=900&q=80",
  garlic:
    "https://images.unsplash.com/photo-1501420193726-1f65acd36cda?auto=format&fit=crop&w=900&q=80",
  onion:
    "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=900&q=80",
  paprika:
    "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=900&q=80",
  watermelon:
    "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=900&q=80",
};

const FAVORITES_KEY = "seasonal-horticulture-favorites";

const regionCoordinates = {
  경기: { lat: 37.4138, lng: 127.5183 },
  강원: { lat: 37.8228, lng: 128.1555 },
  충북: { lat: 36.8, lng: 127.7 },
  충남: { lat: 36.5184, lng: 126.8 },
  전북: { lat: 35.7175, lng: 127.153 },
  전남: { lat: 34.8679, lng: 126.991 },
  경북: { lat: 36.4919, lng: 128.8889 },
  경남: { lat: 35.4606, lng: 128.2132 },
  제주: { lat: 33.4996, lng: 126.5312 },
  부산: { lat: 35.1796, lng: 129.0756 },
};

const crops = [
  {
    id: "tomato",
    name: "토마토",
    category: "과채류",
    regions: ["부산", "강원", "충남"],
    localSources: [
      { region: "충남", farmName: "논산 햇살토마토농장", city: "논산", salesType: "직거래 / 로컬푸드 매장" },
      { region: "부산", farmName: "강서 대저토마토 농가", city: "부산 강서", salesType: "산지 직송" },
    ],
    seasonMonths: [5, 6, 7, 8, 9],
    image: cropImages.tomato,
    description: "초여름부터 맛이 올라오는 대표 과채류입니다. 완숙 토마토는 생식과 소스용 모두 활용도가 높습니다.",
    pickTip: "표면이 매끈하고 꼭지가 싱싱하며, 들었을 때 묵직한 것을 고르세요.",
    storageTip: "덜 익은 것은 실온에서 익히고, 완숙 후에는 냉장 보관하되 오래 두지 않는 것이 좋습니다.",
    uses: ["샐러드", "소스", "주스"],
  },
  {
    id: "cucumber",
    name: "오이",
    category: "과채류",
    regions: ["충남", "경북", "강원"],
    localSources: [
      { region: "충남", farmName: "천안 아삭오이농장", city: "천안", salesType: "로컬푸드 매장" },
      { region: "강원", farmName: "홍천 여름오이 작목반", city: "홍천", salesType: "직거래" },
    ],
    seasonMonths: [5, 6, 7, 8],
    image: cropImages.cucumber,
    description: "수분감이 풍부해 더운 계절 식탁에 잘 맞는 원예작물입니다.",
    pickTip: "굵기가 일정하고 가시가 살아 있으며 탄력이 있는 오이를 고르세요.",
    storageTip: "물기를 닦고 키친타월로 감싼 뒤 냉장 보관하면 신선도를 더 오래 유지할 수 있습니다.",
    uses: ["냉국", "무침", "피클"],
  },
  {
    id: "melon",
    name: "멜론",
    category: "과일류",
    regions: ["전남", "충남", "경남"],
    localSources: [
      { region: "전남", farmName: "나주 달큰멜론농장", city: "나주", salesType: "예약 구매" },
      { region: "충남", farmName: "부여 굿뜨래 멜론농가", city: "부여", salesType: "로컬푸드 매장" },
    ],
    seasonMonths: [6, 7, 8],
    image: cropImages.melon,
    description: "6월부터 당도가 오르는 시설 원예 대표 과일입니다. 선물용과 디저트용 수요가 높습니다.",
    pickTip: "그물 무늬가 촘촘하고 균일하며 밑부분에서 은은한 향이 나는 것을 고르세요.",
    storageTip: "후숙은 실온에서 하고, 자른 뒤에는 밀폐해 냉장 보관하세요.",
    uses: ["디저트", "주스", "샐러드"],
  },
  {
    id: "peach",
    name: "복숭아",
    category: "과일류",
    regions: ["충북", "경북", "전북"],
    localSources: [
      { region: "충북", farmName: "충주 향기복숭아농원", city: "충주", salesType: "직거래 / 택배" },
      { region: "경북", farmName: "영천 햇복숭아 작목반", city: "영천", salesType: "산지 직송" },
    ],
    seasonMonths: [6, 7, 8, 9],
    image: cropImages.peach,
    description: "초여름부터 출하가 시작되는 향이 좋은 과일입니다. 산지와 품종에 따라 식감 차이가 큽니다.",
    pickTip: "상처가 적고 향이 진하며 좌우 모양이 균형 잡힌 것을 고르세요.",
    storageTip: "단단한 것은 실온 후숙 후 냉장하고, 냉장 보관 시에는 먹기 전 잠시 실온에 두면 향이 살아납니다.",
    uses: ["생과", "청", "디저트"],
  },
  {
    id: "plum",
    name: "자두",
    category: "과일류",
    regions: ["경북", "충북", "경남"],
    localSources: [
      { region: "경북", farmName: "김천 새콤자두농장", city: "김천", salesType: "직거래" },
      { region: "경남", farmName: "거창 여름자두 농가", city: "거창", salesType: "로컬푸드 매장" },
    ],
    seasonMonths: [6, 7, 8],
    image: cropImages.plum,
    description: "새콤달콤한 맛이 특징인 여름 과일입니다. 짧은 제철 기간에 신선도가 중요합니다.",
    pickTip: "껍질 색이 선명하고 과육이 너무 무르지 않으며 흰 과분이 자연스럽게 남은 것을 고르세요.",
    storageTip: "구입 후 빠르게 먹는 것이 좋고, 냉장 보관 시 밀폐 용기에 담아 수분 손실을 줄이세요.",
    uses: ["생과", "잼", "청"],
  },
  {
    id: "potato",
    name: "감자",
    category: "근채류",
    regions: ["강원", "충남", "전북"],
    localSources: [
      { region: "강원", farmName: "평창 고랭지감자농장", city: "평창", salesType: "직거래 / 산지 직송" },
      { region: "전북", farmName: "김제 햇감자 농가", city: "김제", salesType: "로컬푸드 매장" },
    ],
    seasonMonths: [6, 7, 8, 9],
    image: cropImages.potato,
    description: "초여름 햇감자는 껍질이 얇고 포슬한 식감이 살아 있어 식탁 활용도가 높습니다.",
    pickTip: "단단하고 싹이 없으며 표면에 초록빛이 돌지 않는 감자를 고르세요.",
    storageTip: "빛이 들지 않는 서늘한 곳에 보관하고, 사과와 함께 두면 싹이 나는 속도를 늦출 수 있습니다.",
    uses: ["찜", "조림", "수프"],
  },
  {
    id: "lettuce",
    name: "상추",
    category: "엽채류",
    regions: ["경기", "충남", "전북"],
    localSources: [
      { region: "경기", farmName: "남양주 싱싱쌈채농장", city: "남양주", salesType: "로컬푸드 매장" },
      { region: "전북", farmName: "완주 신선상추 농가", city: "완주", salesType: "직거래" },
    ],
    seasonMonths: [4, 5, 6, 9, 10],
    image: cropImages.lettuce,
    description: "봄과 초여름에 부드러운 잎맛이 좋은 대표 엽채류입니다.",
    pickTip: "잎 끝이 마르지 않고 색이 선명하며 줄기 절단면이 깨끗한 것을 고르세요.",
    storageTip: "씻지 않은 상태로 키친타월과 함께 밀폐해 냉장 보관하면 숨이 덜 죽습니다.",
    uses: ["쌈", "겉절이", "샐러드"],
  },
  {
    id: "blueberry",
    name: "블루베리",
    category: "과일류",
    regions: ["전북", "경기", "충남"],
    localSources: [
      { region: "전북", farmName: "고창 블루베리팜", city: "고창", salesType: "체험 수확 / 직거래" },
      { region: "경기", farmName: "양평 베리농원", city: "양평", salesType: "예약 구매" },
    ],
    seasonMonths: [6, 7, 8],
    image: cropImages.blueberry,
    description: "국산 생과 출하가 집중되는 여름 베리류입니다. 신선할수록 과피 탄력이 좋습니다.",
    pickTip: "알이 균일하고 표면의 하얀 과분이 자연스럽게 남아 있는 것을 고르세요.",
    storageTip: "먹기 직전에 씻고, 냉장 보관 시 물기를 피하는 것이 좋습니다.",
    uses: ["생과", "요거트", "잼"],
  },
  {
    id: "garlic",
    name: "마늘",
    category: "양념채소",
    regions: ["경남", "전남", "충남"],
    localSources: [
      { region: "경남", farmName: "남해 햇마늘 농가", city: "남해", salesType: "산지 직송" },
      { region: "전남", farmName: "고흥 마늘 작목반", city: "고흥", salesType: "로컬푸드 매장" },
    ],
    seasonMonths: [5, 6, 7],
    image: cropImages.garlic,
    description: "초여름 수확기에는 저장 마늘과 햇마늘을 구분해 활용할 수 있습니다.",
    pickTip: "쪽이 단단하고 껍질이 잘 마른 마늘을 고르세요.",
    storageTip: "통풍이 잘 되는 서늘한 곳에 두고, 깐 마늘은 밀폐해 냉장 또는 냉동 보관하세요.",
    uses: ["양념", "장아찌", "구이"],
  },
  {
    id: "onion",
    name: "양파",
    category: "양념채소",
    regions: ["전남", "경남", "제주"],
    localSources: [
      { region: "전남", farmName: "무안 황토양파농장", city: "무안", salesType: "직거래 / 산지 직송" },
      { region: "제주", farmName: "애월 햇양파 농가", city: "제주 애월", salesType: "로컬푸드 매장" },
    ],
    seasonMonths: [4, 5, 6, 7],
    image: cropImages.onion,
    description: "봄부터 초여름까지 햇양파 출하가 이어져 단맛이 좋고 조직이 아삭합니다.",
    pickTip: "껍질이 잘 말라 있고 단단하며 무게감이 있는 것을 고르세요.",
    storageTip: "망에 담아 통풍이 되는 곳에 보관하고, 자른 양파는 밀폐해 냉장 보관하세요.",
    uses: ["볶음", "피클", "국물"],
  },
  {
    id: "paprika",
    name: "파프리카",
    category: "과채류",
    regions: ["강원", "경남", "전북"],
    localSources: [
      { region: "강원", farmName: "철원 컬러파프리카팜", city: "철원", salesType: "산지 직송" },
      { region: "전북", farmName: "익산 파프리카 농가", city: "익산", salesType: "로컬푸드 매장" },
    ],
    seasonMonths: [5, 6, 7, 8, 9, 10],
    image: cropImages.paprika,
    description: "시설 원예 비중이 높은 고부가 과채류입니다. 색상별로 식탁 활용도가 좋습니다.",
    pickTip: "색이 선명하고 표면에 윤기가 있으며 꼭지가 마르지 않은 것을 고르세요.",
    storageTip: "물기를 제거하고 밀폐해 냉장 보관하면 아삭한 식감을 유지하기 좋습니다.",
    uses: ["샐러드", "볶음", "구이"],
  },
  {
    id: "watermelon",
    name: "수박",
    category: "과채류",
    regions: ["경북", "충북", "전북"],
    localSources: [
      { region: "경북", farmName: "성주 꿀수박 농가", city: "성주", salesType: "산지 직송" },
      { region: "전북", farmName: "고창 여름수박 작목반", city: "고창", salesType: "직거래" },
    ],
    seasonMonths: [6, 7, 8],
    image: cropImages.watermelon,
    description: "여름철 대표 과채류로 산지별 출하 시기에 따라 신선한 선택지가 달라집니다.",
    pickTip: "줄무늬가 선명하고 배꼽이 작으며 두드렸을 때 맑은 소리가 나는 것을 고르세요.",
    storageTip: "자른 수박은 껍질을 제거해 밀폐 용기에 담고 냉장 보관하세요.",
    uses: ["생과", "주스", "화채"],
  },
];

const state = {
  search: "",
  region: "all",
  category: "all",
  month: new Date().getMonth() + 1,
  selectedId: "",
  favorites: loadFavorites(),
};

const elements = {
  todayButton: document.querySelector("#todayButton"),
  todayDate: document.querySelector("#todayDate"),
  todayCropName: document.querySelector("#todayCropName"),
  todaySummary: document.querySelector("#todaySummary"),
  todayImage: document.querySelector("#todayImage"),
  todayRegion: document.querySelector("#todayRegion"),
  todayCategory: document.querySelector("#todayCategory"),
  freshMeter: document.querySelector("#freshMeter"),
  searchInput: document.querySelector("#searchInput"),
  regionFilter: document.querySelector("#regionFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  monthFilter: document.querySelector("#monthFilter"),
  monthStrip: document.querySelector("#monthStrip"),
  locationButton: document.querySelector("#locationButton"),
  locationStatus: document.querySelector("#locationStatus"),
  nearbyList: document.querySelector("#nearbyList"),
  smallFarmCount: document.querySelector("#smallFarmCount"),
  smallFarmList: document.querySelector("#smallFarmList"),
  resultCount: document.querySelector("#resultCount"),
  cropGrid: document.querySelector("#cropGrid"),
  detailImage: document.querySelector("#detailImage"),
  detailSeason: document.querySelector("#detailSeason"),
  detailName: document.querySelector("#detailName"),
  detailDescription: document.querySelector("#detailDescription"),
  detailMeta: document.querySelector("#detailMeta"),
  detailPick: document.querySelector("#detailPick"),
  detailStorage: document.querySelector("#detailStorage"),
  favoriteButton: document.querySelector("#favoriteButton"),
  favoriteCount: document.querySelector("#favoriteCount"),
  favoriteList: document.querySelector("#favoriteList"),
  regionGrid: document.querySelector("#regionGrid"),
};

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
}

function uniqueValues(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "ko"));
}

function seasonLabel(months) {
  const sorted = [...months].sort((a, b) => a - b);
  const ranges = [];
  let start = sorted[0];
  let prev = sorted[0];

  sorted.slice(1).forEach((month) => {
    if (month === prev + 1) {
      prev = month;
      return;
    }
    ranges.push(start === prev ? `${start}월` : `${start}-${prev}월`);
    start = month;
    prev = month;
  });

  ranges.push(start === prev ? `${start}월` : `${start}-${prev}월`);
  return ranges.join(", ");
}

function freshnessScore(crop, month = state.month) {
  if (!crop.seasonMonths.includes(month)) return 35;
  const index = crop.seasonMonths.indexOf(month);
  const middle = (crop.seasonMonths.length - 1) / 2;
  const distance = Math.abs(index - middle);
  return Math.max(72, Math.round(100 - distance * 12));
}

function getLocalSource(crop, region = state.region) {
  if (!crop.localSources?.length) return null;
  if (region !== "all") {
    return crop.localSources.find((source) => source.region === region) || crop.localSources[0];
  }
  return crop.localSources[0];
}

function getFarmScale(source) {
  if (!source) return "소규모 농장";
  if (source.farmName.includes("작목반")) return "소규모 작목반";
  if (source.farmName.includes("농가")) return "소규모 농가";
  if (source.farmName.includes("팜") || source.farmName.includes("농원")) return "체험형 작은 농장";
  return "소규모 직거래 농장";
}

function getSourcePoint(source) {
  return regionCoordinates[source.region] || null;
}

function distanceKm(from, to) {
  const radius = 6371;
  const dLat = ((to.lat - from.lat) * Math.PI) / 180;
  const dLng = ((to.lng - from.lng) * Math.PI) / 180;
  const lat1 = (from.lat * Math.PI) / 180;
  const lat2 = (to.lat * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getNearbySources(position) {
  return crops
    .flatMap((crop) =>
      (crop.localSources || []).map((source) => ({
        crop,
        source,
        point: getSourcePoint(source),
      })),
    )
    .filter((item) => item.point && item.crop.seasonMonths.includes(Number(state.month)))
    .map((item) => ({
      ...item,
      distance: distanceKm(position, item.point),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);
}

function getSeasonalCrops(month = state.month) {
  return crops
    .filter((crop) => crop.seasonMonths.includes(month))
    .filter((crop) => state.region === "all" || crop.regions.includes(state.region))
    .sort((a, b) => freshnessScore(b, month) - freshnessScore(a, month) || a.name.localeCompare(b.name, "ko"));
}

function setupFilters() {
  uniqueValues(crops.flatMap((crop) => crop.regions)).forEach((region) => {
    elements.regionFilter.insertAdjacentHTML("beforeend", `<option value="${region}">${region}</option>`);
  });

  uniqueValues(crops.map((crop) => crop.category)).forEach((category) => {
    elements.categoryFilter.insertAdjacentHTML("beforeend", `<option value="${category}">${category}</option>`);
  });

  for (let month = 1; month <= 12; month += 1) {
    elements.monthFilter.insertAdjacentHTML("beforeend", `<option value="${month}">${month}월</option>`);
  }
  elements.monthFilter.value = String(state.month);
}

function renderCalendar() {
  elements.monthStrip.innerHTML = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    const count = crops.filter((crop) => crop.seasonMonths.includes(month)).length;
    return `
      <button class="month-button ${month === Number(state.month) ? "active" : ""}" type="button" data-month="${month}">
        ${month}월<br />
        <small>${count}개</small>
      </button>
    `;
  }).join("");
}

function getFilteredCrops() {
  const keyword = state.search.trim().toLowerCase();

  return crops
    .filter((crop) => {
      const haystack = [
        crop.name,
        crop.category,
        crop.description,
        crop.pickTip,
        crop.storageTip,
        ...crop.regions,
        ...crop.uses,
        ...(crop.localSources || []).flatMap((source) => [
          source.farmName,
          source.city,
          source.salesType,
          getFarmScale(source),
        ]),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !keyword || haystack.includes(keyword);
      const matchesRegion = state.region === "all" || crop.regions.includes(state.region);
      const matchesCategory = state.category === "all" || crop.category === state.category;
      const matchesMonth = crop.seasonMonths.includes(Number(state.month));

      return matchesSearch && matchesRegion && matchesCategory && matchesMonth;
    })
    .sort((a, b) => freshnessScore(b) - freshnessScore(a) || a.name.localeCompare(b.name, "ko"));
}

function renderToday() {
  const seasonal = getSeasonalCrops();
  const today = seasonal[0] || crops[0];
  const score = freshnessScore(today);
  const dateText = new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(new Date());

  elements.todayDate.textContent = `${dateText} 기준 추천`;
  elements.todayCropName.textContent = today.name;
  elements.todaySummary.textContent = today.description;
  elements.todayImage.style.backgroundImage = `url("${today.image}")`;
  const localSource = getLocalSource(today);
  elements.todayRegion.textContent = localSource
    ? `${localSource.city} · ${localSource.farmName}`
    : today.regions.join(", ");
  elements.todayCategory.textContent = localSource ? localSource.salesType : today.category;
  elements.freshMeter.style.width = `${score}%`;

  if (!state.selectedId) state.selectedId = today.id;
}

function renderCards(filteredCrops) {
  elements.resultCount.textContent = `${filteredCrops.length}개`;

  if (!filteredCrops.length) {
    elements.cropGrid.innerHTML = '<p class="empty">조건에 맞는 제철 작물이 없습니다. 월이나 필터를 바꿔보세요.</p>';
    return;
  }

  elements.cropGrid.innerHTML = filteredCrops
    .map(
      (crop) => {
        const source = getLocalSource(crop);
        return `
        <button class="crop-card ${crop.id === state.selectedId ? "active" : ""}" type="button" data-id="${crop.id}">
          <span class="crop-image" style="background-image: url('${crop.image}')"></span>
          <span class="crop-body">
            <span class="eyebrow">${source?.city || crop.regions[0]} · ${crop.category}</span>
            <h3>${source?.farmName || crop.name}</h3>
            <p>${crop.name} · ${crop.description}</p>
            <span class="badge-row">
              <span class="badge gold">제철 ${seasonLabel(crop.seasonMonths)}</span>
              <span class="badge">${getFarmScale(source)}</span>
            </span>
          </span>
        </button>
      `;
      },
    )
    .join("");
}

function renderDetail(filteredCrops) {
  const selected =
    filteredCrops.find((crop) => crop.id === state.selectedId) ||
    crops.find((crop) => crop.id === state.selectedId) ||
    filteredCrops[0] ||
    getSeasonalCrops()[0] ||
    crops[0];

  state.selectedId = selected.id;
  elements.detailImage.style.backgroundImage = `url("${selected.image}")`;
  elements.detailSeason.textContent = `제철 ${seasonLabel(selected.seasonMonths)}`;
  elements.detailName.textContent = selected.name;
  elements.detailDescription.textContent = selected.description;
  const localSource = getLocalSource(selected);
  elements.detailMeta.innerHTML = `
    <dt>분류</dt>
    <dd>${selected.category}</dd>
    <dt>가까운 산지</dt>
    <dd>${selected.regions.join(", ")}</dd>
    <dt>추천 농장</dt>
    <dd>${localSource ? `${localSource.farmName} (${localSource.city})` : "지역 정보 없음"}</dd>
    <dt>농장 규모</dt>
    <dd>${localSource ? getFarmScale(localSource) : "확인 필요"}</dd>
    <dt>구매 방식</dt>
    <dd>${localSource ? localSource.salesType : "확인 필요"}</dd>
    <dt>활용</dt>
    <dd>${selected.uses.join(", ")}</dd>
    <dt>신선도</dt>
    <dd>${freshnessScore(selected)}점</dd>
  `;
  elements.detailPick.textContent = selected.pickTip;
  elements.detailStorage.textContent = selected.storageTip;
  renderFavoriteButton(selected);
}

function renderFavoriteButton(crop) {
  const isSaved = state.favorites.includes(crop.id);
  elements.favoriteButton.textContent = isSaved ? "관심 작물 해제" : "관심 작물 저장";
  elements.favoriteButton.classList.toggle("saved", isSaved);
  elements.favoriteButton.dataset.id = crop.id;
}

function renderFavorites() {
  const savedCrops = state.favorites
    .map((id) => crops.find((crop) => crop.id === id))
    .filter(Boolean);

  elements.favoriteCount.textContent = `${savedCrops.length}개 저장`;

  if (!savedCrops.length) {
    elements.favoriteList.innerHTML =
      '<p class="empty">관심 작물이 없습니다. 상세 화면에서 관심 작물을 저장해보세요.</p>';
    return;
  }

  elements.favoriteList.innerHTML = savedCrops
    .map(
      (crop) => `
        <article class="saved-item">
          <strong>${crop.name}</strong>
          <span>${crop.category} · 제철 ${seasonLabel(crop.seasonMonths)}</span>
          <span>${getLocalSource(crop)?.farmName || crop.regions.join(", ")}</span>
          <button type="button" data-remove-favorite="${crop.id}">삭제</button>
        </article>
      `,
    )
    .join("");
}

function renderRegionalPicks() {
  const regions = uniqueValues(crops.flatMap((crop) => crop.regions));
  const cards = regions
    .map((region) => {
      const regionalCrops = crops
        .filter((crop) => crop.regions.includes(region) && crop.seasonMonths.includes(Number(state.month)))
        .sort((a, b) => freshnessScore(b) - freshnessScore(a));

      if (!regionalCrops.length) return "";

      const names = regionalCrops.slice(0, 3).map((crop) => crop.name).join(", ");
      const top = regionalCrops[0];

      return `
        <article class="region-item">
          <strong>${region}</strong>
          <span>${state.month}월 근처 추천: ${names}</span>
          <span>대표 작물 ${top.name} · 신선도 ${freshnessScore(top)}점</span>
        </article>
      `;
    })
    .filter(Boolean);

  elements.regionGrid.innerHTML = cards.length
    ? cards.join("")
    : '<p class="empty">선택한 월에 추천할 지역별 제철 작물이 없습니다.</p>';
}

function renderSmallFarms() {
  const farmItems = crops
    .flatMap((crop) =>
      (crop.localSources || []).map((source) => ({
        crop,
        source,
        scale: getFarmScale(source),
      })),
    )
    .filter((item) => item.crop.seasonMonths.includes(Number(state.month)))
    .filter((item) => state.region === "all" || item.source.region === state.region)
    .slice(0, 8);

  elements.smallFarmCount.textContent = `${farmItems.length}곳`;

  if (!farmItems.length) {
    elements.smallFarmList.innerHTML =
      '<p class="empty">선택한 조건에 맞는 작은 농장 후보가 없습니다. 지역이나 월을 바꿔보세요.</p>';
    return;
  }

  elements.smallFarmList.innerHTML = farmItems
    .map(
      ({ crop, source, scale }) => `
        <article class="small-farm-item">
          <strong>${source.farmName}</strong>
          <span>${source.city} · ${scale}</span>
          <span>${crop.name} · 제철 ${seasonLabel(crop.seasonMonths)}</span>
          <span>${source.salesType}</span>
        </article>
      `,
    )
    .join("");
}

function render() {
  const filteredCrops = getFilteredCrops();
  renderCalendar();
  renderToday();

  if (filteredCrops.length && !filteredCrops.some((crop) => crop.id === state.selectedId)) {
    state.selectedId = filteredCrops[0].id;
  }

  renderCards(filteredCrops);
  renderDetail(filteredCrops);
  renderFavorites();
  renderRegionalPicks();
  renderSmallFarms();
}

function setMonth(month) {
  state.month = Number(month);
  state.selectedId = "";
  elements.monthFilter.value = String(state.month);
  render();
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter((favoriteId) => favoriteId !== id);
  } else {
    state.favorites = [...state.favorites, id];
  }
  saveFavorites();
  render();
}

function renderNearbySources(items) {
  if (!items.length) {
    elements.nearbyList.innerHTML =
      '<p class="empty">선택한 월에 가까운 제철 농장 후보가 없습니다. 월을 바꿔 다시 확인해보세요.</p>';
    return;
  }

  elements.nearbyList.innerHTML = items
    .map(
      ({ crop, source, distance }) => `
        <article class="nearby-item">
          <strong>${source.farmName}</strong>
          <span>${source.city} · 약 ${distance.toFixed(1)}km</span>
          <span>${crop.name} · ${getFarmScale(source)}</span>
          <span>${source.salesType}</span>
          <span>제철 ${seasonLabel(crop.seasonMonths)} · 신선도 ${freshnessScore(crop)}점</span>
        </article>
      `,
    )
    .join("");
}

function findNearMe() {
  if (!navigator.geolocation) {
    elements.locationStatus.textContent = "이 브라우저에서는 현재 위치 기능을 사용할 수 없습니다.";
    return;
  }

  elements.locationStatus.textContent = "현재 위치를 확인하는 중입니다...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const current = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      const nearby = getNearbySources(current);
      elements.locationStatus.textContent =
        "현재 위치 기준 가까운 로컬 농장 후보를 거리순으로 정리했습니다.";
      renderNearbySources(nearby);
    },
    () => {
      elements.locationStatus.textContent =
        "위치 권한을 허용하지 않아 현재 위치 추천을 사용할 수 없습니다. 지역 필터로도 가까운 작물을 찾을 수 있습니다.";
    },
    {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 300000,
    },
  );
}

function scrollToTodayRecommendation() {
  const seasonal = getSeasonalCrops();
  if (seasonal[0]) {
    state.selectedId = seasonal[0].id;
    render();
  }
  document.querySelector("#finder").scrollIntoView({ behavior: "smooth", block: "start" });
}

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

elements.regionFilter.addEventListener("change", (event) => {
  state.region = event.target.value;
  render();
});

elements.categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  render();
});

elements.monthFilter.addEventListener("change", (event) => {
  setMonth(event.target.value);
});

elements.monthStrip.addEventListener("click", (event) => {
  const button = event.target.closest(".month-button");
  if (button) setMonth(button.dataset.month);
});

elements.cropGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".crop-card");
  if (!card) return;

  state.selectedId = card.dataset.id;
  render();
  document.querySelector("#cropDetail").scrollIntoView({ behavior: "smooth", block: "nearest" });
});

elements.todayButton.addEventListener("click", scrollToTodayRecommendation);
elements.locationButton.addEventListener("click", findNearMe);
elements.favoriteButton.addEventListener("click", () => {
  if (elements.favoriteButton.dataset.id) {
    toggleFavorite(elements.favoriteButton.dataset.id);
  }
});
elements.favoriteList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-favorite]");
  if (button) toggleFavorite(button.dataset.removeFavorite);
});

setupFilters();
render();
