import React, { useState, useEffect } from 'react';
// import { Redirect, useRouteMatch } from 'react-router-dom';

import axios from 'axios';
import {
    API_POST_AUTH_LOGIN,
    API_POST_AUTH_SIGNUP,
    API_POST_AUTH_FORGOT,
} from '../config';

// 通用元件
// import routes from '../routes';

// Context
const AuthContext = React.createContext(
    'please wrap element in <AuthContext></AuthContext>'
);

// Provider
export function AuthProvider(props) {
    // 狀態
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({
        id: null,
        name: null,
        email: null,
        phone: null,
        gender: null,
        birthday: null,
    });

    // 共享狀態
    const { option } =
        props.option !== undefined
            ? props
            : { option: { account: '', password: '' } };
    const { other } = props.other !== undefined ? props : { other: {} };
    const shared = {
        other,
        option, // 設定 axios 參數
        reset, // axios post 登入
        current: login, // 當前是否登入
        user, // 取用使用者資料
    };

    // 函數
    // 登入、登出、註冊、忘記密碼
    async function reset(option = shared.option) {
        setLogin(true);
        setUser({
            id: 9,
            name: 'chris',
            email: 'success@test.mail',
            phone: '9999-999-999',
            gender: 0,
            birthday: '2022-02-02',
        });
        // axios post 登入請求
        // try {
        //     const res = await axios.post(API_POST_AUTH_LOGIN, option, {
        //         withCredentials: true,
        //     });
        //     console.log('res :>> ', res);
        //     if (res.data.statusCode & 1) {
        //         throw new Error(STATUS_MSG[res.data.statusCode]);
        //     }
        //     if (res.data.user) {
        //         setLogin(true);
        //         setUser(res.data.user);
        //     }
        // } catch (err) {
        //     console.log(err);
        // }
    }

    // 生命週期
    useEffect(function () {
        // setLogin(true);
        // setUser({
        //     id: 9,
        //     name: 'rosa',
        //     email: 'someone@test.mail',
        //     phone: '0911-123-123',
        //     gender: 0,
        //     birthday: '2011-07-30',
        // });
    }, []);

    // DidMount, DidUpdate
    useEffect(
        function () {
            console.log('login :>> ', login);
            console.log('user :>> ', user);
        },
        [login, user]
    );

    // 渲染
    return (
        <AuthContext.Provider value={shared}>
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
