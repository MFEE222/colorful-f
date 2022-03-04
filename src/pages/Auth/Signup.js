import React, { useState } from 'react';
import axios from 'axios';

import { API_POST_AUTH_SIGNUP } from '../../utils/config';
import { STATUS_MSG } from '../../utils/others/status';

const Signup = (props) => {
    // member {
    //     email: '',
    //     name: '',
    //     password: '',
    //     confirmPassword: '',
    // }
    // 狀態
    const [member, setMember] = useState({});

    // 函式
    function handleChange(e) {
        setMember({ ...member, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let response = await axios.post(API_POST_AUTH_SIGNUP, member);
            // console.log(response.data);
            if (!response) {
                throw new Error(STATUS_MSG[response.data.statusCode]);
            }
        } catch (err) {
            // console.error("error", e.response.data);
            // console.error('註冊', ERR_MSG[e.response.data.code]);
            console.error(err);
        }
    }

    // 渲染
    return (
        <div className="signup-main">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-auto ">
                        <div className="form-box">
                            <form className="signin-form" action="">
                                <h4 className="box-title">註冊</h4>
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
                                    <label htmlFor="email">Email address</label>
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
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Password"
                                        value={member.confirmPassword}
                                        onChange={handleChange}
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
                                        name="passwordHint"
                                        placeholder="hint"
                                        value={member.passwordHint}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="passwordHint">
                                        Password Hint
                                    </label>
                                </div>
                                <div className="form-btn">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        註冊
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

export default Signup;
