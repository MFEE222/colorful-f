import { Link } from 'react-router-dom';
import React, { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
// FIXME: remove
import {
    API_POST_AUTH_LOGIN,
    API_POST_AUTH_SIGNUP,
    API_POST_AUTH_FORGOT_PASSWORD,
    API_POST_AUTH_RESET_PASSWORD,
} from '../utils/config';
// FIXME: remove
import { STATUS_MSG } from '../utils/others/status';

// image
import login from '../images/film001.jpg';

// API
import {
    POST_AUTH_SIGNIN,
    POST_AUTH_SIGNUP,
    DELETE_AUTH_SIGNOUT,
    POST_AUTH_FORGOT_PASSWORD,
    GET_AUTH,
    GET_AUTH_TOKEN,
} from '../utils/config';

// routes
import { routes } from '../utils/routes';

// Context
const AuthContext = React.createContext('wrap not correct');

// TODO: /api/auth/
// TODO: /api/auth/token
// TODO: /api/auth/signin
// TODO: /api/auth/signup
// TODO: /api/auth/forgot

// Provider
export function AuthProvider(props) {
    // state
    function reducer(state, action) {
        switch (action) {
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        accessToken: '',
        userEmail: '',
        userName: '',
        userBirthday: '',
        userGender: '',
        isSignin: false,
    });

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({ id: 1 });
    const [allowReset, setAllowReset] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    // share
    const share = {
        state,
        dispatch,
    };

    // render
    return (
        <AuthContext.Provider value={shared}>
            {/* {props.children} */}
            <LoginModal shared={shared} onHide={() => setShowLoginModal(false)}>
                {props.children}
            </LoginModal>
        </AuthContext.Provider>
    );
}

// Consumer (old version)
// export function AuthConsumer(props) {
//     return <AuthContext.Consumer>{props.children}</AuthContext.Consumer>;
// }

// Consumer
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

// API to backend
export async function requestAuth(access_token) {
    try {
        const response = await axios({
            method: 'get',
            url: GET_AUTH,
            headers: { Authorization: 'Bearer ' + access_token },
        });

        console.log('response :>> ', response);

        if (response.status != 200) {
            throw new Error();
        }

        return true;
    } catch (err) {
        console.log('err :>>', err);
        return false;
    }
}

export async function requestSignIn(account, password) {
    try {
        const response = await axios({
            method: 'post',
            url: POST_AUTH_SIGNIN,
            data: {
                account: account,
                password: password,
            },
        });

        const { access_token } = response.data;

        if (response.status != 200 || !access_token) {
            throw new Error();
        }

        return access_token;
    } catch (err) {
        console.log('err :>>', err);
        return null;
    }
}

export async function requestSignOut() {
    try {
        const response = await axios({
            method: 'delete',
            url: DELETE_AUTH_SIGNOUT,
        });

        if (response.status != 204) {
            throw new Error();
        }

        return true;
    } catch (err) {
        console.log('err :>>', err);
        return false;
    }
}

export async function requestSignUp(
    name,
    account,
    password,
    confirm_password,
    hint
) {
    try {
        const response = await axios({
            method: 'post',
            url: POST_AUTH_SIGNUP,
            data: {
                name: name,
                account: account,
                password: password,
                confirm_password: confirm_password,
                hint: hint,
            },
        });

        console.log('response :>> ', response);
        if (response.status != 200) {
            throw new Error();
        }

        // if success, meaning email has sent to user
        return true;
    } catch (err) {
        console.log('err :>>', err);

        return false;
    }
}

export async function requestForgotPassword(account, hint) {
    try {
        const response = await axios({
            method: 'post',
            url: POST_AUTH_FORGOT_PASSWORD,
            data: {
                email: account,
                hint: hint,
            },
        });

        if (response.status != 200) {
            throw new Error();
        }

        // 'true' means reset password email has sent.
        return true;
    } catch (err) {
        console.log('err :>>', err);
        return false;
    }
}

export async function requsetAccessToken() {
    // attention: don't use beofre sign in (not yet get refresh token)
    try {
        const response = await axios({
            method: 'get',
            url: GET_AUTH_TOKEN,
        });

        if (response.status != 200) {
            throw new Error();
        }

        const { access_token } = response.data;

        return access_token;
    } catch (err) {
        console.log('err :>>', err);
        return null;
    }
}
