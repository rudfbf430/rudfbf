# Homepage

GitHub와 Vercel로 배포할 수 있는 정적 홈페이지입니다.

## 로컬에서 확인

브라우저에서 `index.html`을 열면 바로 확인할 수 있습니다.

## GitHub에 올리기

```powershell
git add .
git commit -m "Initial homepage"
git branch -M main
git remote add origin https://github.com/USER/REPO.git
git push -u origin main
```

## Vercel 배포

1. Vercel에서 `Add New Project`를 선택합니다.
2. GitHub 저장소를 Import합니다.
3. Framework Preset은 `Other`로 두고 Deploy합니다.
