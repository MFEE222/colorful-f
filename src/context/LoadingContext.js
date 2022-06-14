import React, { useState, useEffect } from 'react';

// Context
const LoadingContext = React.createContext();

// Provider
export function LoadingProvider(props) {
    // state, hook
    const [loading, setLoading] = useState(false);

    // max loading time
    const maxTime = 500;
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
    const shared = {
        start: () => {
            setLoading(true);
        },
        end: () => {
            setLoading(false);
        },
    };

    // render
    return (
        <LoadingContext.Provider value={shared}>
            <LoadingUI loading={loading}>{props.children}</LoadingUI>
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
}

// Consumer
// export function CartConsumer(props) {
//     return <LoadingContext.Consumer>{props.children}</LoadingContext.Consumer>;
// }

// useContext
export function useCartContext() {
    return React.useContext(LoadingContext);
}
