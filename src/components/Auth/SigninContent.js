import { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { API_URL } from '../../utils/others/config';
import { ERR_MSG } from '../../utils/others/errors';

const SigninContent = () => {
    // const [loginMember, setLoginMember] = useState({
    //     email: "",
    //     password: "",
    // });
    const [loginMember, setLoginMember] = useState({
        email: '',
        password: '',
    });
    const [isLogin, setIsLogin] = useState(false);

    function handleChange(e) {
        setLoginMember({ ...loginMember, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let response = await axios.post(
                `${API_URL}/auth/login`,
                loginMember,
                { withCredentials: true }
            );
            console.log(response.data);

            setLoginMember(response.data.data);
            setIsLogin(true);
        } catch (e) {
            console.log(123);
            // console.error("error", e.response.data);
            console.error('登入', ERR_MSG[e.response.data.code]);
        }
    }
    if (isLogin) {
        // 轉頁效果
        return <Redirect to="/" />;
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
                                <div className="form-floating mt-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email address"
                                        value={loginMember.email}
                                        onChange={handleChange}
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
                                        value={loginMember.password}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="password">Password</label>
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
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <div>
                                    <p className="signup">
                                        Don't have account?
                                        <Link to="/signup" className="l-link">
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

export default SigninContent;
