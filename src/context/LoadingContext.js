import React, { useState, useEffect } from 'react';

// Context
const LoadingContext = React.createContext();

// Provider
export function LoadingProvider(props) {
    // state, hook
    const [loading, setLoading] = useState(false);

    // max loading time
    const minTime = 600;
    const maxTime = 3000;
    useEffect(
        function () {
            if (!loading) {
                return;
            }

            setTimeout(function () {
                setLoading(false);
            }, maxTime);
        },
        [loading]
    );

    // shared
    const share = {
        start: () => {
            // console.log('loading start');
            setLoading(true);
        },
        end: () => {
            setTimeout(() => {
                // console.log('loading end');
                setLoading(false);
            }, minTime);
        },
        UILoading,
        current: loading,
    };

    // render
    return (
        <LoadingContext.Provider value={share}>
            {props.children}
            {/* <LoadingUI loading={loading}>{props.children}</LoadingUI> */}
        </LoadingContext.Provider>
    );

    // component
    function LoadingUI({ loading }) {
        return loading ? (
            <div className="boxLoadingBackground">
                <div className="boxLoading"></div>
                {props.children}
            </div>
        ) : (
            <>{props.children}</>
        );
    }

    function UILoading() {
        return (
            <div className="boxLoadingBackground">
                <div className="boxLoading"></div>
            </div>
        );
    }
}

// useContext
export function useLoadingContext() {
    return React.useContext(LoadingContext);
}
