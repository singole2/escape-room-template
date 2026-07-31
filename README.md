神農嘗百草 — 國文閱讀理解密室逃脫 (靜態網站)

檔案結構（放在 repo 根目錄）：
- index.html
- styles.css
- scripts.js
- README.md
- .gitignore
- assets/
  - img/character.png         <- 請上傳去背頭像
  - audio/Awards.m4a         <- 勝利音效（範本）
  - audio/Music_Trap_Drama.mp3 <- 背景音樂（範本）

說明：
1. 開始遊戲後會依選擇的關卡數（5 或 10）隨機從題庫抽題（題庫含 Beginner 與 Expert 各 16 題）。
2. 每題為單選題，第一個選項為正確答案（scripts.js 中的規則）。顯示時選項會被打亂。
3. 正確答題會獲得漢字碎片（組成「神農嘗百草」），全部收集可顯示證書。
4. 若要換成你提供的課文原文，我可以根據完整課文自動重生題庫或微調題目與提示。
5. 若需要我把檔案提交到 GitHub 並啟用 Pages，請告訴我 repo 名稱或允許我建立新 repo（我會在做寫入前再次確認 owner/repo 與分支）。

部署（本地快速測試）：
- 在本目錄下啟用簡單靜態伺服器或直接開啟 index.html 即可（部分瀏覽器會阻擋 autoplay 音樂）。
- 若用 GitHub Pages，設定 Pages 來源為 gh-pages 分支即可。

如需：
- 我可以替你自動產生完整 32 題題庫（已包含），或根據你提供的全文再調整題目與提示。
- 我可以把檔案推到你的 GitHub 並啟用 Pages（我已將內容放在 gh-pages 分支），只要你在 repo 設定中確認 Pages 已啟用或允許我代為啟用。
