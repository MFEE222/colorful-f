import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuthContext } from '../../utils/context/AuthContext';
import { routes } from '../../utils/routes';

// Q: React 重新整理狀態會消失，那上一頁會嗎？
// A: 經測試，上一頁下一頁不會使狀態消失 (應該吧)

function Signin(props) {
    const auth = useAuthContext();
    // console.log('auth :>> ', auth);
    const [user, setUser] = useState({
        account: '',
        password: '',
    });
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(function(){
        const r = JSON.parse(localStorage.getItem('rememberMe'));

        if (r)
            setUser(r);
    },[]);

    function handleChange(e) {
        const l = { ...user };
        l[e.target.name] = e.target.value;
        setUser(l);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        auth.login(user);

        if (rememberMe) {
            localStorage.setItem('rememberMe', JSON.stringify(user));
        }
    }


    function handleRememberMe(e) {
        console.log('e.target.checked :>> ', e.target.checked);
        setRememberMe(!rememberMe);
    }


    // 用來測試輸入帳號密碼是否會確實存入狀態
    // useEffect(
    //     function () {
    //         console.log('user.account :>> ', user.account);
    //         console.log('user.password :>> ', user.password);
    //     },
    //     [user]
    // );

    // 記住我功能
    // useEffect(
    //     function () {
    //         // 如果有記住我在直接設定好帳號密碼
    //         setUser({
    //             account:
    //         });
    //     },
    //     [監控取用 webstorage 的狀態]
    // );
    // if (isLogin) {
    //     // 轉頁效果
    //     return <Redirect to="/" />;
    // }

    // 如果是登入狀態就跳轉回首頁
    // <button className="btn btn-danger" onClick={auth.clear}>
    //     登出
    // </button>

    // 測試
    // useEffect(function () {
    //     console.log('auth.current :>> ', auth.current);
    // }, [auth]);

    // useEffect(function () {
    //     console.log('user :>> ', user);
    // }, [user]);


    return auth.current ? (
        <Redirect to={routes.home} />
    ) : (
        <div className="signin-main">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-auto ">
                        <div className="form-box">
                            <form className="signin-form">
                                <h4 className="box-title mt-2">
                                    SIGNIN TO YOUR COLORFUL
                                </h4>
                                <div className="form-floating mt-4 ui icon input">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="account"
                                        placeholder="Email address"
                                        value={user.account}
                                        onChange={handleChange}
                                        required
                                    />
                                    <i
                                        aria-hidden="true"
                                        className="search icon"
                                    ></i>
                                    <label htmlFor="email">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={user.password}
                                        onChange={handleChange}
                                        pattern="[a-zA-Z0-9]{7,}"
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="forgot mt-3">
                                    <Link to={routes.forgot} className="l-link">
                                        forgot password ?
                                    </Link>
                                </div>
                                <div className="checkbox">
                                    <div id="check-box-slide">
                                        <input
                                            type="checkbox"
                                            name="check"
                                            id="checkbox"
                                            checked={rememberMe}
                                            onChange={handleRememberMe}
                                        />
                                        <label htmlFor="checkbox"></label>
                                        <p className="remember-me">記住我</p>
                                   
                                    </div>
                                </div>

                                {/* <div className="l-icon mt-4 mb-3">
                                    <Link
                                        to={routes.home}
                                        className="l-icon-link"
                                    >
                                        <i className="fab fa-facebook-f fa-fw"></i>
                                    </Link>
                                    <Link
                                        to={routes.home}
                                        className="l-icon-link"
                                    >
                                        <i className="fab fa-google fa-fw"></i>
                                    </Link>
                                </div> */}
                                <div className="form-btn mt-5">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <div>
                                    <p className="signup">
                                        Don't you no account ?<span> </span>
                                        <Link
                                            to={routes.signup}
                                            className="l-link"
                                        >
                                            Sign up
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;

// return (
//     <div>
//         <h1>Login Status: {auth.current && auth.current}</h1>
//         <h1>User ID: {auth.user.id && auth.user.id}</h1>
//         <h1>User Email: {auth.user.email && auth.user.email}</h1>
//         <div>
//             <label htmlFor="signin-account">Account</label>
//         </div>
//         <div>
//             <input
//                 type="text"
//                 name="account"
//                 value={user.account}
//                 onChange={handleChange}
//                 id="signin-account"
//             />
//         </div>
//         <div>
//             <label htmlFor="signin-password">Password</label>
//         </div>
//         <div>
//             <input
//                 type="text"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//             />
//         </div>

//         <div>
//             <button
//                 className="btn btn-danger"
//                 type="submit"
//                 onClick={handleSubmit}
//             >
//                 登入
//             </button>
//         </div>
//     </div>
// );
// const match = useRouteMatch();
// console.log('match :>> ', match);
// return <SigninContent />;
