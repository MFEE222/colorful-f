# Colorful

**Colorful** 是一個使用 React 框架的單頁應用（SPA），用來建置濾鏡電商網站。

> 網站目前部署於： https://color4.me

> 後端專案請參訪： https://github.com/MFEE222/colorful-b

## 安裝

### 下載專案
```sh
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

### 沙盒模式

用於開發過程中需要以當前環境進行實驗時。

- 運行 `npm run sandbox` 命令。
  
    > Webpack 會將打包入口由 `src/index.js` 改為 `src/sandbox.js`，並且套用 development 下的設定

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

## 路由

路由使用 `react-router-dom` v6.4，搭配 `named-urls` 套件管理路由名稱。 

> 前端路由統一由 `src/utils/routes.js` 管理
### 主要頁面

主要頁面（元件）處於路由第一層。該層元件除 Layout 元件外，皆使用 lazy-load，在使用者需要時才載入，加快網頁響應。

| Component | Description | Nested Routes | Lazy-Load |
|-----------|-------------|:-------------:|:---------:|
| Layout    | 共用版面     | ❌ | ❌ |
| Landing   | 前導頁       | ❌ | ✅ |
| Error     | 404頁       | ❌ | ✅ |
| Home      | 主頁        | ❌ | ✅ |
| Game      | 遊戲頁       | ❌ | ✅ |
| Teach     | 教學頁       | ❌ | ✅ |
| Team      | 關於我們     | ❌ | ✅ |
| Auth      | 身份驗證     | ✅ | ✅ |
| Product   | 商品頁       | ✅ | ✅ |
| Member    | 會員頁       | ✅ | ✅ |
| Cart      | 購物車       | ✅ | ✅ |

> Nested Routes: 巢狀路由

### 其他分頁

分頁 與 主要頁面 的路由關係如下：

| Parent  | Component | Description |
|---------|-----------|-------------|
| Auth    | Signin    | 登入頁面     | 
|         | Signup    | 註冊頁面     |
|         | Forgot    | 忘記密碼     |
|         | Reset     | 重設密碼     |
| Product | ProductList | 商品系列頁 |
|         | ProductDetail | 商品細節頁 |
| Member  | Profile   | 個人資料     |
|         | Download  | 濾鏡包下載   |
|         | Favorite  | 商品蒐藏頁   |
|         | Review    | 評論管理     |
|         | Mail      | 信件管理     |
|         | Payment   | 付款方式     |
| Cart    | index     | 購物車主頁   |
|         | Checkout  | 結帳頁面     |

## 貢獻
iSpan 資展國際 MFEE22 小組成員

| Title | Name | Job                                   |
|-------|------|---------------------------------------|
| 組長  | 陶靖宇 | 導覽列、商品、評論頁（前、後、資料庫）製作   |
| 技術  | 陳博榆 | 專案管理、網站部署、網站驗證優化           |
| 美術  | 粱詩葶 | 教學、小遊戲頁。網頁設計、素材、企劃文案製作 |
| 美術  | 蔣頌蓮 | 首頁、關於我、驗證（前、後、資料庫）、企劃文案製作 |
| 技術  | 江志偉 | 資料庫管理、更新，企劃文案、簡報製作       |

## FAQ
- 前端路由要去哪裡修改、新增？

    `src/utils/routes.js` 負責管理前端路由。 

- 後端目前有哪些 API、規格是什麼？

    `src/utils/api.js` 負責管理後端路由、靜態資源。



