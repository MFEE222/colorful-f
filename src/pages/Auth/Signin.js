import axios from 'axios';
import React, { useEffect } from 'react';

import SigninContent from '../../components/Auth/SigninContent';

import { useAuthContext } from '../../components/context/AuthContext';

import { API_POST_AUTH_LOGIN } from '../../utils/config';
// import {
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams,
// } from 'react-router-dom';
function Signin(props) {
    const auth = useAuthContext();
    // const [account, setAccount] = useState('');
    // const [password, setPassword] = useState('');
    const [login, setLogin] = useState({
        account: '',
        password: '',
    });

    function handleChange(e) {
        const l = { ...login };
        l[e.target.name] = e.target.value;
        setLogin(l);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        auth.reset(account, password);
    }

    useEffect(
        function () {
            console.log('login.account :>> ', login.account);
            console.log('login.password :>> ', login.password);
        },
        [login]
    );

    // 記住我功能
    // useEffect(
    //     function () {
    //         // 如果有記住我在直接設定好帳號密碼
    //         setLogin({
    //             account:
    //         });
    //     },
    //     [監控取用 webstorage 的狀態]
    // );

    return (
        <div>
            <h1>Login Status: {auth.current}</h1>
            <h1>User ID: {auth.user.id}</h1>
            <h1>User Email: {auth.user.email}</h1>

            <input
                type="text"
                name="account"
                value={login.account}
                onChange={handleChange}
            />
            <input
                type="text"
                name="password"
                value={login.password}
                onChange={handleChange}
            />

            <button
                className="btn btn-danger"
                type="submit"
                onClick={handleSubmit}
            >
                登入
            </button>
        </div>
    );
    // const match = useRouteMatch();
    // console.log('match :>> ', match);
    // return <SigninContent />;
}

export default Signin;
