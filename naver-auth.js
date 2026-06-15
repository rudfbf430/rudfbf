const NAVER_CLIENT_ID = "WTHeSYLqswJpPZIoopbh";
const NAVER_AUTH_STATE_KEY = "geuncheobat-naver-oauth-state";
const NAVER_AUTH_SESSION_KEY = "geuncheobat-naver-session";

function getNaverCallbackUrl() {
  return new URL("./naver-callback.html", window.location.href).href;
}

function createNaverState() {
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function getNaverSession() {
  try {
    return JSON.parse(localStorage.getItem(NAVER_AUTH_SESSION_KEY));
  } catch {
    return null;
  }
}

function setAuthPanel({ title, message, callbackUrl, showLogout = false }) {
  const panel = document.querySelector("#naverAuthPanel");
  const titleElement = document.querySelector("#naverAuthTitle");
  const messageElement = document.querySelector("#naverAuthMessage");
  const callbackElement = document.querySelector("#naverCallbackUrl");
  const logoutButton = document.querySelector("#naverLogoutButton");

  if (!panel || !titleElement || !messageElement || !callbackElement || !logoutButton) return;

  titleElement.textContent = title;
  messageElement.textContent = message;
  callbackElement.textContent = callbackUrl || "";
  callbackElement.hidden = !callbackUrl;
  logoutButton.hidden = !showLogout;
  panel.hidden = false;
}

function renderNaverAuth() {
  const button = document.querySelector("#naverLoginButton");
  if (!button) return;

  const session = getNaverSession();
  button.textContent = session ? "네이버 연결됨" : "네이버 로그인";
  button.classList.toggle("connected", Boolean(session));
}

function startNaverLogin() {
  const session = getNaverSession();
  const callbackUrl = getNaverCallbackUrl();

  if (session) {
    setAuthPanel({
      title: "네이버 계정 연결됨",
      message:
        "네이버 인증 응답을 확인했습니다. 프로필까지 저장하려면 Vercel 서버리스 함수에서 토큰 교환을 이어 붙이면 됩니다.",
      callbackUrl,
      showLogout: true,
    });
    return;
  }

  if (!NAVER_CLIENT_ID) {
    setAuthPanel({
      title: "Client ID가 필요합니다",
      message:
        "네이버 개발자센터에서 애플리케이션을 만든 뒤 naver-auth.js의 NAVER_CLIENT_ID에 값을 넣고, 아래 Callback URL을 등록하세요.",
      callbackUrl,
    });
    return;
  }

  const state = createNaverState();
  localStorage.setItem(NAVER_AUTH_STATE_KEY, state);

  const authUrl = new URL("https://nid.naver.com/oauth2.0/authorize");
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("client_id", NAVER_CLIENT_ID);
  authUrl.searchParams.set("redirect_uri", callbackUrl);
  authUrl.searchParams.set("state", state);
  window.location.href = authUrl.toString();
}

function logoutNaver() {
  localStorage.removeItem(NAVER_AUTH_SESSION_KEY);
  renderNaverAuth();
  setAuthPanel({
    title: "로그아웃 완료",
    message: "이 브라우저에 저장된 네이버 연결 상태를 지웠습니다.",
    callbackUrl: getNaverCallbackUrl(),
  });
}

document.querySelector("#naverLoginButton")?.addEventListener("click", startNaverLogin);
document.querySelector("#naverLogoutButton")?.addEventListener("click", logoutNaver);
renderNaverAuth();
