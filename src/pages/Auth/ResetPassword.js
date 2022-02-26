import React, { useState } from 'react';
import axios from 'axios';
import { API_POST_AUTH_SIGNUP } from '../../utils/config';
import { STATUS_MSG } from '../../utils/others/status';

const ResetPassword = (props) => {
    // member {
    //     password: '',
    //     confirmPassword: '',
    //     passwordHint: '',
    // }

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

    return (
        <div className="reset-password">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-auto ">
                        <div className="form-box">
                            <form className="signin-form" action="">
                                <h4 className="box-title">Reset Password</h4>
                                <p className="f-subtitle">New Password</p>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="password"
                                        value={member.passeord}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="email-address">
                                        New Password
                                    </label>
                                </div>
                                <p className="f-subtitle">Confirm Password</p>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="confirmPassword"
                                        value={member.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="password-hint">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="form-btn">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
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

export default ResetPassword;
