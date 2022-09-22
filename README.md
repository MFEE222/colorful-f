# Colorful

**Colorful** 是一個使用 React 框架的單頁應用（SPA），用來建置濾鏡電商網站。

> 網站目前部署於： https://color4.me

> 後端專案請參訪： https://github.com/MFEE222/colorful-b

## 安裝

### 下載專案
```
git clone https://github.com/MFEE222/colorful-f.git
```
### 創建環境變數檔案

- 建立 `.env.dev` 和 `.env.prod` 2 種環境檔用於開發、正式環境。
- 參照 `.env.example` 內容進行編寫

### 安裝模組

- 運行 `npm i` 命令，安裝依賴模組。(終端機開啟後，記得切換至專案資料夾下)

### 運行開發環境

- 運行 `npm start` 命令，運行開發環境於本地伺服器（預設 Prot 3000）。

    > 如有更改需求，開啟 `webpack.dev.js` 編輯 `devServer` 屬性即可

### 生成正式環境

- 運行 `npm run build` 命令，生成正式環境（預設於專案目錄下 `/build` 資料夾）。

    > 命令運行後，會自動開啟 `webpack-bundle-analyzer` 分析工具，不需要可以直接關掉
### 測試正式環境

- 安裝伺服器模組（如：`npm i -g http-server`）

- 運行 `npm run prod` 命令，運行正式環境於本地伺服器（預設 Port 3000）。

    > 如有更改需求，開啟 `package.json` 編輯 `scripts` 內 `prod` 屬性即可

### 單元測試

- 運行 `npm test` 命令。

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



