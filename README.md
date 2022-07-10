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
|- .env              # 環境變數
|- .env.example      # 環境變數範例
|- .gitignore        # 版控忽略對象
|- .prettierrc       # 代碼格式風格設定
|- babel.config.json    # babel 編譯環境設定
|- jest.config.js       # jest 環境設定
|- webpack.config.js    # webpack 設定
|- package-lock.json    # npm 套件依賴項
|- package.json         # npm 套件設定
|- READEME.md           # 專案說明
```

注意事項：

- `/src/images` 和 `.env` 並不進入版控，檔案內容請向開發者索取
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

### 路由 Router

共 2 層路由，第一層在 `src/App.js` 通向各主頁，第二層在 `src/pages/something/index.js` 為各主頁自行管理路由

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

- Landing 前導頁

- Home 主頁

- Member 會員

- Product 商品

- Teach 教學

- Team 團隊介紹

- Game 心理測驗

- Error 錯誤

- Cart 購物車 

- Checkout 結帳





