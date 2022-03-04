import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { API_GET_PRODUCT } from '../config';
import { API_GET_CART, API_POST_CART, API_LOCAL_STORAGE_KEY } from '../config';
import { STATUS_MSG } from '../others/status';
import { useAuthContext } from './AuthContext';

// Context
const CartContext = React.createContext(
    'please wrap element in <CartContext></CartContext>'
);

// Provider
export function CartProvider(props) {
    // context
    const auth = useAuthContext();
    // state, hook
    const [cart, setCart] = useState([]); // 紀錄購物車內資料
    const [add, setAdd] = useState([]); // 紀錄需要寫入資料庫 or WebStorage 資料
    const [remove, setRemove] = useState([]); // 紀錄需要寫入資料庫 or WebStorage 資料
    const [checkAll, setCheckAll] = useState(false); // 紀錄是否勾選全選框框

    // 變數 (shared)
    const { option } =
        props.option !== undefined ? props : { option: { id: 1 } };
    const shared = {
        state: cart,
        add: 1,
        remove: 1,
        option: 1,
        reset: 1,
    };

    // 生命週期
    // 初始化購物車資料
    useEffect(function () {
        // 檢查登入狀態（有登入）
        if (auth.current) {
        }
        // 初始化 LocalStorage
        const l = new LocalCart('colorful-cart');

        // 取得 Auth

        // axios api cart

        // 寫入 localstorage

        // 寫入狀態
    }, []);

    // 保存購物車資料
    useEffect(function () {}, [cart]);

    // 渲染
    return (
        <CartContext.Provider value={shared}>
            {props.children}
        </CartContext.Provider>
    );

    // API
    // 將商品資料寫入蒐藏清單（有登入的話同時發 axios 更新到後端，沒登入的話更新到 local storage）
    function add(product) {}

    // 將商品資料從蒐藏清單排除（有登入的話同時發 axios 更新到後端，沒登入的話更新到 local stroage）
    function remove() {}

    // 元件內部使用函數
    function handleCheckAll() {}

    function handleCheck() {}

    // 從 Database or WebStorage 更新資料進來（覆蓋）
    async function syncFrom(url) {
        let newCart = [];
        if (auth.current) {
            // from Database
            try {
                const res = await axios.get(API_GET_CART, {
                    params: {
                        user_id: auth.user.id,
                    },
                });
                // console.log('res :>> ', res);
                if (!res.data) {
                    new Error(STATUS_MSG[res.status]);
                }
                newCart = res.data;
            } catch (err) {
                console.log('err :>> ', err);
            }
        } else {
            // from LocalStorage
            const res = JSON.parse(localStorage.getItem(API_LOCAL_STORAGE_KEY));
            if (Array.isArray(res)) {
                newCart = res;
            }
        }

        // 設定狀態
        setCart(newCart);
    }
    // 將資料更新到 Database or Webstorage (發送差異)
    async function syncTo(url) {
        if (auth.current) {
            // to Database
            const res = await axios.post(API_POST_CART, {
                user_id: auth.user.id,
                add,
                remove,
            });
            // console.log('res :>> ', res);
            console.log('res.status :>> ', res.status);
            // clear
        } else {
            // to LocalStorage (直接覆蓋)
            localStorage.setItem(API_LOCAL_STORAGE_KEY, JSON.stringify(cart));
        }
        // clear
        setAdd([]);
        setRemove([]);
    }
}

// Consumer
export function CartConsumer(props) {
    return <CartContext.Consumer>{props.children}</CartContext.Consumer>;
}

// useContext
export function useCartContext() {
    return React.useContext(CartContext);
}

class LocalCart {
    constructor(key) {
        this._key = key;
        this._value = JSON.parse(localStorage.getItem(key)); // 存商品的陣列
        if (!this._value) this._value = [];
        if (!Array.isArray(this._value))
            console.log(__filename, ' :>> webstorage : value mest be a array');
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
