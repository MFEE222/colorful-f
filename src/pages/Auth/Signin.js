// standard module
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

// internal global variable
import { routes } from '../../utils/routes';

// TODO: 增加新註冊未驗證 email 提示（增加推播元件）

function SignIn(props) {
    // context
    const { load } = props;
    // event handler
    const { requestSignIn, requestAccessToken, isAllowed, isDenied } =
        props.auth;

    const [query, setQuery] = useState({
        email: '',
        password: '',
        submit: false,
    });

    useEffect(async () => {
        if (!query.submit) {
            return;
        }
        load.start();
        const result = await requestSignIn(query.email, query.password);
        load.end();

        setQuery({ ...query, submit: false });
    }, [query.submit]);

    // loading 的狀態判斷 :>> 防止頁面跳轉太快（保證插入最小時長的跳轉畫面）
    if (!load.current && isAllowed()) {
        return <Redirect to={routes.home} />;
    }

    // render
    return load.current ? (
        <load.UILoading />
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
                                        name="email"
                                        placeholder="Email address"
                                        value={query.email}
                                        onChange={onChange}
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
                                        value={query.password}
                                        onChange={onChange}
                                        pattern="[a-zA-Z0-9]{7,}"
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="forgot mt-3">
                                    <Link to={routes.forgot} className="l-link">
                                        forgot password ?
                                    </Link>
                                </div>
                                {/* <div className="checkbox">
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
                                </div> */}

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
                                    <button type="submit" onClick={onSubmit}>
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

    // event handle
    function onChange(e) {
        const newQuery = { ...query };
        newQuery[e.target.name] = e.target.value;
        setQuery(newQuery);
    }

    function onSubmit(e) {
        e.preventDefault();
        setQuery({ ...query, submit: true });
    }
}

export default SignIn;
