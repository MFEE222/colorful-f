# Colorful

**Colorful** 是一個前端 React 專案，用於建置濾鏡電商網站前台。

> 網站目前部署於： https://color4.me

> 後端專案請參訪： https://github.com/MFEE222/colorful-b

## 安裝

### 下載專案
```
git clone https://github.com/MFEE222/colorful-f.git
```
### 創建環境變數檔案

按照 `.env.example` 檔案內容，建立 `.env.dev` 和 `.env.prod` 兩種檔案

### 下載媒體檔案

由於媒體檔案容量較大，不放入版控當中，請自行至小組 Google 雲端印碟下載後放入 `src/images/` 資料夾中。

### 安裝模組

開啟終端機，於專案目錄下運行 `npm i`，將依賴模組安裝完畢。

### 運行開發環境

開啟終端機，於專案目錄下運行 `npm start`。等待編譯完成後，伺服器預設啟動於 `http://localhost:3000`。

> 如有更改需求，開啟 `webpack.dev.js` 編輯 `devServer` 屬性即可

### 生成正式環境

開啟終端機，於專案目錄下運行 `npm run build`。等待編譯完成後，會自動運行 webpack 分析工具，可以直接關掉。

正式環境會生成在專案目錄下的 `build` 資料夾。

### 測試正式環境

首先安裝 `http-server` 模組

```
npm i -g http-server
```

運行 `npm run prod`，伺服器預設啟動於 `http://localhost:3000`。

> 如有更改需求，開啟 `package.json` 編輯 `scripts` 內 `prod` 屬性即可

### 單元測試

運行 `npm test` 即可。

> 目前尚未編寫相關測試檔

## 專案介紹

採用前後端分離

- 前端使用 React
- 後端使用 Express
- 資料庫使用 MariaDB

### 網站部署

採用 AWS 服務部署網站

| Item      | Service       |
|-----------|---------------|
| DNS       | AWS Route53   |
| CDN       | AWS CloudFront|
| Frontend  | AWS S3        |
| ELB       | AWS EC2       |
| Backend   | AWS EC2       |
| DB        | AWS RDS       |
<!-- - DNS: AWS Route53
- CDN: AWS CloudFront
- Frontend: AWS S3
- (ELB): AWS EC2
- Backend: AWS EC2
- DB: AWS RDS -->

### src 資料夾用途

| Folder      | Description      |
|-------------|------------------|
| components/ | UI 元件          |
| contexts/   | useContext 元件  |
| hooks/      | Custom Hooks     |
| images/     | 圖片、媒體檔案     |
| pages/      | 主要網站頁面       |
| styles/     | .css, .sass 檔   |
| utils/      | .js 檔案         |

### import 路徑問題

引入模組時，可使用下方 alias 來取代相對路徑，避免引用路徑繁複。

| Alias       | Path            |
|-------------|-----------------|
| components  | src/components  |
| contexts    | src/contexts    |
| hooks       | src/hooks       |
| images      | src/images      |
| pages       | src/pages       |
| styles      | src/styles      |
| utils       | src/utils       |

舉例來說，原本相對路徑的引用路徑：

```js
// src/pages/Home.js
import Navbar from '../components/Navbar'; 
```

使用 alias 取代後的引用路徑：

```js
// src/pages/Home.js
import Navbar from 'components/Navbar';
```

## 貢獻
iSpan 資展國際 MFEE22 小組成員

| Title | Name | Job                                   |
|-------|------|---------------------------------------|
| 組長  | 陶靖宇 | 導覽列、商品、評論頁（前、後、資料庫）製作   |
| 技術  | 陳博榆 | 專案管理、網站部署、網站驗證優化           |
| 美術  | 粱詩葶 | 教學、小遊戲頁。網頁設計、素材、企劃文案製作 |
| 美術  | 蔣頌蓮 | 首頁、關於我、驗證（前、後、資料庫）、企劃文案製作 |
| 技術  | 江志偉 | 資料庫管理、更新，企劃文案、簡報製作       |

## 待優化

### 優化 Webpack

- webpack 最佳化設定編寫

### 引入 TypeScript

- 編譯器、定義檔下載
- webpack、ts 設定檔編寫
### 引入 PostCSS

- 下載、設定檔編寫
- 插件下載、設定檔編寫
- 更換 CSS 框架為 TailwindCSS

### Jest

- 下載、設定檔編寫
- 撰寫元件單元測試

### CI/CD

- GitHub Action 設定檔編寫

## FAQ
- 前端路由要去哪裡修改、新增？

    `src/utils/routes.js` 負責管理前端路由。 

- 後端目前有哪些 API、規格是什麼？

    `src/utils/api.js` 負責管理後端路由、靜態資源。



