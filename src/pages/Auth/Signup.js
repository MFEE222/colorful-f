import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { API_POST_AUTH_SIGNUP } from '../../utils/config';
import { STATUS_MSG } from '../../utils/others/status';
import { routes } from '../../utils/routes';
import { useAuthContext } from '../../utils/context/AuthContext';
import emailjs, { init } from '@emailjs/browser';
init(process.env.REACT_APP_EMAILJS_USER_ID);

const Signup = (props) => {
    // member {
    //     email: '',
    //     name: '',
    //     password: '',
    //     confirmPassword: '',
    //     passwordHint: '',
    // }
    // 狀態
    const formRef = useRef();
    const auth = useAuthContext();
    const [register, setRegister] = useState(false);

    const [member, setMember] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        passwordHint: '',
    });

    // console.log('Hi emailjs');
    const sendEmail = () => {
        // e.preventDefault();
        console.log(123);
        console.log('formRef :>> ', formRef);
    };

    const message = '歡迎您加入colorful！';

    // 函式
    function handleChange(e) {
        setMember({ ...member, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(111);
        try {
            // emailjs
            // .sendForm(
            //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
            //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            //     formRef.current
            // )
            // .then(
            //     (result) => {
            //         console.log('result :>> ', result);
            //         console.log('formRef :>> ', formRef);
            //         console.log(result.text);
            //     },
            //     (error) => {
            //         // console.log('error :>> ', error);
            //         console.log(error.text);
            //     }
            // );
            let response = await axios.post(API_POST_AUTH_SIGNUP, member);
            console.log(response.data);
            if (!response) {
                throw new Error(STATUS_MSG[response.data.statusCode]);
            }
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current
            );
            console.log('formRef :>> ', formRef);
            setRegister(true);
        } catch (err) {
            // console.error("error", e.response.data);
            // console.error('註冊', ERR_MSG[e.response.data.code]);
            console.error(err);
        }
    }

    useEffect(function () {
        console.log('formRef :>> ', formRef);
    }, []);

    // 渲染
    // return register ? (
    //     <Redirect to={routes.signin} />
    // ) : (
    //     <div>
    //         <form ref={formRef} onSubmit={handleSubmit}>
    //             <label>Name</label>
    //             <input type="text" name="name" onChange={handleChange} />
    //             <label>Email</label>
    //             <input type="email" name="email" />
    //             <label>Message</label>
    //             <textarea name="message" />
    //             <input type="submit" value="Send" />
    //         </form>
    //     </div>
    // );
    return register ? (
        <Redirect to={routes.signin} />
    ) : (
        <div className="signup-main">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-12 col-sm-auto ">
                        <div className="form-box">
                            <form className="signin-form" action="">
                                <h4 className="box-title">Sign up</h4>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={member.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="floatingName">Name</label>
                                </div>

                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email address"
                                        value={member.email}
                                        onChange={handleChange}
                                        required
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
                                        pattern="[a-zA-Z0-9]{7,}"
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
                                        pattern="[a-zA-Z0-9]{7,}"
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
                                        required
                                    />
                                    <label htmlFor="passwordHint">
                                        Password Hint
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="d-none"
                                        name="message"
                                        defaultValue={message}
                                    ></input>
                                </div>
                                <div className="form-btn">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                            <form
                                className="d-none"
                                ref={formRef}
                                onSubmit={sendEmail}
                            >
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={member.name}
                                />
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={member.email}
                                />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
