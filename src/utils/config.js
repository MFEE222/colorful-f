

export const API_URL =
    (process.env.REACT_APP_API_URL || 'http://localhost:3006') + '/api';

// 圖片
export const IMG_URL =
    (process.env.REACT_APP_API_URL || 'http://localhost:3006') + '/images';
//圖片 去掉images （因為資料庫有寫）
export const IMG_URL2 =
    process.env.REACT_APP_API_URL || 'http://localhost:3006';
export const IMG_URL_UPLOAD =
    process.env.REACT_APP_API_URL || 'http://localhost:3006';
// 系列圖
export const IMG_PRODUCTS_ALL = IMG_URL + '/all';
export const IMG_PRODUCTS_NEWEST = IMG_URL + '/newest';
export const IMG_PRODUCTS_FOOD = IMG_URL + '/food';
export const IMG_PRODUCTS_WEDDING = IMG_URL + '/wedding';
export const IMG_PRODUCTS_FILM = IMG_URL + '/film';
export const IMG_PRODUCTS_SCENERY = IMG_URL + '/scenery';
export const IMG_PRODUCTS_PORTRAIT = IMG_URL + '/portrait';
// Home
export const IMG_HOME_PORTRAIT_BANNER = IMG_URL + '/home/輪播01.jpg';
export const IMG_HOME_SCENERY_BANNER = IMG_URL + '/home/輪播02.jpg';
export const IMG_HOME_FILM_BANNER = IMG_URL + '/home/輪播03.jpg';
export const IMG_HOME_WEDDING_BANNER = IMG_URL + '/home/輪播04.jpg';
export const IMG_HOME_FOOD_BANNER = IMG_URL + '/home/輪播05.jpg';

// Banner
export const IMG_PRODUCTS_ALL_BANNER = IMG_PRODUCTS_ALL + '/all-banner.jpg';
export const IMG_PRODUCTS_NEWEST_BANNER =
    IMG_PRODUCTS_NEWEST + '/newest-banner.jpg';
export const IMG_PRODUCTS_FOOD_BANNER = IMG_PRODUCTS_FOOD + '/food-banner.mp4';
export const IMG_PRODUCTS_WEDDING_BANNER =
    IMG_PRODUCTS_WEDDING + '/wedding-banner.mp4';
export const IMG_PRODUCTS_FILM_BANNER = IMG_PRODUCTS_FILM + '/film-banner.mp4';
export const IMG_PRODUCTS_SCENERY_BANNER =
    IMG_PRODUCTS_SCENERY + '/scenery-banner.mp4';
export const IMG_PRODUCTS_PORTRAIT_BANNER =
    IMG_PRODUCTS_PORTRAIT + '/portrait-banner.mp4';

// Post Login 登入
// req
// {
//     email, :>> 電子郵件帳號
//     password, :>> 密碼
// }
// res
// {
//     statusCode, :>> 4002: 登入成功 | 4001: 帳號或密碼錯誤 | 4003: 達嘗試次數上限
//     user: {
//         name,
//         email,
//         phone,
//         gender,
//         birthday,
//     }    :>> undefined: 登入失敗 | 使用者資料：登入成功
// }
export const API_POST_AUTH_LOGIN = API_URL + '/auth/signin';

// Post Signin 註冊
// req
// {
//     name,   :>> 註冊姓名
//     email, :>> 註冊信箱帳號
//     password, :>> 註冊密碼
// }
// res
// {
//     statusCode, :>> 4004: 註冊成功，寄發電子郵件通知（就不驗證）| 4005: Email 格式錯誤 | 4007: 密碼不符合規定
// }
export const API_POST_AUTH_SIGNUP = API_URL + '/auth/signup';

// export const API_GET_AUTH_COMFIRM_EMAIL = ; url 用雜湊生成

// Post Forgot 忘記密碼
// req
// {
//     email,          :>> 電子郵件 (帳號、電郵擇一即可)
//     passwordHint,   :>> 密碼提示
// }
// res
// {
//     statusCode, :>> 4006: 重設密碼信已經寄到您的電子郵箱 | 4009: 無效提示或帳號 | 4011:密碼提示嘗試已達上限 |
// }
export const API_POST_AUTH_FORGOT_PASSWORD = API_URL + '/auth/forgot';
// 用雜湊生成網址寄到對方信箱，後端接收到特定網址的 GET 的請求即可將對應的帳號密碼重設?

