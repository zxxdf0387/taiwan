# 晨盤雷達

這是一個以手機端為優先的台股盤前分析程式雛形，採用純 `HTML + CSS + JavaScript` 製作，不需要先安裝任何套件。

## 目前功能

- 盤前市場情緒總覽
- 台股觀察清單卡片
- 盤前重點與風險提醒
- 搜尋個股代號或名稱
- 可加入主畫面的 PWA 基本設定

## 如何開啟

直接用瀏覽器打開 `index.html` 即可。

如果要使用安裝到主畫面與離線快取，建議用本機靜態伺服器或部署到 HTTPS 網站，因為 `service worker` 在 `file://` 模式下通常不會啟用。

## 手機直接測試

這個專案已經附上本機靜態伺服器：

- 啟動方式：在專案資料夾執行 `powershell -ExecutionPolicy Bypass -File .\start-mobile-server.ps1`
- 停止方式：在專案資料夾執行 `powershell -ExecutionPolicy Bypass -File .\stop-mobile-server.ps1`
- 本機網址：`http://127.0.0.1:4173`
- 同一個 Wi-Fi 的手機可用：`http://192.168.1.107:4173`

手機測試步驟：

- 讓手機和這台電腦連到同一個 Wi-Fi
- 在手機瀏覽器輸入 `http://192.168.1.107:4173`
- 打開後可用瀏覽器的「加入主畫面」功能，當成網頁 App 使用

如果換了網路，`192.168.1.107` 這個 IP 可能會改變，到時重新看一次 `ipconfig` 即可。

如果你要更像正式 App 的體驗，可以把這個專案放到任何靜態網站空間，或之後我再幫你包成：

- Android APK
- iPhone 適用的 Web App
- React / Vue 行動端專案

## 正式網址部署

這個專案已經補好 GitHub Pages 的自動部署設定：

- 工作流程檔：[.github/workflows/deploy-pages.yml](C:/Users/Bigmo_Home/Documents/New%20project%202/.github/workflows/deploy-pages.yml)
- 暫存排除檔：[.gitignore](C:/Users/Bigmo_Home/Documents/New%20project%202/.gitignore)

只要把這個專案推到 GitHub 的 `main` 分支，再到 GitHub 專案設定把 `Pages` 的來源設成 `GitHub Actions`，之後每次更新都會自動發佈成外網網址。

如果要手動把最新內容發到網站，現在也可以直接執行：

- `powershell -ExecutionPolicy Bypass -File .\publish-site.ps1 -CommitMessage "Update site"`

這個腳本會自動做 `git add`、`git commit`、`git push`，而且推送失敗時會先 `fetch` / `pull --rebase` 再重試，讓網站版更不容易停在舊資料。

## 自動更新

這個專案現在也可以走 Windows 工作排程，不再只依賴 Codex 內建排程。

- 安裝排程：`powershell -ExecutionPolicy Bypass -File .\install-scheduled-update.ps1`
- 手動跑一次完整更新：`powershell -ExecutionPolicy Bypass -File .\run-scheduled-update.ps1`
- 檢查排程狀態：`powershell -ExecutionPolicy Bypass -File .\check-scheduled-update.ps1`

排程會每天 `09:00` 和 `22:00`：

- 抓萬寶週刊黃清照老師頁面最新 3 支影音
- 重寫 [app.js](C:/Users/Bigmo_Home/Documents/New%20project%202/app.js) 裡的資料區塊
- 自動 `git commit` / `git push`
- 讓 GitHub Pages 網站跟著更新

執行記錄會寫到 [logs/scheduled-update.log](C:/Users/Bigmo_Home/Documents/New%20project%202/logs/scheduled-update.log)。

## 下一步可擴充

- 串接即時台股 API
- 加入新聞情緒分析
- 建立個人自選股儲存
- 盤前推播提醒
- 技術指標與法人籌碼整合
