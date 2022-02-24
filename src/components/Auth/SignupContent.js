import React from 'react';

function SignupContent(props) {
    return (
        <div className="signup-main">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-auto ">
                        <div className="form-box">
                            <form className="signin-form" action="">
                                <h4 className="box-title">SIGN UP</h4>
                                <div className="form-floating">
                                    <input
                                        type="name"
                                        className="form-control"
                                        id="floatingName"
                                        placeholder="Name"
                                    />
                                    <label htmlFor="floatingName">Name</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput-signup"
                                        placeholder="Email address"
                                    />
                                    <label htmlFor="floatingInput-signup">
                                        Email address
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword-signup"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPassword-signup">
                                        Password
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="confirmpassword"
                                        className="form-control"
                                        id="floatingConfirmPassword-signup"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingConfirmPassword-signup">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="form-btn">
                                    <button type="submit">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupContent;
