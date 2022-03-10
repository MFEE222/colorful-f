import React, { useState, useEffect } from 'react';
// import { Redirect, useRouteMatch } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    API_POST_AUTH_LOGIN,
    API_POST_AUTH_SIGNUP,
    API_POST_AUTH_FORGOT_PASSWORD,
    API_POST_AUTH_RESET_PASSWORD,
} from '../config';
import { STATUS_MSG } from '../others/status';

//圖
import login from '../../images/film001.jpg';

// 通用元件
import { routes } from '../routes';

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
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({ id: 1 });
    const [allowReset, setAllowReset] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

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
        setShowLoginModal,
        showLoginModal,
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
            {/* {props.children} */}
            <LoginModal shared={shared} onHide={() => setShowLoginModal(false)}>
                {props.children}
            </LoginModal>
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

// 內部元件
function LoginModal(props) {
    const { showLoginModal, setShowLoginModal } = props.shared;
    // console.log('props.shared :>> ', props.shared);
    const [user, setUser] = useState({ account: '', password: '' });

    function handleChange(e) {
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.shared.login(user);
    }

    const temp = (
        <div>
            <div className="d-flex align-content-center mt-2">
                <label htmlFor="email" className="col-3 labal">
                    帳號
                </label>
                <input
                    className="col mb-2"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
            </div>
            <div className="d-flex align-content-center mt-2">
                <label htmlFor="password" className="col-3 labal">
                    密碼
                </label>
                <input
                    className="col mb-2"
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
            </div>
            {/* <button type="submit" onClick={handleSubmit} className="row">
                send
            </button> */}
        </div>
    );
    return showLoginModal ? (
        <>
            <div
                className="auth-modal"
                onClick={function (e) {
                    setShowLoginModal(false);
                }}
            >
                <div
                    className="box row"
                    onClick={function (e) {
                        e.stopPropagation();
                    }}
                >
                    <div className="col-12 col-md-9 modal-left">
                        <div className="header d-flex my-3 align-content-center justify-content-center">
                            <div className="text-center">您有會員嗎？</div>
                        </div>
                        <div className="border-top w-100 my-3"></div>
                        <div className="row d-flex justify-content-center  gx-5 align-items-stretch mt-5">
                            <div className="col-12">{temp}</div>
                            <button
                                type="submit"
                                className="col-auto justify-content-end 
                                    align-items-end login"
                                // type="submit"
                                onClick={handleSubmit}
                            >
                                <p className="m-0">登入</p>
                            </button>
                            <div className="col-12">
                                <div className="d-flex justify-content-center align-items-center">
                                    <Link
                                        className="signup mt-2"
                                        onClick={function (e) {
                                            setShowLoginModal(false);
                                        }}
                                        to={routes.signup}
                                    >
                                        前往註冊
                                        <i className="ps-2 fas fa-long-arrow-alt-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-2">
                                擁有會員能享有更多專屬功能
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-3 modal-right justify-content-end">
                        <img className="right-pic" src={login} alt="" />
                    </div>
                </div>
            </div>
            {props.children}
        </>
    ) : (
        // <div>
        //     {/* 你這個要用 position: absolute */}
        //     <div
        //         style={{
        //             backgroundColor: 'rgba(0, 0, 0, 0.2)',
        //             width: '300px',
        //             height: '300px',
        //         }}
        //         className="position-absoulte top-0 left-0 right-0 bottom-0"
        //     >
        //         <h1>請登入</h1>
        //         <h2
        //             onClick={function () {
        //                 setShowLoginModal(false);
        //             }}
        //         >
        //             取消
        //         </h2>
        //     </div>
        //     {props.children}
        // </div>
        <>{props.children}</>
    );
}
