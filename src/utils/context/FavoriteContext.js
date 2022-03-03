//內建庫
import React, { useState, useEffect } from 'react';
// 第三方庫
import axios from 'axios';
// 共用
import {
    API_GET_WISHLIST,
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
    //取得favorite 資料
    const [favorites, setFavorites] = useState([]);

    // 取得 Auth
    const auth = useAuthContext([]);
    if ((auth.isLogin = true)) {
        let getfavorites = async () => {
            try {
                let response = await axios.post(API_GET_WISHLIST, {
                    params: {
                        userid: auth.user_id,
                    },
                });
                console.log('res :>> ', response);
                setFavorites(response.data);
            } catch (err) {
                console.log('err :>> ', err);
            }
        };
        getfavorites;
    } else console.log('hello');

    useEffect(
        function () {
            console.log('favorite :>> ', favorites);
        }[favorites]
    );

    class Localwishlist {
        constructor(key) {
            this._key = key;
            this._value = JSON.parse(localStorage.getItem(key)); // 存wishlist的陣列
            if (!this._value) this._value = [];
            if (!Array.isArray(this._value))
                console.log(
                    __filename,
                    ' :>> webstorage : value mest be a array'
                );
        }

        // 取得資料（已從 string 轉成 JSON 物件）
        goods() {
            return this._value;
        }

        // 放入一筆資料
        add(goods) {
            this._value.push(goods);
            return this;
        }

        // 放入多筆資料
        apply(arr) {
            const that = this;
            arr.forEach(function (a) {
                if (!that._value.some((b) => b.id === a.id)) {
                    that._value.push(a);
                }
            });
            return this;
        }

        // 刪除一筆資料
        remove(product) {
            this._value = this._value.filter(function (e) {
                return e.id != product.id;
            });
            return this;
        }

        removeById(id) {
            this._value = this._value.filter(function (e) {
                return e.id != id;
            });
            return this;
        }

        // 檢視資料
        log() {
            console.log(`localStorage ${this._key}:>> `, this._value);
        }

        // 儲存至 localStorage
        save() {
            localStorage.setItem(this._key, JSON.stringify(this._value));
        }

        // 清除所有
        clear() {
            localStorage.removeItem(this._key);
        }
    }
}

// Product
export function FavoritesPoduct(props) {
    return <ProductsContext.id></ProductsContext.id>;
}

// useFavoritestext
export function useFavoritesContext() {
    return React.useFavoritesContext(FavoriteContext);
}
