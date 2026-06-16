const data = window.localSeasonData;
const params = new URLSearchParams(window.location.search);
const cropId = params.get("id");
const selectedRegion = params.get("region") || "all";
const selectedSourceId = params.get("source") || "";
const selectedMonth = Number(params.get("month")) || new Date().getMonth() + 1;

const page = {
  image: document.querySelector("#pageImage"),
  season: document.querySelector("#pageSeason"),
  title: document.querySelector("#pageTitle"),
  mapLink: document.querySelector("#pageMapLink"),
  description: document.querySelector("#pageDescription"),
  badges: document.querySelector("#pageBadges"),
  actions: document.querySelector("#pageActions"),
  favorite: document.querySelector("#pageFavorite"),
  meta: document.querySelector("#pageMeta"),
  pick: document.querySelector("#pagePick"),
  storage: document.querySelector("#pageStorage"),
  related: document.querySelector("#relatedList"),
  commentForm: document.querySelector("#commentForm"),
  commentName: document.querySelector("#commentName"),
  commentText: document.querySelector("#commentText"),
  commentList: document.querySelector("#commentList"),
};

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(data.FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function setFavorites(ids) {
  localStorage.setItem(data.FAVORITES_KEY, JSON.stringify(ids));
}

function renderFavorite(crop) {
  const ids = getFavorites();
  const saved = ids.includes(crop.id);
  page.favorite.textContent = saved ? "관심 작물 해제" : "관심 작물 저장";
  page.favorite.classList.toggle("saved", saved);
}

function toggleFavorite(crop) {
  const ids = getFavorites();
  const next = ids.includes(crop.id)
    ? ids.filter((id) => id !== crop.id)
    : [...ids, crop.id];
  setFavorites(next);
  renderFavorite(crop);
}

function renderRelated(crop, source) {
  const related = data.crops
    .filter((item) => item.id !== crop.id)
    .map((item) => ({ crop: item, source: data.getLocalSource(item, source?.region || selectedRegion) }))
    .filter((item) => item.source && item.source.region === source?.region)
    .slice(0, 4);

  if (!related.length) {
    page.related.innerHTML = '<p class="empty">같은 지역의 다른 농장 후보가 없습니다.</p>';
    return;
  }

  page.related.innerHTML = related
    .map(
      ({ crop: item, source: itemSource }) => `
        <a class="small-farm-item" href="./detail.html?id=${item.id}&region=${itemSource.region}&source=${encodeURIComponent(itemSource.sourceId || "")}&month=${selectedMonth}">
          <strong>${itemSource.farmName}</strong>
          <span>${itemSource.city} · ${data.getFarmScale(itemSource)}</span>
          <span>${item.name} · 제철 ${data.seasonLabel(item.seasonMonths)}</span>
          <span>${itemSource.salesType}</span>
        </a>
      `,
    )
    .join("");
}

function getCommentKey(crop, source) {
  return `farmComments:${source?.sourceId || crop.id}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadComments(crop, source) {
  try {
    return JSON.parse(localStorage.getItem(getCommentKey(crop, source))) || [];
  } catch {
    return [];
  }
}

function saveComments(crop, source, comments) {
  localStorage.setItem(getCommentKey(crop, source), JSON.stringify(comments));
}

function renderComments(crop, source) {
  const comments = loadComments(crop, source);
  if (!comments.length) {
    page.commentList.innerHTML = '<p class="empty">아직 댓글이 없습니다. 첫 방문 메모를 남겨보세요.</p>';
    return;
  }

  page.commentList.innerHTML = comments
    .map(
      (comment) => `
        <article class="comment-item">
          <div>
            <strong>${escapeHtml(comment.name)}</strong>
            <time>${escapeHtml(comment.date)}</time>
          </div>
          <p>${escapeHtml(comment.text)}</p>
        </article>
      `,
    )
    .join("");
}

function setupComments(crop, source) {
  page.commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = page.commentName.value.trim();
    const text = page.commentText.value.trim();
    if (!name || !text) return;

    const comments = loadComments(crop, source);
    comments.unshift({
      name,
      text,
      date: new Date().toLocaleDateString("ko-KR"),
    });
    saveComments(crop, source, comments.slice(0, 20));
    page.commentForm.reset();
    renderComments(crop, source);
  });
  renderComments(crop, source);
}

function renderDetailPage() {
  const crop = data.crops.find((item) => item.id === cropId) || data.crops[0];
  const source = data.getLocalSource(crop, selectedRegion, selectedSourceId);
  const farmTitle = source ? source.farmName : crop.name;
  const grade = data.getFarmGrade(source);

  document.title = `${farmTitle} | 근처밭`;
  page.image.style.backgroundImage = `url("${crop.image}")`;
  page.season.textContent = `제철 ${data.seasonLabel(crop.seasonMonths)}`;
  page.title.textContent = farmTitle;
  page.mapLink.innerHTML = source
    ? `<a href="${data.getNaverDirectionsUrl(source)}" target="_blank" rel="noreferrer">${data.getFarmAddress(source)} · 길찾기</a>`
    : "";
  page.description.textContent = crop.description;
  page.badges.innerHTML = [
    `<span class="grade-badge">${grade.level} · ${grade.title}</span>`,
    `<span>${crop.name}</span>`,
    `<span>${source ? data.getFarmScale(source) : "소규모 농장"}</span>`,
    `<span>신선도 ${data.freshnessScore(crop, selectedMonth)}점</span>`,
  ].join("");
  page.actions.innerHTML = [
    source
      ? `<a class="primary-button" href="${data.getNaverDirectionsUrl(source)}" target="_blank" rel="noreferrer">길찾기</a>`
      : "",
    source?.lat && source?.lng
      ? `<a class="secondary-button" href="https://www.openstreetmap.org/?mlat=${source.lat}&mlon=${source.lng}#map=15/${source.lat}/${source.lng}" target="_blank" rel="noreferrer">좌표 지도</a>`
      : "",
    source?.osmUrl
      ? `<a class="secondary-button" href="${source.osmUrl}" target="_blank" rel="noreferrer">${source.osmUrl.includes("openstreetmap.org") ? "OSM 원본" : "농장 정보"}</a>`
      : "",
  ].join("");
  page.meta.innerHTML = `
    <dt>작물</dt>
    <dd>${crop.name}</dd>
    <dt>분류</dt>
    <dd>${crop.category}</dd>
    <dt>농장 위치</dt>
    <dd>${source ? data.getFarmAddress(source) : crop.regions.join(", ")}</dd>
    <dt>주소/좌표</dt>
    <dd>${source ? data.getFarmAddress(source) : "주소 정보 확인 필요"}</dd>
    <dt>농장 규모</dt>
    <dd>${source ? data.getFarmScale(source) : "확인 필요"}</dd>
    <dt>구매 방식</dt>
    <dd>${source ? source.salesType : "확인 필요"}</dd>
    <dt>농장 등급</dt>
    <dd>${grade.level} · ${grade.title}<small>${grade.description}</small></dd>
    <dt>예상 판매가</dt>
    <dd>${data.getPriceInfo(crop)} <small>직거래 참고가</small></dd>
    <dt>지도 데이터</dt>
    <dd>${source?.sourceId || "OSM 객체 ID 확인 필요"}</dd>
    <dt>방문 안내</dt>
    <dd>${data.getFarmVisitInfo(crop, source)}</dd>
    <dt>활용</dt>
    <dd>${crop.uses.join(", ")}</dd>
  `;
  page.pick.textContent = crop.pickTip;
  page.storage.textContent = crop.storageTip;
  page.favorite.addEventListener("click", () => toggleFavorite(crop));
  renderFavorite(crop);
  renderRelated(crop, source);
  setupComments(crop, source);
}

renderDetailPage();
