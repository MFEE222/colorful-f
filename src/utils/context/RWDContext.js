import React, { useState, useEffect } from 'react';

// Context
const RWDContext = React.createContext(
    'please wrap element in <RWDContext></RWDContext>'
);

// Provider
export function RWDProvider(props) {
    // 狀態: xs: <576 , sm: >=576, md: >=768 , lg: >=992, xl: >=1200, xxl: >=1440
    const [breakpoint, setBreakPoint] = useState('');

    // 共享狀態、資料、方法
    const shared = {
        breakpoint,
    };

    // 函數
    function handleResize() {
        const w = window.screen.width;
        let b = '';

        if (w >= 1440) {
            b = 'xxl';
        } else if (w >= 1200) {
            b = 'xl';
        } else if (w >= 992) {
            b = 'lg';
        } else if (w >= 768) {
            b = 'md';
        } else if (w >= 576) {
            b = 'sm';
        } else {
            b = 'xs';
        }
        console.log('w :>> ', w);
        setBreakPoint(b);
    }

    // 生命週期
    useEffect(function () {
        // DidMount
        handleResize();
        window.addEventListener('resize', handleResize);
        // WillUnMount
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 測試
    useEffect(
        function () {
            console.log('breakpoint :>> ', breakpoint);
        },
        [breakpoint]
    );

    return (
        <RWDContext.Provider value={shared}>
            {props.children}
        </RWDContext.Provider>
    );
}
// Consumer
export function RWDConsumer(props) {
    return <RWDContext.Consumer>{props.children}</RWDContext.Consumer>;
}
// useContext
export function useRWDContext(props) {
    return React.useContext(RWDContext);
}
