// standard
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// internal utility
import { routes } from '../../utils/routes';

// main component
function ForgotPassword(props) {
    // context
    const { requestForgotPassword } = props.auth;
    const { load } = props;

    // state
    const [query, setQuery] = useState({
        email: '',
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
        const response = await requestForgotPassword(query.email, query.hint);
        load.end();

        setQuery({ ...query, submit: false, result: response });
    }, [query.submit]);

    if (!load.current && query.result) {
        return <Redirect to={routes.signin} />;
    }

    // render
    return load.current ? (
        <load.UILoading />
    ) : (
        <div className="signin-forgot-main">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-auto ">
                        <div className="form-box">
                            <form className="signin-form" action="">
                                <h4 className="box-title">Fotgot Password ?</h4>
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
                                        type="text"
                                        className="form-control"
                                        id="hint"
                                        name="hint"
                                        placeholder="hint"
                                        value={query.hint}
                                        onChange={eventInput}
                                        required
                                    />
                                    <label htmlFor="password-hint">
                                        Password Hint
                                    </label>
                                </div>
                                <div className="form-btn">
                                    <button type="submit" onClick={eventSubmit}>
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

    // event handler
    function eventInput(e) {
        const newQuery = { ...query };
        newQuery[e.target.name] = e.target.value;
        setQuery(newQuery);
    }

    function eventSubmit(e) {
        setQuery({ ...query, submit: true });
    }
}

export default ForgotPassword;
