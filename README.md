# 근처밭

내가 사는 지역 근처에서 지금 구할 수 있는 신선한 제철 원예작물과 로컬 구매처를 추천하는 정적 웹 서비스입니다.

## 해결하려는 농업 문제

소비자는 집 근처에서 지금 어떤 농산물을 신선하게 구할 수 있는지, 어느 농장이나 로컬푸드 매장을 통해 구매할 수 있는지 알기 어렵습니다. 이 서비스는 지역별 제철 원예작물과 가까운 산지 정보를 함께 보여주어 로컬푸드 접근성을 높이고, 지역 농산물의 판로 발견성을 높이는 데 도움을 줍니다.

## 주요 기능

- 전국 주요 권역의 제철 원예작물 48종과 OpenStreetMap 기반 실제 농장·농산물 판매 지점 2,889곳 추천
- 오늘 날짜와 선택 지역 기준 제철 원예작물 추천
- 등록 작물, 로컬 농장 수, 이번 달 추천 작물 요약
- 월별 제철 작물 필터
- 월별 제철 캘린더
- 지역, 분류, 검색어 기반 로컬 신선작물 탐색
- 현재 위치 기반 가까운 농장 TOP 3 추천
- 농장 목록 클릭 시 별도 상세 페이지로 이동
- 작물별 가까운 산지, 추천 농장, 구매 방식 제공
- 상세 페이지에서 네이버지도 길찾기 제공
- 소규모 농가, 작목반, 체험형 작은 농장 별도 노출
- 작은 농장 카드에서 상세 페이지 바로 이동
- 농가 등록 문의 CTA
- 작물별 활용법, 고르는 법, 보관법 제공
- 관심 작물 저장
- 네이버 로그인 인증 요청 및 콜백 처리 구조
- 지역별 가까운 추천
- 반응형 UI

## 데이터 구조

농장 데이터는 OpenStreetMap Overpass API에서 `shop=farm`, `landuse=farmyard`, `produce` 태그가 있는 실제 지도 객체를 수집해 구성했습니다. 수집 데이터는 ODbL 라이선스를 따르며, 각 농장 객체에는 OSM 원본 링크를 함께 보관합니다.

```js
{
  id: "tomato",
  name: "토마토",
  category: "과채류",
  regions: ["부산", "강원", "충남"],
  localSources: [
    {
      region: "충남",
      farmName: "논산 햇살토마토농장",
      city: "논산",
      salesType: "직거래 / 로컬푸드 매장"
    }
  ],
  seasonMonths: [5, 6, 7, 8, 9],
  image: "작물 이미지 URL",
  description: "작물 설명",
  pickTip: "고르는 법",
  storageTip: "보관법",
  uses: ["샐러드", "소스"]
}
```

## 실행 방법

별도 빌드 과정 없이 `index.html`을 브라우저에서 열면 실행됩니다.

## 파일 구성

- `index.html`: 화면 구조와 제출용 서비스 설명
- `detail.html`: 농장별 상세 페이지
- `naver-callback.html`: 네이버 로그인 인증 응답 처리 페이지
- `styles.css`: 반응형 UI 스타일
- `script.js`: 작물 데이터, 필터링, 오늘 추천 계산 로직
- `real-farms.js`: OpenStreetMap에서 수집한 실제 농장·농산물 판매 지점 데이터
- `detail.js`: 상세 페이지 렌더링 로직
- `collect-osm-farms.mjs`: OpenStreetMap Overpass API 데이터 수집 스크립트
- `collect-naver-farms.mjs`: 네이버 지역 검색 API 결과를 기존 농장 데이터에 병합하는 수집 스크립트
- `clean-farms.mjs`: 농업과 무관한 장소를 제외하고 이름 없는 농장구역에 임시 이름을 붙이는 정리 스크립트

네이버 지역 검색 데이터를 수집하려면 네이버 개발자센터에서 검색 API 권한을 켠 뒤 아래 환경변수를 설정하고 실행합니다.

```powershell
$env:NAVER_CLIENT_ID="발급받은_ID"; $env:NAVER_CLIENT_SECRET="발급받은_SECRET"; node collect-naver-farms.mjs
```
- `naver-auth.js`: 네이버 로그인 버튼, 인증 요청 URL, 로그인 상태 관리 로직
