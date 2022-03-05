import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import { API_GET_PRODUCT } from '../config';
import { API_GET_CART, API_POST_CART, API_LOCAL_STORAGE_CART } from '../config';
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
    // const [add, setAdd] = useState([]); // 紀錄需要寫入資料庫 or WebStorage 資料
    // const [remove, setRemove] = useState([]); // 紀錄需要寫入資料庫 or WebStorage 資料
    const add = useRef([]);
    const remove = useRef([]);
    const [checkAll, setCheckAll] = useState(false); // 紀錄是否勾選全選框框
    const [total, setTotal] = useState(0); // 紀錄查詢結果總數量（和 cart 陣列沒有一定一樣，返回的是資料庫中符合總數）

    // 變數 (shared)
    const { option } =
        props.option !== undefined
            ? props
            : {
                  option: {
                      orderby: 'created_at',
                      order: 1,
                      limit: 8,
                      offset: 0,
                  },
              };
    const shared = {
        current: cart,
        total,
        handleAdd,
        handleRemove,
        handleCheck,
        handleCheckAll,
        syncFrom,
        option,
    };

    // 生命週期
    // 初始化購物車資料
    useEffect(function () {
        syncFrom();
    }, []);

    // 保存購物車資料
    useEffect(
        function () {
            syncTo();
        },
        [cart]
    );

    // 渲染
    return (
        <CartContext.Provider value={shared}>
            {props.children}
        </CartContext.Provider>
    );

    // 函數
    // 將商品資料寫入蒐藏清單（有登入的話同時發 axios 更新到後端，沒登入的話更新到 local storage）
    function handleAdd(product) {
        const newCart = [...cart];
        const item = { ...product, check: false };
        newCart.push(item);
        add.push(item);
    }

    // 將商品資料從蒐藏清單排除（有登入的話同時發 axios 更新到後端，沒登入的話更新到 local stroage）
    function handleRemove(product) {
        const newCart = [...cart];
        const item = { ...product, check: false };
        newCart.push(item);
        remove.push(item);
    }

    function handleCheck(pid) {
        const newCart = cart.map(function (e) {
            if (e.id === pid) e.check = !e.check;
            return e;
        });

        setCart(newCart);
    }

    function handleCheckAll(event) {
        const check = !checkAll;
        const newCart = cart.map(function (e) {
            e.check = check;
            return e;
        });
        setCart(newCart);
        setCheckAll(check);
    }

    // 從 Database or WebStorage 更新資料進來（覆蓋）
    async function syncFrom(option = shared.option) {
        let newCart = [];
        let newTotal = 0;
        if (auth.current) {
            // from Database
            try {
                const res = await axios.get(API_GET_CART, {
                    params: {
                        userId: auth.user.id,
                        option,
                    },
                });
                // console.log('res :>> ', res);
                if (!res.data) {
                    new Error(STATUS_MSG[res.status]);
                }
                newCart = res.data.cart;
                newTotal = res.data.total;
            } catch (err) {
                console.log('err :>> ', err);
            }
        } else {
            // from LocalStorage
            const res = JSON.parse(
                localStorage.getItem(API_LOCAL_STORAGE_CART)
            );
            if (Array.isArray(res)) {
                newCart = res;
            }
        }

        // 設定狀態
        setCart(
            newCart.map((e) => {
                e.check = false;
                return e;
            })
        );
        setTotal(newTotal);
    }
    // 將資料更新到 Database or Webstorage (發送差異)
    async function syncTo() {
        if (auth.current) {
            // to Database
            const res = await axios.post(API_POST_CART, {
                userId: auth.user.id,
                add,
                remove,
            });
            // console.log('res :>> ', res);
            console.log('res.status :>> ', res.status);
            // clear
        } else {
            // to LocalStorage (直接覆蓋)
            localStorage.setItem(API_LOCAL_STORAGE_CART, JSON.stringify(cart));
        }
        // clear
        // setAdd([]);
        // setRemove([]);
        add = [];
        remove = [];
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
