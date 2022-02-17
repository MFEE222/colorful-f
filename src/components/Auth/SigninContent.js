import React from 'react';
import { Link } from 'react-router-dom';


function SigninContent(props) {
    return (
        <div className="signin-main">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-auto ">
                        <div className="form-box">
                            <form className="signin-form" action="">
                                <h4 className="box-title mt-2">
                                    SIGNIN TO YOUR COLORFUL
                                </h4>
                                <div className="form-floating mt-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Email address"
                                    />
                                    <label htmlFor="floatingInput">
                                        Email address
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPassword">
                                        Password
                                    </label>
                                </div>
                                <div className="forgot mt-3">
                                    <Link to="/" className="l-link">
                                        forgot password ?
                                    </Link>
                                </div>
                                <div className="l-icon mt-5 mb-3">
                                    <Link to="/" className="l-icon-link">
                                        <i className="fab fa-facebook-f fa-fw"></i>
                                    </Link>
                                    <Link to="/" className="l-icon-link">
                                        <i className="fab fa-google fa-fw"></i>
                                    </Link>
                                </div>
                                <div className="form-btn mt-5">
                                    <button type="submit">Sign in</button>
                                </div>
                                <div>
                                    <p className="signup">
                                        Don't have account?
                                        <Link to="/" className="l-link">
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

export default SigninContent;
