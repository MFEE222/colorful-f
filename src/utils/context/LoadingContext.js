import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import { API_GET_CART, API_POST_CART, API_LOCAL_STORAGE_CART } from '../config';
import { useAuthContext } from './AuthContext';

// Context
const LoadingContext = React.createContext(
    'please wrap element in <LoadingContext></LoadingContext>'
);

// Provider
export function LoadingProvider(props) {
    // context
    const auth = useAuthContext();
    // state, hook
    const [loading, setLoading] = useState(true);

    // 變數 (shared)
    const shared = {
        start: '',
        end: '',
        current: loading,
    };

    // 生命週期
    // 初始化購物車資料
    useEffect(function () {}, []);

    // 保存購物車資料
    // useEffect(function () {}, [loading]);
    // 渲染
    return (
        <LoadingContext.Provider value={shared}>
            <LoadingUI shared={shared}>{props.children}</LoadingUI>
        </LoadingContext.Provider>
    );

    // 函數

    // 元件
    function LoadingUI(props) {
        const { current } = props.shared;
        console.log('current :>> ', current);
        return current ? (
            <div className="boxLoadingBackground">
                <div className="boxLoading"></div>
                {props.children}
            </div>
        ) : (
            <>{props.children}</>
        );
    }
}

// Consumer
export function CartConsumer(props) {
    return <LoadingContext.Consumer>{props.children}</LoadingContext.Consumer>;
}

// useContext
export function useCartContext() {
    return React.useContext(LoadingContext);
}
