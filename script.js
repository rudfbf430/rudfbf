const imageSet = {
  village:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  fruit:
    "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80",
  water:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  tea:
    "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&w=900&q=80",
  flower:
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
};

function mapUrl(query) {
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
}

const welchonUrl = "https://www.welchon.com/web/index.do";

const farms = [
  {
    id: "jeju-sehwa",
    name: "제주 세화리체험마을",
    region: "제주",
    area: "제주특별자치도",
    address: "제주특별자치도 세화리",
    products: ["해녀문화", "바다체험", "마을체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["해녀 문화 체험", "바다 마을 탐방", "지역 체험"],
    summary: "제주 바다와 해녀의 삶을 가까이 만날 수 있는 체험마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("제주 세화리체험마을"),
    position: { x: 31, y: 84 },
    image: imageSet.water,
  },
  {
    id: "yeongwol-raft",
    name: "영월 한반도뗏목마을",
    region: "강원",
    area: "강원특별자치도 영월군",
    address: "강원특별자치도 영월군 한반도면",
    products: ["뗏목체험", "강 체험", "마을체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["동강 뗏목 체험", "한반도 지형 탐방", "농촌마을 체험"],
    summary: "한반도 지형과 동강 물길을 함께 즐길 수 있는 체험마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("영월 한반도뗏목마을"),
    position: { x: 56, y: 33 },
    image: imageSet.water,
  },
  {
    id: "sancheong-namsa",
    name: "산청 남사예담촌",
    region: "경남",
    area: "경상남도 산청군",
    address: "경상남도 산청군 단성면 남사리",
    products: ["전통마을", "천연염색", "문화체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["천연염색 체험", "전통마을 탐방", "문화 체험"],
    summary: "전통마을 풍경과 천연의 색을 경험할 수 있는 농촌 체험지입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("산청 남사예담촌"),
    position: { x: 58, y: 68 },
    image: imageSet.village,
  },
  {
    id: "danyang-handemy",
    name: "단양 한드미마을",
    region: "충북",
    area: "충청북도 단양군",
    address: "충청북도 단양군 가곡면 한드미길",
    products: ["계곡체험", "농촌체험", "생태체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["계곡 물놀이", "농촌마을 체험", "자연 생태 체험"],
    summary: "소백산 아래에서 계곡과 농촌 체험을 함께 즐기는 마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("단양 한드미마을"),
    position: { x: 55, y: 42 },
    image: imageSet.water,
  },
  {
    id: "pyeongchang-eoreumchi",
    name: "평창 어름치마을",
    region: "강원",
    area: "강원특별자치도 평창군",
    address: "강원특별자치도 평창군 미탄면",
    products: ["래프팅", "강 체험", "농촌체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["동강 래프팅", "물길 체험", "농촌마을 체험"],
    summary: "동강 물살을 즐기는 래프팅 중심의 농촌 체험마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("평창 어름치마을"),
    position: { x: 60, y: 29 },
    image: imageSet.water,
  },
  {
    id: "namhae-dumo",
    name: "남해 두모마을",
    region: "경남",
    area: "경상남도 남해군",
    address: "경상남도 남해군 상주면 두모리",
    products: ["해안마을", "꽃", "힐링체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["해안 마을 탐방", "꽃길 체험", "농촌 힐링"],
    summary: "바다와 꽃, 소박한 마을 풍경이 어우러진 농촌여행지입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: "https://www.welchon.com/vrRural/welchon_dumo/index.html",
    directionUrl: mapUrl("남해 두모마을"),
    position: { x: 53, y: 78 },
    image: imageSet.flower,
  },
  {
    id: "yangyang-dallae",
    name: "양양 달래촌마을",
    region: "강원",
    area: "강원특별자치도 양양군",
    address: "강원특별자치도 양양군 현남면",
    products: ["산촌체험", "힐링체험", "마을체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["산촌 마을 체험", "휴식 프로그램", "자연 탐방"],
    summary: "몸과 마음이 함께 쉬어가는 산촌형 농촌 체험마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: "https://www.welchon.com/vrRural/welchon_dallaechon/index.html",
    directionUrl: mapUrl("양양 달래촌마을"),
    position: { x: 67, y: 20 },
    image: imageSet.village,
  },
  {
    id: "wanju-andeok",
    name: "완주 안덕마을",
    region: "전북",
    area: "전북특별자치도 완주군",
    address: "전북특별자치도 완주군 구이면 안덕리",
    products: ["치유체험", "건강체험", "농촌체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["건강 힐링 체험", "농촌 치유 프로그램", "마을 탐방"],
    summary: "깊은 산속에서 건강과 힐링 체험을 제공하는 농촌마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("완주 안덕마을"),
    position: { x: 44, y: 59 },
    image: imageSet.village,
  },
  {
    id: "gangneung-peach",
    name: "강릉 복사꽃마을",
    region: "강원",
    area: "강원특별자치도 강릉시",
    address: "강원특별자치도 강릉시 장덕리",
    products: ["복사꽃", "과수", "마을체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["꽃길 산책", "과수마을 탐방", "농촌 체험"],
    summary: "복사꽃 풍경을 중심으로 한 청정 농촌마을 여행지입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("강릉 복사꽃마을"),
    position: { x: 65, y: 25 },
    image: imageSet.flower,
  },
  {
    id: "icheon-sansuyu",
    name: "이천 산수유마을",
    region: "경기",
    area: "경기도 이천시",
    address: "경기도 이천시 백사면 도립리",
    products: ["산수유", "꽃", "열매"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["산수유 꽃길", "열매 수확 체험", "마을 탐방"],
    summary: "봄에는 노란 꽃, 가을에는 붉은 열매가 이어지는 산수유 산지입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: "https://www.welchon.com/vrRural/sansuyoo_village/index.html",
    directionUrl: mapUrl("이천 산수유마을"),
    position: { x: 45, y: 36 },
    image: imageSet.flower,
  },
  {
    id: "cheongyang-alps",
    name: "청양 알프스마을",
    region: "충남",
    area: "충청남도 청양군",
    address: "충청남도 청양군 정산면 천장리",
    products: ["얼음축제", "마을체험", "농촌체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["계절 축제", "마을 체험", "농촌 체험"],
    summary: "칠갑산과 천장호 주변의 계절 축제가 유명한 농촌마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: "https://www.welchon.com/vrRural/alps_village/index.html",
    directionUrl: mapUrl("청양 알프스마을"),
    position: { x: 40, y: 50 },
    image: imageSet.village,
  },
  {
    id: "boryeong-cheongra",
    name: "보령 청라은행마을",
    region: "충남",
    area: "충청남도 보령시",
    address: "충청남도 보령시 청라면 장현리",
    products: ["은행나무", "마을체험", "가을체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["은행나무길 탐방", "마을 체험", "계절 체험"],
    summary: "노랗게 물든 은행나무 풍경으로 알려진 농촌마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("보령 청라은행마을"),
    position: { x: 36, y: 51 },
    image: imageSet.village,
  },
  {
    id: "gapyeong-morningcalm",
    name: "가평 아침고요푸른마을",
    region: "경기",
    area: "경기도 가평군",
    address: "경기도 가평군 상면 행현리",
    products: ["꽃", "봄나들이", "농촌체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["꽃길 산책", "봄나들이", "농촌 체험"],
    summary: "봄철 꽃놀이와 농촌 나들이 코스로 소개된 마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("가평 아침고요푸른마을"),
    position: { x: 49, y: 29 },
    image: imageSet.flower,
  },
  {
    id: "gochang-bookvillage",
    name: "고창 책마을해리",
    region: "전북",
    area: "전북특별자치도 고창군",
    address: "전북특별자치도 고창군 해리면",
    products: ["책마을", "문화체험", "농촌체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["책마을 체험", "문화 프로그램", "농촌 탐방"],
    summary: "책과 농촌 풍경이 함께 있는 문화형 농촌여행지입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("고창 책마을해리"),
    position: { x: 36, y: 63 },
    image: imageSet.village,
  },
  {
    id: "samcheok-deokpung",
    name: "삼척 덕풍계곡마을",
    region: "강원",
    area: "강원특별자치도 삼척시",
    address: "강원특별자치도 삼척시 가곡면 풍곡리",
    products: ["계곡", "물놀이", "산촌체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["계곡 체험", "여름 물놀이", "산촌 탐방"],
    summary: "여름 계곡 체험과 산촌 여행지로 소개된 마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("삼척 덕풍계곡마을"),
    position: { x: 67, y: 36 },
    image: imageSet.water,
  },
  {
    id: "gyeongju-sesim",
    name: "경주 세심마을",
    region: "경북",
    area: "경상북도 경주시",
    address: "경상북도 경주시 안강읍 옥산리",
    products: ["전통마을", "가을풍경", "문화체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["마을 산책", "전통문화 체험", "계절 풍경 탐방"],
    summary: "경주의 가을 풍경과 전통마을 산책 코스로 소개된 곳입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("경주 세심마을"),
    position: { x: 66, y: 60 },
    image: imageSet.village,
  },
  {
    id: "jeonju-colorvillage",
    name: "전주 원색명화마을",
    region: "전북",
    area: "전북특별자치도 전주시",
    address: "전북특별자치도 전주시 완산구",
    products: ["벽화", "문화체험", "마을탐방"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["벽화마을 산책", "문화 체험", "전주 여행"],
    summary: "마을 풍경과 벽화가 어우러진 전주권 농촌여행 코스입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("전주 원색명화마을"),
    position: { x: 43, y: 59 },
    image: imageSet.village,
  },
  {
    id: "sancheong-deokcheon",
    name: "지리산덕천강마을",
    region: "경남",
    area: "경상남도 산청군",
    address: "경상남도 산청군 시천면",
    products: ["겨울체험", "강마을", "농촌체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["계절 체험", "강마을 탐방", "농촌 여행"],
    summary: "지리산과 덕천강 주변의 농촌 여행지로 소개된 마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("지리산덕천강마을"),
    position: { x: 55, y: 70 },
    image: imageSet.water,
  },
  {
    id: "inje-baekdam",
    name: "인제 백담마을",
    region: "강원",
    area: "강원특별자치도 인제군",
    address: "강원특별자치도 인제군 북면 용대리",
    products: ["겨울여행", "산촌체험", "설악산"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["산촌 체험", "겨울 여행", "설악 자락 탐방"],
    summary: "설악산 자락의 겨울 농촌여행지로 소개된 마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("인제 백담마을"),
    position: { x: 61, y: 19 },
    image: imageSet.village,
  },
  {
    id: "wonju-poppy",
    name: "원주 꽃양귀비마을",
    region: "강원",
    area: "강원특별자치도 원주시",
    address: "강원특별자치도 원주시 판부면",
    products: ["꽃양귀비", "꽃축제", "농촌체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["꽃길 산책", "계절 축제", "농촌 체험"],
    summary: "붉은 꽃물결이 펼쳐지는 계절형 농촌여행지입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("원주 꽃양귀비마을"),
    position: { x: 53, y: 34 },
    image: imageSet.flower,
  },
  {
    id: "seosan-green",
    name: "서산 초록꿈틀마을",
    region: "충남",
    area: "충청남도 서산시",
    address: "충청남도 서산시",
    products: ["생태체험", "농촌체험", "마을체험"],
    size: "마을 단위",
    experience: true,
    rental: false,
    programs: ["자연 체험", "농촌마을 탐방", "생태 프로그램"],
    summary: "자연과 함께 살아가는 법을 주제로 소개된 농촌 체험마을입니다.",
    phone: "",
    reservationUrl: "",
    rentalUrl: "",
    sourceName: "웰촌",
    sourceUrl: welchonUrl,
    directionUrl: mapUrl("서산 초록꿈틀마을"),
    position: { x: 34, y: 47 },
    image: imageSet.village,
  },
];

const state = {
  search: "",
  region: "all",
  product: "all",
  service: "all",
  selectedId: farms[0].id,
};

const elements = {
  year: document.querySelector("#year"),
  searchInput: document.querySelector("#searchInput"),
  regionFilter: document.querySelector("#regionFilter"),
  productFilter: document.querySelector("#productFilter"),
  chips: document.querySelectorAll(".chip"),
  mapCanvas: document.querySelector("#mapCanvas"),
  farmGrid: document.querySelector("#farmGrid"),
  resultCount: document.querySelector("#resultCount"),
  detailImage: document.querySelector("#detailImage"),
  detailRegion: document.querySelector("#detailRegion"),
  detailName: document.querySelector("#detailName"),
  detailSummary: document.querySelector("#detailSummary"),
  detailMeta: document.querySelector("#detailMeta"),
  programList: document.querySelector("#programList"),
  detailActions: document.querySelector("#detailActions"),
};

if (elements.year) {
  elements.year.textContent = `© ${new Date().getFullYear()} FarmLink`;
}

function uniqueValues(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "ko"));
}

function setupFilters() {
  uniqueValues(farms.map((farm) => farm.region)).forEach((region) => {
    elements.regionFilter.insertAdjacentHTML(
      "beforeend",
      `<option value="${region}">${region}</option>`,
    );
  });

  uniqueValues(farms.flatMap((farm) => farm.products)).forEach((product) => {
    elements.productFilter.insertAdjacentHTML(
      "beforeend",
      `<option value="${product}">${product}</option>`,
    );
  });
}

function getFilteredFarms() {
  const keyword = state.search.trim().toLowerCase();

  return farms.filter((farm) => {
    const haystack = [
      farm.name,
      farm.region,
      farm.area,
      farm.address,
      farm.size,
      farm.summary,
      farm.phone,
      farm.sourceName,
      ...farm.products,
      ...farm.programs,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = !keyword || haystack.includes(keyword);
    const matchesRegion = state.region === "all" || farm.region === state.region;
    const matchesProduct =
      state.product === "all" || farm.products.includes(state.product);
    const matchesService =
      state.service === "all" ||
      (state.service === "experience" && farm.experience) ||
      (state.service === "rental" && farm.rental);

    return matchesSearch && matchesRegion && matchesProduct && matchesService;
  });
}

function updateHash(id) {
  const nextHash = `farm=${id}`;

  if (window.location.hash.slice(1) !== nextHash) {
    history.replaceState(null, "", `#${nextHash}`);
  }
}

function selectFarm(id, shouldScroll = true) {
  state.selectedId = id;
  render();
  updateHash(id);

  if (shouldScroll) {
    document.querySelector("#farmDetail").scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
}

function renderMap(filteredFarms) {
  elements.mapCanvas.innerHTML = "";

  filteredFarms.forEach((farm, index) => {
    const marker = document.createElement("button");
    marker.className = `marker ${farm.rental ? "rental" : "experience"}${
      farm.id === state.selectedId ? " active" : ""
    }`;
    marker.type = "button";
    marker.style.left = `${farm.position.x}%`;
    marker.style.top = `${farm.position.y}%`;
    marker.setAttribute("aria-label", `${farm.name} 상세 보기`);
    marker.innerHTML = `<span>${index + 1}</span>`;
    marker.addEventListener("click", () => selectFarm(farm.id));
    elements.mapCanvas.appendChild(marker);
  });
}

function renderCards(filteredFarms) {
  elements.resultCount.textContent = `${filteredFarms.length}개 공개 체험지`;
  elements.farmGrid.innerHTML = "";

  if (filteredFarms.length === 0) {
    elements.farmGrid.innerHTML =
      '<p class="empty">조건에 맞는 농장이 없습니다. 필터를 조정해보세요.</p>';
    return;
  }

  filteredFarms.forEach((farm) => {
    const card = document.createElement("article");
    card.className = "farm-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="farm-card-image" style="background-image: url('${farm.image}')"></div>
      <div class="farm-card-body">
        <p class="eyebrow">${farm.area}</p>
        <h3>${farm.name}</h3>
        <p>${farm.summary}</p>
        <div class="badge-row">
          ${farm.products.map((product) => `<span class="badge">${product}</span>`).join("")}
          ${farm.experience ? '<span class="badge green">체험 가능</span>' : ""}
          ${farm.rental ? '<span class="badge blue">임대 가능</span>' : ""}
        </div>
        <span class="card-link">상세 연결 보기</span>
      </div>
    `;
    card.addEventListener("click", () => selectFarm(farm.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") selectFarm(farm.id);
    });
    elements.farmGrid.appendChild(card);
  });
}

function actionLink({ href, label, variant = "", disabled = false }) {
  if (disabled || !href) {
    return `<span class="action-button disabled">${label}</span>`;
  }

  const target = href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
  return `<a class="action-button ${variant}" href="${href}"${target}>${label}</a>`;
}

function renderDetail(filteredFarms) {
  const selected =
    filteredFarms.find((farm) => farm.id === state.selectedId) || filteredFarms[0] || farms[0];

  state.selectedId = selected.id;
  elements.detailImage.style.backgroundImage = `url('${selected.image}')`;
  elements.detailRegion.textContent = selected.area;
  elements.detailName.textContent = selected.name;
  elements.detailSummary.textContent = selected.summary;
  elements.detailMeta.innerHTML = `
    <dt>주소</dt>
    <dd>${selected.address}</dd>
    <dt>품목</dt>
    <dd>${selected.products.join(", ")}</dd>
    <dt>규모</dt>
    <dd>${selected.size}</dd>
    <dt>체험</dt>
    <dd>${selected.experience ? "가능" : "미운영"}</dd>
    <dt>임대</dt>
    <dd>${selected.rental ? "가능" : "확인 필요"}</dd>
    <dt>연락처</dt>
    <dd>${selected.phone || "확인 필요"}</dd>
    <dt>출처</dt>
    <dd>${selected.sourceName}</dd>
  `;
  elements.programList.innerHTML = selected.programs
    .map((program) => `<span class="program">${program}</span>`)
    .join("");
  elements.detailActions.innerHTML = [
    actionLink({
      href: selected.phone ? `tel:${selected.phone.replaceAll("-", "")}` : "",
      label: selected.phone ? "전화하기" : "전화 확인 필요",
      variant: "primary-action",
      disabled: !selected.phone,
    }),
    actionLink({
      href: selected.sourceUrl,
      label: "출처 보기",
    }),
    actionLink({
      href: selected.directionUrl,
      label: "길찾기",
    }),
    actionLink({
      href: selected.rentalUrl,
      label: selected.rental ? "임대 문의" : "임대 확인 필요",
      disabled: !selected.rental,
    }),
  ].join("");
}

function render() {
  const filteredFarms = getFilteredFarms();

  if (!filteredFarms.some((farm) => farm.id === state.selectedId) && filteredFarms[0]) {
    state.selectedId = filteredFarms[0].id;
  }

  renderMap(filteredFarms);
  renderCards(filteredFarms);
  renderDetail(filteredFarms);
}

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

elements.regionFilter.addEventListener("change", (event) => {
  state.region = event.target.value;
  render();
});

elements.productFilter.addEventListener("change", (event) => {
  state.product = event.target.value;
  render();
});

elements.chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    elements.chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    state.service = chip.dataset.filter;
    render();
  });
});

function selectFromHash() {
  const hashValue = window.location.hash.replace("#farm=", "");
  const farm = farms.find((item) => item.id === hashValue);

  if (farm) {
    state.selectedId = farm.id;
  }
}

setupFilters();
selectFromHash();
render();
