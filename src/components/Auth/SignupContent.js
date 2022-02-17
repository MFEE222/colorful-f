import { useState } from 'react';
import axios from 'axios';
import { API_URL } from "../../utils/others/config";


const SignupContent = () => {
    const [member, setMember] = useState({
        email: 'abc123456@gmail.com',
        name: '123456',
        password: '1234',
        confirmPassword: '1234',
    });

    function handleChange(e) {
        setMember({ ...member, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let response = await axios.post(`${API_URL}/auth/SignupContent'`,
            member
        );
        console.log(response.data);
    }

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
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={member.name}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingName">Name</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email address"
                                        value={member.email}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingInput">
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
                                        value={member.password}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingPassword">
                                        Password
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="confirmpassword"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Password"
                                        value={member.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingPassword">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="form-btn">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Sign in
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

export default SignupContent;