// Post Reset Password 修改密碼
// 個人資料頁用
// req
// {
//      password, :>>
//      confirmPassword, :>>
// }
// res
// {
//
// }
export const API_POST_AUTH_RESET_PASSWORD = API_URL + '/auth/reset';

// GET Products
// req :
// {
//     ids: [N1, N2, ...]   :>> 特定一組商品資料
//     keyword: 'word',    :>> '海邊'
//     date: [from, to],   :>> ['2011-01-01', '2022-01-01']
//     series: 1-6,        :>> 1: other | 2: food | 3: wedding | 4: film | 5: scenery | 6: portrait
//     price: [0-N, 0-N],  :>> [0, 20]: 小於等於 20 | [20, 0]: 大於等於 20 | [20, 30] 介於包含 20 ~ 30
//     favorites: 0-N,     :>> 蒐藏數 大於等於 N
//     owners: 0-N,        :>> 購買數 大於等於 N
//     stars: 0-5,         :>> 1: 星星數 大於等於 1
//     offset: +N,         :>> 位移幾筆資料（分頁用）
//     orderby: 'price'    :>> 依據什麼排序
//     order: 0-1,         :>> 排序方式 0: ASC 升冪排序 | 1: DESC 降冪排序
//     limit: +N,          :>> 限制返回資料筆數
// }
// res :
// {
//     statusCode, :>> 2002: 成功 | 2003: 資料庫無該筆資料
//     total, :>> 全部符合條件的總共有幾筆
//     products: [
//         {
//             id,         :>> 商品 id
//             name,       :>> 商品名稱
//             descp,      :>> 商品描述
//             img,        :>> 商品圖片
//             price,      :>> 商品價格
//             currency,   :>> 商品貨幣單位
//             favorites,  :>> 蒐藏數
//             owners,     :>> 購買數
//             stars,      :>> 星星數
//             created_at, :>> 上架時間
//             product_series_id   :>> 商品系列
//         },...
//     ]
// }
export const API_GET_PRODUCTS = API_URL + '/products';
export const API_VAR_ASC = 0;
export const API_VAR_DESC = 1;
// export const API_GET_PRODUCTS = 'http://172.22.35.76:3003/api/products';

// GET | products images
// which = before | after1 | after2 | after3 ...
// export function STATIC_IMG_PRODUCTS(folder, which) {
//     return REACT_APP_API_URL.concat('/', folder, '/', which);
// }

//productlist tags 和 series
export const API_GET_PRODUCT_TAGS_SERIES = API_URL + '/products/list';
//productlist 推薦區
export const API_GET_PRODUCT_RECOMMEND = API_URL + '/products/recommend';
//productDetail 特定商品review
export const API_GET_PRODUCT_REVIEW = API_URL + '/products/review';
// GET Product Detail
// req :
// {
//     id,     :>> 商品 id
// }
// res :
// {   id,         :>> 商品 id
//     name,       :>> 商品名稱
//     descp,      :>> 商品描述
//     img,        :>> 商品圖片
//     price,      :>> 商品價格
//     currency,   :>> 商品貨幣單位
//     favorites,  :>> 蒐藏數
//     owners,     :>> 購買數
//     stars,      :>> 星星數
//     created_at, :>> 上架時間
//     product_series_id   :>> 商品系列
// }
export const API_GET_PRODUCT = API_URL + '/product';

// req:
// {
//     user_id,    :>> 使用者 id

// }
export const API_GET_CART = API_URL + '/cart';

// [ member ]
//member-[review] (get)
export const API_GET_MEMBER_REVIEW = API_URL + '/member/review';
export const API_GET_MEMBER_REVIEW_IMG = API_URL + '/member/review/img';

//member review (post) 更新 （formdata=>files)
export const API_GET_MEMBER_REVIEW_UPDATE = API_URL + '/member/review/update';

//member-[download] (get 要資料)
export const API_GET_MEMBER_DOWNLOAD = API_URL + '/member/review/download';
//member-dowmload (post 勾選pid)

// req {
//     uid,
//     dngId,
// }
// res {
//     statusCode,
//     result: boolean
// }
export const API_POST_MEMBER_DOWNLOAD_DNG = API_URL + '/download';
// API_URL + '/member/review/download/dng';
// {
//     uid:
//     dngId:[1,2...]
// }
//
export const API_GET_MEMBER_REVIEW_UPDATE_DETAIL =
    API_URL + '/member/review/update/detail';

//member-[profile] (上傳照片)
export const API_POST_MEMBER_PROFILE_PHOTO = API_URL + '/member/profile-photo';
export const API_POST_MEMBER_PROFILE = API_URL + '/member/profile';
