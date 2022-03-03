import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { API_GET_ORDERS } from '../config';

// Context
const OrdersContext = React.createContext(
    'please wrap element in <OrdersContext></OrdersContext>'
);

// Provider
export function OrdersProvider(props) {
    // 狀態
    const [orders, setOrders] = useState();

    // 共享狀態
    const shared = auth;

    // 函數
    useEffect(
        function () {
            // 轉址？
        },
        [auth]
    );

    // 渲染
    return (
        <OrdersContext.Provider values={shared}>
            {props.children}
        </OrdersContext.Provider>
    );
}

// Consumer
export function AuthConsumer(props) {
    return <OrdersContext.Consumer>{props.children}</OrdersContext.Consumer>;
}

// useContext
export function useAuthContext() {
    return React.useContext(OrdersContext);
}
