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
} from '../config';
import { useAuthContext } from './AuthContext';
import { useProductsContext } from './ProductsContext';

// Context
const FavoriteContext = React.createContext(
    'please wrap element in <FavoriteContext></FavoriteContext>'
);

export function FavoritesProvider(props) {
    const auth = useAuthContext();
    const userID = auth.user.id;
    const [favorites, setFavorites] = useState([]);
    const diff = useRef([]);
    //抓 favorites
    useEffect(() => {
        if (auth.isLogin) {
            let getfavorites = async () => {
                try {
                    let response = await axios.post(API_GET_FAVORITES, {
                        params: {
                            userid: auth.user.id,
                        },
                    });
                    console.log('res :>> ', response);
                    setFavorites(response.data);
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
    useEffect(
        function () {
            if (auth.isLogin) {
                (async function () {
                    try {
                        const res = await axios.post(API_POST_FAVORITES, {
                            userID,
                            diff,
                        });

                        if (!res.result) {
                            new Error('failed write favorites...');
                        }
                    } catch (err) {
                        console.log('err :>> ', err);
                    }
                })();
            } else {
                localStorage.setItem('colorful-favorites', favorites);
            }
        },
        [favorites]
    );

    // 事件處理器
    //加入
    const addFavorites = async (product) => {
        if (diff.includes(product.id)) {
            diff = diff.filter((e) => {
                return e != -1 * product.id;
            });
        } else {
            diff.push(product.id);
        }
        const response = await axios.post(API_POST_FAVORITES, {
            userID,
            diff,
        });
    };
    //刪除
    const removeFavorites = async (product) => {
        if (diff.includes(product.id)) {
            diff = diff.filter((e) => {
                return e != product.id;
            });
        } else {
            diff.push(-1 * product.id);
        }
        const response = await axios.post(API_POST_FAVORITES, {
            userID,
            diff,
        });
    };
}
// Product

// export function FavoritesConsumer(props) {
//     return <ProductsContext.id></ProductsContext.id>;
// }

// useFavoritestext
export function useFavoritesContext() {
    return React.useContext(FavoriteContext);
}
