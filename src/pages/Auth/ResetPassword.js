// standard library
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
// internal library
import { useAuth, useResetPassword } from 'contexts/AuthContext';
import { useLoading } from 'contexts/Loading';
import { routes } from 'utils/routes';
import './ResetPassword.scss';

const ResetPassword = (props) => {
    // context
    const { Loading } = useLoading();
    // state
    const [query, setQuery] = useState({
        password: '',
        confirmPassword: '',
        submit: false,
    });

    const auth = useAuth();
    const data = useResetPassword(query, setQuery);

    // event
    function eventInput(e) {
        const newInput = { ...query };
        newInput[e.target.name] = e.target.value;
        setQuery(newInput);
    }

    function eventSubmit(e) {
        e.preventDefault();
        setQuery({ ...query, submit: true });
    }

    // render
    const render = () => {
        // auth
        if (auth.loading) {
            return <Loading />;
        }

        if (!auth.result) {
            return <Navigate to={routes.auth.signin} />;
        }
        // resest
        if (data.loading) {
            return <Loading />;
        }

        if (data.error) {
        }

        if (data.result) {
            return <Navigate to={routes.member.self} />;
        }

        return (
            <div className="reset-password">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-start">
                        <div className="col-12 col-sm-auto ">
                            <div className="form-box">
                                <form className="signin-form" action="">
                                    <h4 className="box-title">
                                        Reset Password
                                    </h4>
                                    <div className="form-floating">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            placeholder="password"
                                            value={query.password}
                                            onChange={eventInput}
                                            pattern="[a-zA-Z0-9]{7,}"
                                        />
                                        <label htmlFor="email-address">
                                            New Password
                                        </label>
                                    </div>
                                    <div className="form-floating">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            placeholder="confirmPassword"
                                            value={query.confirmPassword}
                                            onChange={eventInput}
                                            pattern="[a-zA-Z0-9]{7,}"
                                        />
                                        <label htmlFor="password-hint">
                                            Confirm Password
                                        </label>
                                    </div>
                                    {/* <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="passwordHint"
                                        name="passwordHint"
                                        placeholder="hint"
                                        value={member.passwordHint}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="passwordHint">
                                        Password Hint
                                    </label>
                                </div> */}
                                    <div className="form-btn">
                                        <button
                                            type="submit"
                                            onClick={eventSubmit}
                                        >
                                            Submit
                                        </button>
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
};

export default ResetPassword;
