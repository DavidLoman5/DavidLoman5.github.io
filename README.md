# 個人網站

用 Next.js（App Router + TypeScript + Tailwind CSS）建置的個人主頁，靜態匯出後部署到 GitHub Pages。

## 本機開發

```bash
npm install
npm run dev
```

打開 [http://localhost:3000](http://localhost:3000) 就能看到網站。

## 編輯內容

網站所有文字（姓名、簡介、技能、作品、聯絡方式）都集中在 [`data/content.ts`](data/content.ts) 這一個檔案裡，改這裡就好，不需要動元件程式碼。目前放的是 placeholder，記得換成自己的真實資料。

版面元件在 `components/` 底下（`Hero`、`About`、`Projects`、`Contact`、`Navbar`、`Footer`），頁面組裝在 [`app/page.tsx`](app/page.tsx)。

## 部署到 GitHub Pages

專案已經設定好 `output: 'export'` 靜態匯出（[`next.config.ts`](next.config.ts)）和自動部署流程（[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)）。第一次部署前，到這個 repo 的設定裡做一次性設定：

1. 把這個資料夾 push 到 GitHub 上名為 `DavidLoman5.github.io` 的 repo（`main` 分支）。
2. 到 repo 的 **Settings → Pages**，「Source」選擇 **GitHub Actions**。
3. 之後每次 push 到 `main`，GitHub Actions 就會自動執行 `npm run build` 並部署到 `https://DavidLoman5.github.io`。

也可以在本機手動確認匯出結果：

```bash
npm run build
```

匯出的靜態檔案會在 `out/` 資料夾。
