import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {
    API_POST_AUTH_LOGIN,
    API_POST_AUTH_SIGNUP,
    API_POST_AUTH_FORGOT,
} from '../config';

// Context
const AuthContext = React.createContext(
    'please wrap element in <AuthContext></AuthContext>'
);

// Provider
export function AuthProvider(props) {
    // 狀態
    const [auth, setAuth] = useState({
        isLogin: false,
        user: {
            id: null,
            email: null,
            phone: null,
            gender: null,
            birthday: null,
        },
    });

    // 共享狀態
    const shared = auth;

    // 函數
    useEffect(
        function () {
            // 轉址？
        },
        [isLogin]
    );

    // 渲染
    return (
        <AuthContext.Provider values={shared}>
            {props.children}
        </AuthContext.Provider>
    );
}

// Consumer
export function AuthConsumer(props) {
    return <AuthContext.Consumer>{props.children}</AuthContext.Consumer>;
}

// useContext
export function useAuthContext() {
    return React.useContext(AuthContext);
}
