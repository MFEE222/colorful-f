import React from 'react';

function SigninContent(props) {
    return (
        <div className="signin-main">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-auto ">
                        <div className="form-box">
                            <form className="signin-form" action="">
                                <h4 className="box-title">
                                    SIGNIN TO YOUR COLORFUL
                                </h4>
                                <div className="form-floating">
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
                                <div className="forgot">
                                    <a href="" className="l-link">
                                        forgot password ?
                                    </a>
                                </div>
                                <div className="l-icon">
                                    <a href="" className="l-icon-link">
                                        <i className="fab fa-facebook-f fa-fw"></i>
                                    </a>
                                    <a href="" className="l-icon-link">
                                        <i className="fab fa-google fa-fw"></i>
                                    </a>
                                </div>
                                <div className="form-btn">
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
