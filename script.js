const farms = [
  {
    id: "yangpyeong-berry",
    name: "양평 햇살딸기농장",
    region: "경기",
    area: "경기도 양평군",
    products: ["딸기", "상추"],
    size: "약 2,000평",
    experience: true,
    rental: false,
    programs: ["딸기 따기", "가족 주말 체험", "수확물 포장"],
    summary: "수도권에서 접근하기 좋은 딸기 체험형 농장입니다.",
    position: { x: 45, y: 31 },
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "jeju-citrus",
    name: "제주 바람감귤농원",
    region: "제주",
    area: "제주특별자치도 서귀포시",
    products: ["감귤", "한라봉"],
    size: "약 4,500평",
    experience: true,
    rental: true,
    programs: ["감귤 따기", "소형 구획 임대", "농산물 직배송"],
    summary: "체험과 소규모 임대 구획을 함께 운영하는 감귤 농원입니다.",
    position: { x: 32, y: 84 },
    image:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gangwon-potato",
    name: "평창 고랭지감자밭",
    region: "강원",
    area: "강원특별자치도 평창군",
    products: ["감자", "배추"],
    size: "약 8,000평",
    experience: false,
    rental: true,
    programs: ["계절형 밭 임대", "수확 대행", "농기구 지원"],
    summary: "고랭지 작물 재배와 계절형 밭 임대를 연결합니다.",
    position: { x: 58, y: 26 },
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "chungnam-tomato",
    name: "논산 스마트토마토팜",
    region: "충남",
    area: "충청남도 논산시",
    products: ["토마토", "방울토마토"],
    size: "스마트온실 1,200평",
    experience: true,
    rental: false,
    programs: ["스마트팜 견학", "토마토 수확", "진로 체험"],
    summary: "스마트온실 운영 방식을 볼 수 있는 교육형 농장입니다.",
    position: { x: 42, y: 51 },
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "jeonnam-green-tea",
    name: "보성 푸른차밭",
    region: "전남",
    area: "전라남도 보성군",
    products: ["녹차", "허브"],
    size: "약 12,000평",
    experience: true,
    rental: false,
    programs: ["찻잎 따기", "차 만들기", "농장 투어"],
    summary: "차밭 체험과 가공 프로그램을 운영하는 남해안 농장입니다.",
    position: { x: 47, y: 69 },
    image:
      "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gyeongbuk-apple",
    name: "청송 사과정원",
    region: "경북",
    area: "경상북도 청송군",
    products: ["사과", "자두"],
    size: "약 5,300평",
    experience: true,
    rental: true,
    programs: ["사과 수확", "나무 분양", "주말 농장"],
    summary: "과수 체험과 나무 분양형 임대를 함께 운영합니다.",
    position: { x: 63, y: 50 },
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80",
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
  contactButton: document.querySelector("#contactButton"),
};

if (elements.year) {
  elements.year.textContent = `© ${new Date().getFullYear()} FarmLink`;
}

function uniqueValues(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "ko"));
}

function setupFilters() {
  const regions = uniqueValues(farms.map((farm) => farm.region));
  const products = uniqueValues(farms.flatMap((farm) => farm.products));

  regions.forEach((region) => {
    elements.regionFilter.insertAdjacentHTML(
      "beforeend",
      `<option value="${region}">${region}</option>`,
    );
  });

  products.forEach((product) => {
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
      farm.size,
      farm.summary,
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

function selectFarm(id) {
  state.selectedId = id;
  render();
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
  elements.resultCount.textContent = `${filteredFarms.length}개 농장`;
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
      </div>
    `;
    card.addEventListener("click", () => selectFarm(farm.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") selectFarm(farm.id);
    });
    elements.farmGrid.appendChild(card);
  });
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
    <dt>품목</dt>
    <dd>${selected.products.join(", ")}</dd>
    <dt>규모</dt>
    <dd>${selected.size}</dd>
    <dt>체험</dt>
    <dd>${selected.experience ? "가능" : "미운영"}</dd>
    <dt>임대</dt>
    <dd>${selected.rental ? "가능" : "미운영"}</dd>
  `;
  elements.programList.innerHTML = selected.programs
    .map((program) => `<span class="program">${program}</span>`)
    .join("");
  elements.contactButton.href = `mailto:hello@example.com?subject=${encodeURIComponent(
    `${selected.name} 문의`,
  )}`;
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

setupFilters();
render();
