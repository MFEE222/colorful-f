import React, { useReducer, useState, useEffect, useRef } from 'react';

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
    // shared
    const { option } =
        props.option !== undefined
            ? props
            : {
                  option: {
                      orderBy: { column: 'products.created_at', order: 'desc' },
                      limit: 8,
                      offset: 0,
                  },
              };

    // context
    const { isLogin, user } = useAuthContext();
    // // init
    // const initialCart = { cart: [], checkAll: false };
    // // reducer
    // async function reducerCart(state, action) {
    //     switch (action.type) {
    //         case 'CART_ADD_PRODUCT':
    //         case 'CART_REMOVE_PRODUCT':
    //         case 'CART_CHECK_PRODUCT':
    //         case 'CART_CHECK_ALL_PRODUCTS':
    //         case 'CART_FETCH_PRODUCTS':
    //             const newState = await fetchProducts(state);
    //             // console.log('newState :>> ', newState);
    //             return newState;
    //         case 'CART_PUSH_PRODUCTS':
    //         default:
    //             throw new Error('action.type error');
    //     }
    // }

    // const [state, dispatch] = useReducer(reducerCart, initialCart);
    const [state, setState] = useState({ cart: [], checkAll: false });

    const shared = {
        cart: state.cart,
        fetchCart: fetchProducts,
    };

    // Life Cycle
    useEffect(function () {
        fetchProducts();
    }, []);

    useEffect(
        function () {
            console.log('state :>> ', state);
        },
        [state]
    );

    return (
        <CartContext.Provider value={shared}>
            {props.children}
        </CartContext.Provider>
    );

    // Function
    async function fetchProducts() {
        // if (!isLogin) {
        //     const res = JSON.parse(
        //         localStorage.getItem(API_LOCAL_STORAGE_CART)
        //     );
        //     if (res instanceof Array) {
        //         setState({ ...state, cart: res });
        //     }
        // }

        try {
            console.log('user.id :>> ', user.id);
            console.log('option :>> ', option);
            console.log('API_GET_CART :>> ', API_GET_CART);
            const res = await axios.get(API_GET_CART, {
                params: {
                    userID: user.id,
                    orderBy: option.orderBy,
                    limit: option.limit,
                    offset: option.offset,
                },
            });
            // console.log('res :>> ', res);
            if (res.status == 200) {
                // console.log('res :>> ', res);
                setState({ ...state, cart: res.data });
            }
        } catch (err) {
            console.log('err :>> ', err);
        }
    }

    // 函數
    // 將商品資料寫入蒐藏清單（有登入的話同時發 axios 更新到後端，沒登入的話更新到 local storage）
    // function handleAdd(product) {
    //     // 原有購物車沒有，則加入
    //     if (!cart.some((e) => e.id === product.id)) {
    //         const newItem = { ...product, check: false };
    //         const newCart = [...cart];
    //         newCart.push(newItem);
    //         setCart(newCart);

    //         // 比對差異 FIXME
    //         if (!diffRef.some((e) => e === product.id)) {
    //             diffRef.push(product.id);
    //         }
    //     }
    // }

    // 將商品資料從蒐藏清單排除（有登入的話同時發 axios 更新到後端，沒登入的話更新到 local stroage）
    // function handleRemove(product) {
    //     // 原有購物車有，則排除
    //     if (cart.some((e) => e.id === product.id)) {
    //         const newCart = cart.filter(function (e) {
    //             return e.id != product.id;
    //         });
    //         setCart(newCart);

    //         // 比對差異 FIXME
    //         if (!diffRef.some((e) => e === -product.id)) {
    //             diffRef.push(-product.id);
    //         }
    //     }
    // }

    // function handleCheck(pid) {
    //     const newCart = cart.map(function (e) {
    //         if (e.id === pid) e.check = !e.check;
    //         return e;
    //     });

    //     setCart(newCart);
    // }

    // function handleCheckAll(event) {
    //     const check = !checkAll;
    //     const newCart = cart.map(function (e) {
    //         e.check = check;
    //         return e;
    //     });
    //     setCart(newCart);
    //     setCheckAll(check);
    // }

    // 從 Database or WebStorage 更新資料進來（覆蓋）
    // async function syncFrom(option = shared.option) {
    //     let newCart = [];
    //     let newTotal = 0;
    //     if (auth.isLogin) {
    //         // from Database
    //         try {
    //             console.log('auth :>> ', auth);
    //             const res = await axios.get(API_GET_CART, {
    //                 params: {
    //                     userId: auth.user.id,
    //                     option,
    //                 },
    //             });
    //             console.log('res :>> ', res);
    //             if (!res.data) {
    //                 new Error(STATUS_MSG[res.status]);
    //             }
    //             newCart = res.data.cart;
    //             newTotal = res.data.total;
    //         } catch (err) {
    //             console.log('err :>> ', err);
    //         }
    //     } else {
    //         // from LocalStorage
    //         const res = JSON.parse(
    //             localStorage.getItem(API_LOCAL_STORAGE_CART)
    //         );
    //         if (Array.isArray(res)) {
    //             newCart = res;
    //         }
    //     }

    //     // 設定狀態
    //     setCart(
    //         newCart.map((e) => {
    //             e.check = false;
    //             return e;
    //         })
    //     );
    //     setTotal(newTotal);
    // }
    // 將資料更新到 Database or Webstorage (發送差異)
    // async function syncTo() {
    //     if (isLogin) {
    //         // to Database
    //         const res = await axios.post(API_POST_CART, {
    //             userId: user.id,
    //             diff: diffRef,
    //         });
    //         // console.log('res :>> ', res);
    //         // console.log('res.status :>> ', res.status);
    //         // clear
    //     } else {
    //         // to LocalStorage (直接覆蓋)
    //         localStorage.setItem(API_LOCAL_STORAGE_CART, JSON.stringify(cart));
    //     }
    //     // clear
    //     // setAdd([]);
    //     // setRemove([]);
    //     handleAdd = [];
    //     handleRemove = [];
    // }
}

// Consumer
export function CartConsumer(props) {
    return <CartContext.Consumer>{props.children}</CartContext.Consumer>;
}

// useContext
export function useCartContext() {
    return React.useContext(CartContext);
}
