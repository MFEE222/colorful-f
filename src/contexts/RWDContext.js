import { createContext, useContext, useState, useEffect } from 'react';

// Context
const RWDContext = createContext(
    'please wrap element in <RWDContext></RWDContext>'
);

// Provider
export function RWDProvider(props) {
    // 狀態: xs: <576 , sm: >=576, md: >=768 , lg: >=992, xl: >=1200, xxl: >=1440
    const [breakpoint, setBreakPoint] = useState('');

    // 共享狀態、資料、方法
    const shared = {
        breakpoint,
        xs: function () {
            return breakpoint >= 0;
        },
        sm: function () {
            return breakpoint >= 576;
        },
        md: function () {
            return breakpoint >= 768;
        },
        lg: function () {
            return breakpoint >= 992;
        },
        xl: function () {
            return breakpoint >= 1200;
        },
        xxl: function () {
            return breakpoint >= 1440;
        },
    };

    // 函數
    function handleResize() {
        const w = window.screen.width;
        let b = 0;

        if (w >= 1440) {
            // b = 'xxl';
            b = 1440;
        } else if (w >= 1200) {
            // b = 'xl';
            b = 1200;
        } else if (w >= 992) {
            // b = 'lg';
            b = 992;
        } else if (w >= 768) {
            // b = 'md';
            b = 768;
        } else if (w >= 576) {
            // b = 'sm';
            b = 576;
        } else {
            // b = 'xs';
            b = 375;
        }
        // console.log('w :>> ', w);
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
    // useEffect(
    //     function () {
    //         console.log('breakpoint :>> ', breakpoint);
    //         console.log('shared.xs() :>> ', shared.xs());
    //         console.log('shared.sm() :>> ', shared.sm());
    //         console.log('shared.md() :>> ', shared.md());
    //         console.log('shared.lg() :>> ', shared.lg());
    //         console.log('shared.xl() :>> ', shared.xl());
    //         console.log('shared.xxl() :>> ', shared.xxl());
    //     },
    //     [breakpoint]
    // );

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
    return useContext(RWDContext);
}
