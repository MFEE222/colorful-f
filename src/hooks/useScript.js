import { useEffect, useState, useCallback } from 'react';

export function useScript(url, option = { async: true, defer: true }) {
    // state
    const [dataState, setDataState] = useState({
        result: false,
        loading: true,
        error: null,
    });

    const handleScript = useCallback(() => {
        const script = document.createElement('script');
        script.src = url;

        const keys = Object.keys(option);
        for (let i = 0; i < keys.length; i++) {
            script[keys[i]] = option[keys[i]];
        }

        document.body.appendChild(script);

        script.onload = () => {
            // success
            setDataState((prev) => ({
                ...prev,
                result: true,
                loading: false,
                error: null,
            }));
        };

        return () => {
            document.body.removeChild(script);
            // reset
            setDataState((prev) => ({
                ...prev,
                result: false,
                loading: false,
                error: null,
            }));
        };
    }, []);

    useEffect(() => {
        handleScript();
    }, []);

    return {
        ...dataState,
    };
}
