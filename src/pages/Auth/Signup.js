// standard module
import React, { useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// internal global variable
import { routes } from '../../utils/routes';

// TODO: 新增註冊成功 推播訊息

function SignUp(props) {
    // context
    const { requestSignUp } = props.auth;
    const { load } = props;
    // state
    const [query, setQuery] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        hint: '',
        submit: false,
        result: false,
    });

    // side effect
    useEffect(async () => {
        if (!query.submit) {
            return;
        }
        load.start();
        const result = await requestSignUp(
            query.name,
            query.email,
            query.password,
            query.confirmPassword,
            query.hint
        );
        load.end();

        setQuery({ ...query, submit: false, result: result });
    }, [query.submit]);

    // redirect
    if (!load.current && query.result) {
        return <Redirect to={routes.signin} />;
    }

    // render
    return load.current ? (
        <load.UILoading />
    ) : (
        <div className="signup-main">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-auto ">
                        <div className="form-box">
                            <form className="signin-form" action="">
                                <h4 className="box-title">Sign up</h4>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={query.name}
                                        onChange={eventInput}
                                        required
                                    />
                                    <label htmlFor="floatingName">Name</label>
                                </div>

                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email address"
                                        value={query.email}
                                        onChange={eventInput}
                                        required
                                    />
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
                                        onChange={eventInput}
                                        pattern="[a-zA-Z0-9]{7,}"
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Password"
                                        value={query.confirmPassword}
                                        onChange={eventInput}
                                        pattern="[a-zA-Z0-9]{7,}"
                                    />
                                    <label htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="passwordHint"
                                        name="hint"
                                        placeholder="hint"
                                        value={query.hint}
                                        onChange={eventInput}
                                        required
                                    />
                                    <label htmlFor="passwordHint">
                                        Password Hint
                                    </label>
                                </div>
                                <div className="form-btn">
                                    <button type="submit" onClick={eventSubmit}>
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function eventInput(e) {
        const newQuery = { ...query };
        newQuery[e.target.name] = e.target.value;
        setQuery(newQuery);
    }

    function eventSubmit(e) {
        e.preventDefault();
        setQuery({ ...query, submit: true });
    }
}

export default SignUp;
