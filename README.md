## 前言

本專案為 2022-03-11 MFEE 22 畢業製作，內容為販賣照片濾鏡的電商網站。

網站採前後端分離

- 前端：React [MFEE222/colorful-f](https://github.com/MFEE222/colorful-f)
- 後端：Express [MFEE222/colorful-b](https://github.com/MFEE222/colorful-b)

組員

- 陶靖宇
- 陳博榆
- 梁詩葶
- 蔣頌蓮
- 江致偉

## 專案發佈

使用 AWS 服務架設，前端（React）、後端（Express）、資料庫（MariaDB）。

> 專案網站入口：`https://color4.me`

- DNS：使用 AWS Route53
- CDN：使用 AWS CloundFront 做 CDN 和 SSL 憑證 
- 前端：使用 AWS S3 架設靜態網站
- ELB：使用 AWS EC2 提供 Load Balance 做負載平衡 和 SSL 憑證
- 後端：使用 AWS EC2 架設後端 Node.js 伺服器
- 資料庫：使用 AWS RDS 架設 MariaDB 資料庫伺服器

## 專案架構
```
|- /build    # react 生成靜態檔案
|- /coverage # jest 生成檔案
|- /public   # 網站靜態檔案
|- /src
|   |- /components   # UI 元件
|   |- /context      # Context 元件
|   |- /hooks        # 共用 Custom Hook
|   |- /images       # 圖片、影片
|   |- /pages        # 頁面 元件
|   |- /styles       # sass 檔
|   |- /utils        # 共用 UI 元件、工具
|   |- App.js        # 根元件
|   |- index.js      # 渲染根元件
|- .env.dev          # 開發模式環境變數
|- .env.prod         # 發佈模式環境變數
|- .env.example      # 環境變數範例
|- .gitignore        # 版控忽略對象
|- .prettierrc       # 代碼格式風格設定
|- babel.config.json    # babel 編譯環境設定
|- jest.config.js       # jest 環境設定
|- webpack.common.js    # webpack 基本共用設定
|- webpack.dev.js       # webpack 開發模式設定檔
|- webpack.prod.js      # webpack 發佈模式設定檔
|- package-lock.json    # npm 套件依賴項
|- package.json         # npm 套件設定
|- READEME.md           # 專案說明
```

注意事項：

- `/src/images` 和 `.env.dev`, `.env.prod` 並不進入版控，檔案內容請向開發者索取
- 專案於 `2022-06-13` 後捨棄 CRA (create-react-app)，改用 webpack、babel... 設定檔編寫開發環境配置，若有相容性問題請聯絡開發者

## 版本控制

本專案採 GitHub Flow 版本控制流程，進行開發時請確保『再分支中進行更動』和『使用 GitHub PullRequest』提交合併

情境範例：

1. 想開發新功能
    - 確保 `main` 分支進度
    - 新建分支 `feat/something` 並切換
    - 開始開發

2. 開發完畢，想合併進入 `main` 分支
    - 將功能分支 `feat/something` 推上遠端庫
    - 新建一個 PullRequest 並指定 CodeReview 組員
    - 直至修改完成，CodeReview 通過，則 `feat/something` 會在遠端褲和 `main` 進行合併

## 功能概覽

### 環境 env

環境變數，由 `.env.dev`/`.env.prod`(開發模式/發佈模式) 存儲，`/src/utils/config.js` 管理，使用前匯入該檔即可。

### 路由 Router

共 2 層路由，第一層在 `src/App.js` 通向各主頁，第二層在 `src/pages/something/index.js` 為各主頁自行管理路由。

另外，路由的名稱由 `/src/utils/routes.js` 管理；新名稱請至該檔案註冊，使用則先匯入該檔即可。

舉例：

1. `http://localhost:3000/auth` 為第一層路由，通向驗證頁面，由 `src/pages/auth/index.js` 元件負責管理
2. `https://localhost:3000/auth/signin` 為第二層路由，通向登入頁面，由 `src/pages/auth/SignIn.js` 元件負責管理
3. `https://localhost:3000/auth/signup` 為第二層路由，通向註冊頁面，由 `src/pages/auth/SignUp.js` 元件負責管理，以此類推


### 狀態 State

除個頁面本身 UI 狀態外，大部分需要共享的狀態皆由 `useContext` 勾子進行狀態共享，各主頁 Context 元件放置於 `src/context`。

現階段各頁面 Context 元件除需共享狀態外，狀態邏輯也一併包成 Custom Hook 放置在同一檔案中 export 給其他元件用。

情境：

1. 獲取登入狀態
```
import { useAuthContext } from '/your-relative-path/context/AuthContext';

function Foo () {
    const auth = useAuthContext(); // 取得共享狀態
}
```

2. 獲取共享狀態相關邏輯 Custom Hook
```
import { useState } from 'react';
import { useSignIn } from '/your-relative-path/context/AuthContext';

function Foo () {
    const [query, setQuery] = useState({email: '', password: '', submit: false});
    const result = useSignIn(query, setQuery); // 使用登入邏輯
}
```

### 各主頁概述 Pages

- Auth 驗證

    身份驗證採用 JWT 模式開發，refresh token 和 access token 存儲方式分別採用 http-only 的 Cookie 和 記憶體方式，來增強安全性。

    功能概覽：

    - 註冊：
        前端 將使用者填寫資料使用 `axios` 向 後端 發起請求。
        後端 驗證通過後，使用 `AWS SES` 服務發送『email 確認信』給使用者。
        使用者點選『確認信中連結』來開通帳號（有效時限 30 分鐘）。
    - 登入：
        前端 將使用者輸入帳密使用 `axios` 向 後端 發起請求。
        後端 驗證通過後 返回 `refresh token` 和 `access token`。
        `refresh token` 存儲在 `http-only` 的 `cookie`；`access token` 存在記憶體。
    - 登出：
        前端 使用 `axios` 向後端發起請求（`refresh token` 於 `cookie` 中帶給後端）。
        後端 驗證 使用者身份 以及 `refresh token`。
        後端 驗證通過後 消滅存於前端 `cookie` 中的 `refresh token`。
    - 忘記密碼
        前端 將使用者填寫帳號、密碼提示 使用 `axios` 向 後端 發起請求。 
        後端 驗證通過後，使用 `AWS SES` 服務發送『密碼重設信』給使用者。
        使用者點選『密碼重設信 中 獨有連結』來進行密碼修改（有效時限 30 分鐘）。
    - Google 第三方登入
        前端 嵌入 Google 登入按鈕（選用彈跳視窗模式），提供給使用者以 Google 帳密登入。
        登入成功後，前端 接收 Google 回傳之 `JWT Token`，並使用 `axios` 向 後端發送請求。
        後端 取的 `JWT Token` 後，向 Google 驗證伺服器進行驗證。
        後端 驗證成功後，生成 `refresh token` 和 `access token` 返回 前端。
        `refresh token` 存儲在 `http-only` 的 `cookie`；`access token` 存在記憶體。
    - 修改個人資料：
        前端 使用 `axios` 向 後端 發送請求（`JWT` 模式；`access token` 於 Header 中的 Authorization）。
        後端 驗證身份通過後，向資料庫進行修改，返回 前端。
    - 修改 Email：
        前端 使用 `axios` 向 後端 發送請求（`JWT` 模式；`access token` 於 Header 中的 Authorization）。
        後端 驗證身份通過後，向資料庫進行修改，返回 前端。
    - 修改個人頭貼：
        前端 使用 HTML API 將使用者上傳圖片，以 `axios` 向 後端 發送請求（`JWT` 模式；標頭帶 `access token`）
        後端 驗證身份通過後，向資料庫進行修改，返回 前端。
    - 驗證 access token：
        前端 使用 `axios` 向 後端 發送請求（`JWT` 模式；`access token` 於 Header 中的 Authorization）。
        後端 驗證分份通過後，返回 前端。
    - 刷新 access token：
        前端 使用 `axios` 向 後端 發送請求（`refresh token` 於 `cookie` 中帶給後端）。
        後端 驗證 `refresh token` 通過後，返回新的 `access token` 給前端。

- Navbar 導覽列

    - 

- Landing 前導頁

    - css 的 animation 完成時鐘旋轉相關特效。

- Home 主頁

    - 品牌影片自動播放：使用 react 的 Ref Hook 修改 `<video>` 標籤屬性。
    - 輪播效果：react 生命週期搭配 `setTimeout` 和 css 的 `transform` 完成各商品主題介紹輪播效果。
    - 圖片文字排版：依照 Bootstrap 格線系統進行，手機、平板、電腦 RWD 排版。

- Member 會員

- Product 商品

- Teach 教學

- Team 團隊介紹

- Game 心理測驗

- Error 錯誤

- Cart 購物車 

    待開發

- Checkout 結帳

    待開發

- Toast 通知彈跳
    
    使用 'react-toastify' 套件完成


### 待優化

- 代碼分割：目前檔案打包後的大小超過建議值 244KiB；`webpack-bundle-analzyer` 對最後打包檔案分析出的結果，部分套件過大。
- 減少媒體檔案大小：首頁、商品頁的影片、照片，需要再減少檔案大小。避免網頁載入過慢。

### 待修正

- 商品列表頁：將頁面邏輯包成 Custom Hook
- 商品細節頁：將頁面邏輯包成 Custom Hook
- 購物車頁：待開發
- 蒐藏頁：待開發


