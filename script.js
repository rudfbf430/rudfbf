const farms = [
  {
    id: "yangpyeong-berry",
    name: "양평 햇살딸기농장",
    region: "경기",
    area: "경기도 양평군",
    address: "경기도 양평군 강상면 샘플로 12",
    products: ["딸기", "상추"],
    size: "약 2,000평",
    experience: true,
    rental: false,
    programs: ["딸기 따기", "가족 주말 체험", "수확물 포장"],
    summary: "수도권에서 접근하기 좋은 딸기 체험형 농장입니다.",
    phone: "010-1234-1001",
    reservationUrl: "https://forms.gle/example-berry",
    rentalUrl: "",
    directionUrl:
      "https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%96%91%ED%8F%89%EA%B5%B0",
    position: { x: 45, y: 31 },
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "jeju-citrus",
    name: "제주 바람감귤농원",
    region: "제주",
    area: "제주특별자치도 서귀포시",
    address: "제주특별자치도 서귀포시 샘플로 42",
    products: ["감귤", "한라봉"],
    size: "약 4,500평",
    experience: true,
    rental: true,
    programs: ["감귤 따기", "소형 구획 임대", "농산물 직배송"],
    summary: "체험과 소규모 임대 구획을 함께 운영하는 감귤 농원입니다.",
    phone: "010-1234-1002",
    reservationUrl: "https://forms.gle/example-citrus",
    rentalUrl: "mailto:hello@example.com?subject=제주 바람감귤농원 임대 문의",
    directionUrl:
      "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C",
    position: { x: 32, y: 84 },
    image:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gangwon-potato",
    name: "평창 고랭지감자밭",
    region: "강원",
    area: "강원특별자치도 평창군",
    address: "강원특별자치도 평창군 대관령면 샘플로 88",
    products: ["감자", "배추"],
    size: "약 8,000평",
    experience: false,
    rental: true,
    programs: ["계절형 밭 임대", "수확 대행", "농기구 지원"],
    summary: "고랭지 작물 재배와 계절형 밭 임대를 연결합니다.",
    phone: "010-1234-1003",
    reservationUrl: "",
    rentalUrl: "mailto:hello@example.com?subject=평창 고랭지감자밭 임대 문의",
    directionUrl:
      "https://map.naver.com/p/search/%EA%B0%95%EC%9B%90%20%ED%8F%89%EC%B0%BD%EA%B5%B0",
    position: { x: 58, y: 26 },
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "chungnam-tomato",
    name: "논산 스마트토마토팜",
    region: "충남",
    area: "충청남도 논산시",
    address: "충청남도 논산시 샘플로 19",
    products: ["토마토", "방울토마토"],
    size: "스마트온실 1,200평",
    experience: true,
    rental: false,
    programs: ["스마트팜 견학", "토마토 수확", "진로 체험"],
    summary: "스마트온실 운영 방식을 볼 수 있는 교육형 농장입니다.",
    phone: "010-1234-1004",
    reservationUrl: "https://forms.gle/example-tomato",
    rentalUrl: "",
    directionUrl:
      "https://map.naver.com/p/search/%EC%B6%A9%EB%82%A8%20%EB%85%BC%EC%82%B0%EC%8B%9C",
    position: { x: 42, y: 51 },
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "jeonnam-green-tea",
    name: "보성 푸른차밭",
    region: "전남",
    area: "전라남도 보성군",
    address: "전라남도 보성군 보성읍 샘플로 5",
    products: ["녹차", "허브"],
    size: "약 12,000평",
    experience: true,
    rental: false,
    programs: ["찻잎 따기", "차 만들기", "농장 투어"],
    summary: "차밭 체험과 가공 프로그램을 운영하는 남해안 농장입니다.",
    phone: "010-1234-1005",
    reservationUrl: "https://forms.gle/example-tea",
    rentalUrl: "",
    directionUrl:
      "https://map.naver.com/p/search/%EC%A0%84%EB%82%A8%20%EB%B3%B4%EC%84%B1%EA%B5%B0",
    position: { x: 47, y: 69 },
    image:
      "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gyeongbuk-apple",
    name: "청송 사과정원",
    region: "경북",
    area: "경상북도 청송군",
    address: "경상북도 청송군 샘플로 71",
    products: ["사과", "자두"],
    size: "약 5,300평",
    experience: true,
    rental: true,
    programs: ["사과 수확", "나무 분양", "주말 농장"],
    summary: "과수 체험과 나무 분양형 임대를 함께 운영합니다.",
    phone: "010-1234-1006",
    reservationUrl: "https://forms.gle/example-apple",
    rentalUrl: "mailto:hello@example.com?subject=청송 사과정원 임대 문의",
    directionUrl:
      "https://map.naver.com/p/search/%EA%B2%BD%EB%B6%81%20%EC%B2%AD%EC%86%A1%EA%B5%B0",
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
    <dd>${selected.rental ? "가능" : "미운영"}</dd>
    <dt>연락처</dt>
    <dd>${selected.phone}</dd>
  `;
  elements.programList.innerHTML = selected.programs
    .map((program) => `<span class="program">${program}</span>`)
    .join("");
  elements.detailActions.innerHTML = [
    actionLink({
      href: `tel:${selected.phone.replaceAll("-", "")}`,
      label: "전화하기",
      variant: "primary-action",
    }),
    actionLink({
      href: selected.reservationUrl,
      label: selected.experience ? "체험 예약" : "체험 미운영",
      disabled: !selected.experience,
    }),
    actionLink({
      href: selected.directionUrl,
      label: "길찾기",
    }),
    actionLink({
      href: selected.rentalUrl,
      label: selected.rental ? "임대 문의" : "임대 미운영",
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
