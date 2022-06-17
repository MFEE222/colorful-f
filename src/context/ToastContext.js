import { createContext, useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext();

// provider
export function UIToastProvider(props) {
    // context data
    const share = {
        default: toast,
        info: toast.info,
        success: toast.success,
        warning: toast.warning,
        error: toast.error,
    };

    // side effect
    useEffect(() => {
        share.default('😄 Welcom to Color4 Me!');
    }, []);

    // render
    return (
        <ToastContext.Provider value={share}>
            {props.children}
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </ToastContext.Provider>
    );
}

// consumer
export function useToastContext() {
    return useContext(ToastContext);
}
