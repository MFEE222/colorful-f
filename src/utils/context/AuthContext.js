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
    const [auth, setAuth] = useState({});

    // 函數

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
