import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import { API_GET_PRODUCT } from '../utils/config';
import {
    API_GET_ORDERS,
    API_GET_ORDER_DETAIL,
    API_POST_ORDER,
    API_POST_ORDER_PAYMENT,
} from '../utils/config';
import { STATUS_MSG } from '../utils/others/status';
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
    const [order, setOrder] = useState([]);
    const [orderDetail, setOrderDetail] = useState([]);
    const [paymentCart, setPaymentCart] = useState([]);
    const [creditCard, setCreditCard] = useState({});

    // 變數 (shared)
    const { option } =
        props.option !== undefined
            ? props
            : {
                  option: {
                      orderBy: '',
                      sortBy: '',
                      limit: '',
                      offset: 0,
                  },
              };

    const shared = {
        order,
        orderDetail,
        fetchOrderList,
        fetchOrderDetail,
        paymentCart,
        checkout: function () {},
    };

    // 生命週期
    // 初始化購物車資料
    useEffect(function () {
        fetchOrderList();
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
        try {
            if (auth.isLogin) {
                console.log('here');
                const res = await axios.get(API_GET_ORDERS, {
                    params: {
                        userID: auth.user.id,
                    },
                });
                console.log('res :>> ', res);

                setOrder(res.data.order);
            }
        } catch (err) {
            console.log('err :>> ', err);
        }
    }

    async function fetchOrderDetail(orderID) {
        try {
            if (auth.isLogin) {
                const res = await axios.get(API_GET_ORDER_DETAIL, {
                    params: {
                        userID: auth.user.id,
                        orderID,
                    },
                });
                console.log('res :>> ', res);
                setOrderDetail(res.orderDetail);
            }
        } catch (err) {
            console.log('err :>> ', err);
        }
    }
}

// useContext
export function useOrderContext() {
    return React.useContext(OrderContext);
}
