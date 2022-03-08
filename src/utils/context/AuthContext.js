import React, { useState, useEffect } from 'react';
// import { Redirect, useRouteMatch } from 'react-router-dom';

import axios from 'axios';
import {
    API_POST_AUTH_LOGIN,
    API_POST_AUTH_SIGNUP,
    API_POST_AUTH_FORGOT_PASSWORD,
    API_POST_AUTH_RESET_PASSWORD,
} from '../config';
import { STATUS_MSG } from '../others/status';
// 通用元件
// import routes from '../routes';

// Context
const AuthContext = React.createContext(
    'please wrap element in <AuthContext></AuthContext>'
);

// Provider
export function AuthProvider(props) {
    // 狀態

    // user {
    //     id: null,
    //     name: null,
    //     email: null,
    //     phone: null,
    //     gender: null,
    //     birthday: null,
    // }
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState({ id: 1 });
    const [allowReset, setAllowReset] = useState(false);

    // 共享狀態
    const { option } =
        props.option !== undefined
            ? props
            : { option: { account: '', password: '' } };
    const { other } = props.other !== undefined ? props : { other: {} };
    const shared = {
        other,
        option, // 設定 axios 參數
        login, // axios post 登入
        clear, // 清除所有驗證資料（登出）
        current: isLogin, // 當前是否登入
        isLogin,
        user, // 取用使用者資料
        forget, // axios
        allowReset,
        setAllowReset,
        // reset,  // 發送重設密碼請求，重設成功後要記得把 allowReset 設為 false
    };

    // 函數
    // 登入、登出、註冊、忘記密碼
    async function login(option = shared.option) {
        // setIsLogin(true);
        // setUser({
        //     id: 9,
        //     name: 'chris',
        //     email: 'success@test.mail',
        //     phone: '9999-999-999',
        //     gender: 0,
        //     birthday: '2022-02-02',
        // });

        // axios post 登入請求
        try {
            // console.log('hi');
            option.withCredentials = true;
            const res = await axios.post(API_POST_AUTH_LOGIN, option);
            // console.log('hey');

            // console.log('res :>> ', res);
            // if (res.data.statusCode & 1) {
            //     throw new Error(STATUS_MSG[res.data.statusCode]);
            // }
            if (res.data.user) {
                setIsLogin(true);
                setUser(res.data.user);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // 登出
    function clear() {
        setIsLogin(false);
        setUser({});
    }

    // 註冊

    // 忘記密碼
    async function forget(option = shared.option) {
        try {
            let response = await axios.post(
                API_POST_AUTH_FORGOT_PASSWORD,
                option
            );
            // console.log('response.data :>> ', response.data);
            if (!response) {
                throw new Error(STATUS_MSG[response.data.statusCode]);
            }
            const allowed = response.data.allowResetPassword;
            if (allowed) {
                setAllowReset(allowed);
            }
        } catch (err) {
            console.error(err);
        }
    }

    // 生命週期
    useEffect(function () {
        // setIsLogin(true);
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
            // console.log('isLogin :>> ', isLogin);
            // console.log('user :>> ', user);
        },
        [isLogin, user]
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
