//內建庫
import React, { useState, useEffect, useRef } from 'react';
// 第三方庫
import axios from 'axios';
// 共用
import {
    API_GET_FAVORITES,
    API_POST_FAVORITES,
    API_POST_AUTH_LOGIN,
    API_GET_PRODUCTS,
    API_GET_MEMBER_DOWNLOAD,
    API_POST_MEMBER_DOWNLOAD_DNG,
} from '../config';
import { useAuthContext } from './AuthContext';
import { useProductsContext } from './ProductsContext';

// Context
const FavoritesContext = React.createContext(
    'please wrap element in <FavoriteContext></FavoriteContext>'
);

export function FavoritesProvider(props) {
    // const auth = useAuthContext();
    console.log(4588);
    const auth = {
        isLogin: true,
        user: {
            name: 'rosa',
        },
    };
    const product = useProductsContext();
    const userID = auth.user.id;
    const [favorites, setFavorites] = useState([]);
    const diff = useRef([]);

    //TODO:1.連接資料庫拿下載資料; 2.用按鈕判斷要哪種 3.用狀態紀錄勾選哪些
    // auth.current
    let uid = 1;
    const [checked, setChecked] = useState(false); //核取方塊
    const [statusId, setStatusId] = useState(0); // filter 狀態
    // const [download, setDownload] = useState([]); //給後端的{uid,pid....}要下載的東西
    const [counts, setCounts] = useState(); //資料總計
    const [offset, setOffset] = useState(1); //分頁
    const [display, setDisplay] = useState([]); //呈現
    // 變數 (shared)
    const { option } =
        props.option !== undefined
            ? props
            : {
                  option: {
                      userid: 14,
                      orderby: 'created_at',
                      order: 1,
                      //   limit: 8,
                      //   offset: 0,
                  },
              };
    const shared = {
        current: favorites,
        // addFavorites,
        // removeFavorites,
        // handleCheck,
        // handleCheckAll,
        // handleDownload,
        // fetchfavorites,
        // display,
        option,
    };

    //抓 favorites
    useEffect(() => {
        if (auth.isLogin) {
            let getfavorites = async () => {
                try {
                    // console.log(333);
                    let response = await axios.get(API_GET_FAVORITES, {
                        params: {
                            userId: 14,
                            // auth.user.id,
                        },
                    });
                    // console.log('123 :>> ', ' 123');
                    console.log('res :>> ', response);
                    setFavorites(response.data.favorites);
                } catch (err) {
                    console.log('err :>> ', err);
                }
            };
            getfavorites();
            //沒登入存Loaclstorge
        } else {
            let f = localStorage.getItem('colorful-favorties');
            if (!f) f = [];
            setFavorites(f);
        }
    }, []);

    // 寫入 Favorite
    // useEffect(
    //     function () {
    //         if (auth.isLogin) {
    //             (async function () {
    //                 try {
    //                     const res = await axios.post(API_POST_FAVORITES, {
    //                         userID,
    //                         diff,
    //                     });

    //                     if (!res.result) {
    //                         new Error('failed write favorites...');
    //                     }
    //                 } catch (err) {
    //                     console.log('err :>> ', err);
    //                 }
    //             })();
    //         } else {
    //             localStorage.setItem('colorful-favorites', favorites);
    //         }
    //     },
    //     [favorites]
    // );

    // 事件處理器
    //加入
    // function addFavorites(product) {
    //     const newFavorites = [...favorites];
    //     newFavorites.push(product.id);
    //     setFavorites(newFavorites);

    //     if (diff.includes(product.id)) {
    //         diff = diff.filter((e) => {
    //             return e != -1 * product.id;
    //         });
    //     } else {
    //         diff.push(product.id);
    //     }
    //     // const response = await axios.post(API_POST_FAVORITES, {
    //     //     userID,
    //     //     diff,
    //     // });
    // }
    //刪除
    // function removeFavorites(product) {
    //     const deleteFavorites = [...favorites];
    //     deleteFavorites.push(product.id);
    //     setFavorites(deleteFavorites);
    //     if (diff.includes(product.id)) {
    //         diff = diff.filter((e) => {
    //             return e != product.id;
    //         });
    //     } else {
    //         diff.push(-1 * product.id);
    //     }
    // }

    // async function fetchfavorites(option = shared.option) {
    //     let response = await axios.get(API_GET_FAVORITES, {
    //         params: {
    //             userid: auth.user.id,
    //             productid: product.productid,
    //         },
    //     });
    //     // console.log('response.data.data :>> ', response.data);
    //     const newDisplay = response.data.data.map(function (e) {
    //         e.check = false;
    //         return e;
    //     });
    //     console.log('newDisplay :>> ', newDisplay);
    //     setCounts(response.data.rows);
    //     // setDisplay(response.data.data);
    //     setDisplay(newDisplay);
    // }

    //checkbox
    //all
    // function handleCheckAll() {
    //     const c = !checked;
    //     const newDisplay = [...display];

    //     newDisplay.map((v, i) => {
    //         v.check = c;
    //     });
    //     setChecked(c);
    //     setDisplay(newDisplay);
    // }

    //alone
    // function handleCheck(event, index) {
    //     const newDisplay = [...display];
    //     newDisplay[index].check = event.target.checked;
    //     setDisplay(newDisplay);
    // }

    // async function handleDownload() {
    //     const d = display.filter((v, i) => {
    //         return v.check === true;
    //     });
    //     const dngId = d.map((v) => {
    //         return v.product_id;
    //     });
    //     console.log('here :>> ', 'here');
    //     const response = await axios.post(API_POST_MEMBER_DOWNLOAD_DNG, {
    //         uid,
    //         dngId,
    //     });
    // }

    // 渲染
    return (
        <FavoritesContext.Provider value={shared}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

// useFavoritestext
export function useFavoritesContext() {
    return React.useContext(FavoritesContext);
}
