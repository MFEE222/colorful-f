import { AccordionButton } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import Auth from '../pages/Auth';

export const API_URL =
    (process.env.REACT_APP_API_URL || 'http://localhost:3006') + '/api';

export const IMG_URL = process.env.REACT_APP_API_URL || 'http://localhost:3006';

// Post Login 登入
// req
// {
//     account, :>> 帳號 or email ?
//     password, :>> 密碼
// }
// res
// {
//     authStatus, :>> 4001: 登入失敗 | 4003: 帳號或密碼錯誤 | 4004: 達嘗試次數上限 | 5001: 登入成功
//     user: {
//         name,
//         acount,
//         email,
//         phone,
//         gender,
//     }    :>> undefined: 登入失敗 | 使用者資料：登入成功
// }
export const API_POST_AUTH_LOGIN = API_URL + '/auth/login';

// Post Signin 註冊
// req
// {
//     name,   :>> 註冊姓名
//     account, :>> 註冊帳號
//     email, :>> 註冊信箱
//     password, :>> 註冊密碼
// }
// res
// {
//     authStatus, :>> 2006: 帳號不符合規定 | 2008: 密碼不符合規定 | 2077: 信箱格式錯誤 | 2082: 註冊成功，待驗證電子郵件
// }
export const API_POST_AUTH_SIGNUP = API_URL + '/auth/signup';

// Post Forgot 忘記密碼
// req
// {
//     account,        :>> 帳號
//     email,          :>> 電子郵件 (帳號、電郵擇一即可)
//     passwordHint,   :>> 密碼提示
// }
// res
// {
//     authStatus, :>> 3001: 無效提示或帳號 | 3002:密碼提示嘗試已達上限 | 3003: 重設密碼信已經寄到您的電子郵箱
// }
export const API_POST_AUTH_FORGOT = API_URL + '/auth/forgot';

// GET Products
// req :
// {   keyword: 'word',    :>> '海邊'
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
export const API_GET_PRODUCTS = API_URL + '/products';

// GET | products images
// which = before | after1 | after2 | after3 ...
// export function STATIC_IMG_PRODUCTS(folder, which) {
//     return REACT_APP_API_URL.concat('/', folder, '/', which);
// }

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
