// standard module
import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

// internal global variable
import { GOOGLE_CLIENT_ID, POST_AUTH_GOOGLE_SIGNIN } from 'utils/config';
import { routes } from 'utils/routes';

import { useSignIn, useGSIScript } from 'contexts/AuthContext';
import { useLoadingContext } from 'contexts/LoadingContext';
import './Signin.scss';
// TODO: improve CDN import with webpack

function SignIn(props) {
    // context
    const { Loading } = useLoadingContext();
    // const { toast } = useToastContext();

    // state
    const [query, setQuery] = useState({
        email: '',
        password: '',
        submit: false,
    });

    const [googleQuery, setGoogleQuery] = useState({
        button: '#google_signin',
    });

    // FIXME: use ui submit state to distinguish google sign in or regular sign in
    const regular = useSignIn(query, setQuery);
    const gsi = useGSIScript(googleQuery);

    const render = () => {
        // data
        if (regular.loading || gsi.loading) {
            return <Loading />;
        }

        if (regular.error || gsi.error) {
        }

        if (regular.accessToken !== '' || gsi.accessToken !== '') {
            return <Navigate to={routes.home} />;
        }

        return (
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
                                        <label htmlFor="email">
                                            Email address
                                        </label>
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
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                    </div>
                                    <div className="forgot mt-3">
                                        <Link
                                            to={routes.auth.forgot}
                                            className="l-link"
                                        >
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
                                        <button
                                            type="submit"
                                            onClick={onSubmit}
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                    {/* google sign in */}
                                    <div className="mt-3 d-flex justify-content-center">
                                        <div id="google_signin"></div>
                                    </div>
                                    <div>
                                        <p className="signup">
                                            Don't you no account ?<span> </span>
                                            <Link
                                                to={routes.auth.signup}
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
    };

    // render
    return <>{render()}</>;

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
