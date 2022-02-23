import { findDOMNode } from 'react-dom';

export const API_URL =
    (process.env.REACT_APP_API_URL || 'http://localhost:3006') + '/api';

export const IMG_URL = process.env.REACT_APP_API_URL || 'http://localhost:3006';

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
//     order: 0-1,         :>> 價格的排序 0: ASC 升冪排序 | 1: DESC 降冪排序
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

export const API_GET_PRODUCT_TAGS_SERIES = API_URL + '/products/list';
