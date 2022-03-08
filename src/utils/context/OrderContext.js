import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import { API_GET_PRODUCT } from '../config';
import { API_GET_CART, API_POST_CART, API_LOCAL_STORAGE_CART } from '../config';
import { STATUS_MSG } from '../others/status';
import { useAuthContext } from './AuthContext';

// Context
const OrderContext = React.createContext(
    'please wrap element in <OrderContext></OrderContext>'
);

// Provider
export function OrderProvider(props) {
    // context
    const auth = useAuthContext();
    // state, hook
    const [orders, setOrders] = useState([]);
    const [orderDetail, setOrderDetail] = useState([]);
    const [paymentCart, setPaymentCart] = useState([]);
    const [creditCard, setCreditCard] = useState({});

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
        paymentCart,
        checkout: function () {},
    };

    // 生命週期
    // 初始化購物車資料
    useEffect(function () {
        syncFrom();
    }, []);

    // 保存購物車資料
    useEffect(function () {
        // syncTo();
    }, []);
    // 渲染
    return (
        <OrderContext.Provider value={shared}>
            {props.children}
        </OrderContext.Provider>
    );

    // 函數
    // 從 Database or WebStorage 更新資料進來（覆蓋）
    // 請求會員訂單列表資料
    async function fetchOrderList() {
        let;
        try {
        } catch (err) {
            console.log('err :>> ', err);
        }
    }
}

// Consumer
export function CartConsumer(props) {
    return <OrderContext.Consumer>{props.children}</OrderContext.Consumer>;
}

// useContext
export function useCartContext() {
    return React.useContext(OrderContext);
}
