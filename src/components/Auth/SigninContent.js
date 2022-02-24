import React from 'react';

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
                                        id="floatingInput-signin"
                                        placeholder="Email address"
                                    />
                                    <label htmlFor="floatingInput-signin">
                                        Email address
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword-signin"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPassword-signin">
                                        Password
                                    </label>
                                </div>
                                <div className="forgot mt-3">
                                    <a href="" className="l-link">
                                        forgot password ?
                                    </a>
                                </div>
                                <div className="l-icon mt-5 mb-3">
                                    <a href="" className="l-icon-link">
                                        <i className="fab fa-facebook-f fa-fw"></i>
                                    </a>
                                    <a href="" className="l-icon-link">
                                        <i className="fab fa-google fa-fw"></i>
                                    </a>
                                </div>
                                <div className="form-btn mt-5">
                                    <button type="submit">Sign in</button>
                                </div>
                                <div>
                                    <p className="signup">
                                        Don't have account?
                                        <a href="" className="l-link">
                                            Sign up
                                        </a>
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
