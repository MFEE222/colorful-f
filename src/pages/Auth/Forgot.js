// standard
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// internal utility
import { routes } from '../../utils/routes';
import Routes from '../../utils/ts-routes';
import { useForgotPassword } from '../../context/AuthContext';
import { useLoadingContext } from '../../context/LoadingContext';

// main component
function Forgot(props) {
    // context
    const { UILoading } = useLoadingContext();
    // state
    const [query, setQuery] = useState({
        email: '',
        hint: '',
        submit: false,
    });

    const data = useForgotPassword(query, setQuery);

    // event handler
    function eventInput(e) {
        const newQuery = { ...query };
        newQuery[e.target.name] = e.target.value;
        setQuery(newQuery);
    }

    function eventSubmit(e) {
        e.preventDefault();
        setQuery({ ...query, submit: true });
    }

    // render
    const render = () => {
        if (data.loading) {
            return <UILoading />;
        }

        if (data.error !== null) {
        }

        if (data.result) {
            return <Redirect to={Routes.AUTH.SIGNIN} />;
        }

        return (
            <div className="signin-forgot-main">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-start">
                        <div className="col-12 col-sm-auto ">
                            <div className="form-box">
                                <form className="signin-form" action="">
                                    <h4 className="box-title">
                                        Fotgot Password ?
                                    </h4>
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
                                        <label htmlFor="email">
                                            Email address
                                        </label>
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

    return <>{render()}</>;
}

export default Forgot;
