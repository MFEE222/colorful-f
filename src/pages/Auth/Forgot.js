import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_POST_AUTH_FORGOT_PASSWORD } from '../../utils/config';
import { STATUS_MSG } from '../../utils/others/status';

// 忘記密碼頁 -> 輸入 email 和 密碼提示 -> 後端驗證 -> 驗證成功，提供重設密碼頁 -> 輸入新密碼和確認密碼，提交後端 -> 驗證成功，修改資料庫密碼
function Forgot(props) {
    // {
    //     email,
    //     hint,
    // }
    const [forgot, setForgot] = useState({});
    const [auth, setAuth] = useState(false);

    function handleChange(e) {
        const f = { ...forgot };
        f[e.target.name] = e.target.value;
        setForgot(f);
    }

    async function handleSubmit(e) {
        try {
            const res = await axios.post(API_POST_AUTH_FORGOT_PASSWORD, forgot);

            // 3    -> 十進位
            // 0,  1,     2,     3,     4,     5,     6,      7, 8, 9, 10
            //      -> 二進位
            // 0,  1,     10,    11,    100,   101,   110,

            // bitwise 位元運算 AND

            //   01001
            //   11101
            // & ------
            //   01001

            //   010101010101
            //   000000000001
            // & ------------
            //   000000000001

            if (res.data.statusCode & 1) {
                throw new Error(STATUS_MSG[res.data.statusCode]);
            }

            setAuth(true);
        } catch (err) {
            console.log('err :>> ', err);
        }
    }

    async function submitNewPassword(e) {}

    useEffect(
        function () {
            console.log('forgot.email :>> ', forgot.email);
            console.log('forgot.hint :>> ', forgot.hint);
        },
        [forgot]
    );

    // useEffect(function () {

    // }, [auth]);

    return (
        <div className="signin-forgot-main">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-auto ">
                        <div className="form-box">
                            <form className="signin-form" action="">
                                <h4 className="box-title">Forgot Password ?</h4>
                                <p className="f-subtitle">
                                    Enter your email address
                                </p>
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email-address"
                                        placeholder="Email address"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="email-address">
                                        Email address
                                    </label>
                                </div>
                                <p className="f-subtitle">
                                    Enter your password hint keyword
                                </p>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="password-hint"
                                        placeholder="Password Hint"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="password-hint">
                                        Password Hint
                                    </label>
                                </div>
                                <div className="form-btn">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forgot;
