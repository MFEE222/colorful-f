import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { API_GET_PRODUCT } from '../config';
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
    const [cart, setCart] = useState([]);

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
    useEffect(function () {
        // 初始化 LocalStorage
        const l = new LocalCart('colorful-cart');

        // 取得 Auth

        // axios api cart

        // 寫入 localstorage

        // 寫入狀態
    }, []);

    // 函數
    function add(product) {}

    // 渲染
    return (
        <CartContext.Provider value={shared}>
            {props.children}
        </CartContext.Provider>
    );
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
