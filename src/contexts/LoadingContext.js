import { createContext, useContext, useState, useEffect } from 'react';
import Loading from 'components/Loading';
// Context
const LoadingContext = createContext();

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
        Loading,
        current: loading,
    };

    // render
    return (
        <LoadingContext.Provider value={share}>
            {props.children}
        </LoadingContext.Provider>
    );
}

// useContext
export function useLoadingContext() {
    return useContext(LoadingContext);
}
