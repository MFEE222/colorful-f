import React, { useState, useEffect, useRef } from 'react';

// Context
const LoadingContext = React.createContext(
    'please wrap element in <LoadingContext></LoadingContext>'
);

// Provider
export function LoadingProvider(props) {
    const [loading, setLoading] = useState(false);

    const option = {
        autoCloseLoading: true,
        maxLoadingSec: 3,
    };

    const shared = {
        current: loading, // 當前 loading 狀態
        start, // loading 開始
        end, // loading 結束
        option, // option 設定值
        enableAutoClose,
        disableAutoClose,
        maxLoadingSec,
    };

    // 渲染
    return (
        <LoadingContext.Provider value={shared}>
            <LoadingScreen current={shared.current}>
                {props.children}
            </LoadingScreen>
        </LoadingContext.Provider>
    );

    // 載入開始
    function start() {
        setLoading(true);
        if (option.autoCloseLoading) {
            setTimeout(() => {
                setLoading(false);
            }, sec(option.maxLoadingSec));
        }
    }
    // 載入結束
    function end() {
        setLoading(false);
    }
    // 毫秒轉換
    function sec(millSec) {
        return millSEc * 1000;
    }
    // 允許/禁止 自動關閉
    function enableAutoClose() {
        option.autoCloseLoading = true;
    }
    function disableAutoClose() {
        option.autoCloseLoading = false;
    }
    // 設定自動關閉秒數
    function maxLoadingSec(sec) {
        option.maxLoadingSec = sec > 1 ? sec : 1;
    }
}

// useContext
export function useLoadingContext() {
    return React.useContext(LoadingContext);
}

// Loading 畫面
function LoadingScreen({ current, children }) {
    return !current ? (
        <>{children}</>
    ) : (
        <div className="loading-background">
            <div className="loading"></div>
            {children}
        </div>
    );
}
