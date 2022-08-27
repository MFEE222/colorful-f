import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

// FIXME: Navbar.js 和 Index.js (Member) 側邊欄登出功能修正（登出後跳轉到首頁）
// FIXME: Footer 會跑版蓋住登入方框

// API
import {
    POST_AUTH_SIGNIN,
    POST_AUTH_SIGNUP,
    POST_AUTH_FORGOT_PASSWORD,
    POST_AUTH_RESET_PASSWORD,
    DELETE_AUTH_SIGNOUT,
    GET_AUTH,
    GET_AUTH_TOKEN,
    GET_AUTH_HEALTH,
    POST_AUTH_EDIT_PERSONAL_INFO,
    POST_AUTH_EDIT_EMAIL,
    POST_AUTH_EDIT_AVATAR,
    POST_AUTH_GOOGLE_SIGNIN,
    GOOGLE_CLIENT_ID,
    GOOGLE_SIGNIN_CDN,
} from '../utils/config';

import login from '../images/film001.jpg';

// intern library
import { useScript } from '../hooks/useScript';
import { useToastContext } from './ToastContext';
import { toast } from 'react-toastify';

// Context
const AuthContext = React.createContext('wrap not correct');

// Provider
export function AuthProvider(props) {
    // state
    const [authState, setAuthState] = useState({
        user: {},
        accessToken: '',
    });

    // share
    const share = {
        authState,
        setAuthState,
        user: authState.user,
        accessToken: authState.accessToken,
        isSignIn: authState.accessToken !== '',
    };

    // render
    return (
        <AuthContext.Provider value={share}>
            <AutomaticSignIn>{props.children}</AutomaticSignIn>
        </AuthContext.Provider>
    );
}

// Consumer
export function useAuthContext() {
    return React.useContext(AuthContext);
}

// Automatic Sign In
export function AutomaticSignIn(props) {
    useAccessToken();
    return <>{props.children}</>;
}

// authenticate token for regular, google, ...
export function useAuth() {
    // context
    const { accessToken } = useAuthContext();
    // state
    const [dataState, setDataState] = useState({
        result: false,
        loading: true,
        error: null,
    });

    const handleAuth = useCallback(async () => {
        try {
            const response = await axios({
                method: 'get',
                url: GET_AUTH,
                headers: { Authorization: 'Bearer ' + accessToken },
                withCredentials: true,
            });

            if (response.status != 200) {
                throw new Error();
            }

            setDataState({
                result: true,
                loading: false,
                error: null,
            });
        } catch (err) {
            console.log('err :>>', err);
            setDataState({
                result: false,
                loading: false,
                error: err.message,
            });
        }
    }, [accessToken]);

    useEffect(() => {
        handleAuth();
    }, [accessToken]);

    return {
        ...dataState,
    };
}

// sign in for regular
export function useSignIn({ email, password, submit }, setQuery) {
    // context
    const { authState, setAuthState } = useAuthContext();
    const { toast } = useToastContext();
    // state
    const [dataState, setDataState] = useState({
        user: {},
        accessToken: '',
        loading: false,
        error: null,
    });

    const handleSignIn = useCallback(async () => {
        try {
            // reset
            setDataState({
                user: {},
                accessToken: '',
                loading: true,
                error: null,
            });

            const response = await axios({
                method: 'post',
                url: POST_AUTH_SIGNIN,
                data: {
                    account: email,
                    password: password,
                },
                withCredentials: true,
            });

            // console.log('response :>> ', response);
            if (response.status != 200) {
                throw new Error();
            }
            const { access_token } = response.data;
            const payload = jwt_decode(access_token);

            // local state
            setDataState({
                ...dataState,
                user: payload,
                accessToken: access_token,
                loading: false,
                error: null,
            });

            // global state
            setAuthState({
                ...authState,
                user: payload,
                accessToken: access_token,
            });

            toast(`👍 Sign In Successful! Welcome, ${payload.name}`);

            return true;
        } catch (err) {
            console.log('err :>>', err);
            // local state
            setDataState((prev) => ({
                ...prev,
                loading: false,
                error: err.message,
            }));

            toast('❌ Uncorrect Email or Password!');

            return false;
        }
    }, [submit]);

    useEffect(() => {
        if (!submit) return;
        handleSignIn().then((result) => {
            // redirect page after sign in successful, so only reset submit as error
            if (!result)
                setQuery((prev) => ({
                    ...prev,
                    submit: false,
                }));
        });
    }, [submit]);

    return {
        ...dataState,
    };
}

// sign out for regular, google, ...
export function useSignOut({ submit }, setQuery) {
    // context
    const { user, setAuthState } = useAuthContext();
    const { toast } = useToastContext();
    // state
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    const regularSignOut = async () => {
        try {
            setDataState((prev) => ({ ...dataState, loading: true }));

            const response = await axios({
                method: 'delete',
                url: DELETE_AUTH_SIGNOUT,
                withCredentials: true, // for cookies to backend
            });

            if (response.status != 204) {
                throw new Error();
            }

            // local state
            setDataState({
                result: true,
                loading: false,
                error: null,
            });
            // global state
            setAuthState((prev) => ({ ...prev, user: {}, accessToken: '' }));

            toast('👍 Sign Out Successful!');
        } catch (err) {
            console.log('err :>>', err);

            setDataState((prev) => ({
                result: false,
                loading: false,
                error: err.message,
            }));

            toast('❌ Sign Out Failed. Please Try Again!');
        }

        // reset submit query
        setQuery((prev) => ({
            ...prev,
            submit: false,
        }));
    };

    const googleSignOut = () => {
        setDataState((prev) => ({
            ...prev,
            loading: true,
        }));

        google.accounts.id.revoke(user.email, async (done) => {
            if (done.error) {
                console.log('done.error :>> ', done.error);
                setDataState({
                    result: false,
                    loading: false,
                    error: done.error,
                });

                toast('❌ Sign Out Failed. Please Try Again!');
            }

            try {
                const response = await axios({
                    method: 'delete',
                    url: DELETE_AUTH_SIGNOUT,
                    withCredentials: true,
                });

                if (response.status != 204) {
                    throw new Error();
                }

                setDataState((prev) => ({
                    ...prev,
                    result: true,
                    loading: false,
                    error: null,
                }));

                toast('👍 Sign Out Successful!');
            } catch (err) {
                console.log('err :>>', err);

                setDataState({
                    result: false,
                    loading: false,
                    error: done.error,
                });

                toast('❌ Sign Out Failed. Please Try Again!');
            }
        });

        setQuery((prev) => ({ ...prev, submit: false }));
    };

    const handleSignOut = useCallback(() => {
        switch (user.iss) {
            case process.env.REACT_APP_REGULAR_TOKEN_ISS:
                regularSignOut();
                break;
            case process.env.REACT_APP_GOOGLE_TOKEN_ISS:
                googleSignOut();
                break;
            default:
                break;
        }
    }, [user]);

    useEffect(() => {
        if (!submit) return;
        handleSignOut();
    }, [submit]);

    return {
        ...dataState,
    };
}

// sign up for regular
export function useSignUp(
    { name, email, password, confirmPassword, hint, submit },
    setQuery
) {
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    const handleSignUp = useCallback(async () => {
        try {
            setDataState({ ...dataState, loading: true });

            const response = await axios({
                method: 'post',
                url: POST_AUTH_SIGNUP,
                data: {
                    name: name,
                    account: email,
                    password: password,
                    confirm_password: confirmPassword,
                    hint: hint,
                },
            });

            if (response.status != 200) {
                throw new Error();
            }

            setDataState({
                result: true,
                loading: false,
                error: null,
            });

            toast('👍 Sing Up Successful! Confirmation Eamil Has Been Sent.');

            return true;
        } catch (err) {
            console.log('err :>>', err);
            setDataState({
                result: false,
                loading: false,
                error: err.message,
            });

            toast('❌ Uncorrect Personal Data Format!');

            return false;
        }
    }, [submit]);

    useEffect(() => {
        if (!submit) return;
        handleSignUp().then((result) => {
            if (!result)
                setQuery((prev) => ({
                    ...prev,
                    submit: false,
                }));
        });
    }, [submit]);

    return {
        ...dataState,
    };
}

// forgot password service for regular
export function useForgotPassword({ email, hint, submit }, setQuery) {
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    const handleForgotPassword = useCallback(async () => {
        try {
            setDataState({ ...dataState, loading: true });

            const response = await axios({
                method: 'post',
                url: POST_AUTH_FORGOT_PASSWORD,
                data: {
                    email: email,
                    hint: hint,
                },
            });

            if (response.status != 200) {
                throw new Error();
            }

            setDataState({
                result: true,
                loading: false,
                error: null,
            });

            toast('👍 Reset Password Email Has Been Sent!');

            return true;
        } catch (err) {
            console.log('err :>>', err);
            setDataState({
                result: false,
                loading: false,
                error: err.message,
            });

            toast('❌ Uncorrect Email or Password Hint!');

            return false;
        }
    }, [submit]);

    useEffect(() => {
        if (!submit) return;
        handleForgotPassword().then((result) => {
            if (!result)
                setQuery((prev) => ({
                    ...prev,
                    submit: false,
                }));
        });
    }, [submit]);

    return {
        ...dataState,
    };
}

// refresh access token for regular, google
export function useAccessToken() {
    // context
    const { setAuthState } = useAuthContext();
    // state
    const [dataState, setDataState] = useState({
        user: {},
        accessToken: '',
        loading: true,
        error: null,
    });

    // regular
    const handleAccessToken = useCallback(async () => {
        try {
            const response = await axios({
                method: 'get',
                url: GET_AUTH_TOKEN,
                withCredentials: true,
            });

            if (response.status != 200) {
                throw new Error();
            }

            const { access_token } = response.data;
            const payload = jwt_decode(access_token);

            // local state
            setDataState({
                user: payload,
                accessToken: access_token,
                loading: false,
                error: null,
            });
            // global state
            setAuthState((prev) => ({
                ...prev,
                user: payload,
                accessToken: access_token,
            }));
        } catch (err) {
            console.log('err :>>', err);
            setDataState((prev) => ({
                ...prev,
                loading: false,
                error: err.message,
            }));
        }
    }, []);

    useEffect(() => {
        handleAccessToken();
    }, []);

    return {
        ...dataState,
    };
}

// useResetPassword
export function useResetPassword(
    { password, confirmPassword, submit },
    setQuery
) {
    // context
    const { accessToken } = useAuthContext();

    // local state
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    const handleResetPassword = useCallback(async () => {
        try {
            setDataState({ ...dataState, loading: true });

            const response = await axios({
                method: 'post',
                url: POST_AUTH_RESET_PASSWORD,
                headers: { Authorization: 'Bearer ' + accessToken },
                data: {
                    password: password,
                    confirm_password: confirmPassword,
                },
            });

            if (response.status != 200) {
                throw new Error();
            }
            // local state
            setDataState({
                result: true,
                loading: false,
                error: null,
            });

            toast('👍 Reset Password Successful!');

            return true;
        } catch (err) {
            console.log('err :>>', err);

            setDataState({
                result: false,
                loading: false,
                error: err.message,
            });

            toast('❌ Oops, something wrong! Please Try Again.');

            return false;
        }
    }, [submit]);

    useEffect(() => {
        if (!submit) return;
        handleResetPassword();
    }, [submit]);

    return {
        ...dataState,
    };
}

// useEditPersonalInfo
export function useEditPersonalInfo(
    { name, birthday, phone, submit },
    setQuery
) {
    // context
    const { accessToken } = useAuthContext();
    const { toast } = useToastContext();
    // state
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    const handleEditPersonalInfo = useCallback(async () => {
        try {
            setDataState((prev) => ({ ...prev, loading: true }));

            const response = await axios({
                method: 'post',
                url: POST_AUTH_EDIT_PERSONAL_INFO,
                headers: { Authorization: 'Bearer ' + accessToken },
                data: {
                    name,
                    birthday,
                    phone,
                },
            });

            console.log('response :>> ', response);
            if (response.status != 200) {
                throw new Error();
            }

            setDataState((prev) => ({
                ...prev,
                result: true,
                loading: false,
                error: null,
            }));

            toast('👍 Personal Info Update Successful!');

            return true;
        } catch (err) {
            console.log('err :>>', err);

            setDataState((prev) => ({
                ...prev,
                result: false,
                loading: false,
                error: err.message,
            }));

            toast('❌ Personal Info Update Failed. Please Try Again!');

            return false;
        }
    }, [name, birthday, phone]);

    useEffect(() => {
        if (!submit || (!name && !birthday && !phone)) return;
        handleEditPersonalInfo().then((result) => {
            setQuery((prev) => ({
                ...prev,
                submit: false,
            }));
        });
    }, [submit]);

    return {
        ...dataState,
    };
}

// useEditEmail
export function useEditEmail({ email, submit }, setQuery) {
    // context
    const { accessToken } = useAuthContext();
    const { toast } = useToastContext();
    // state
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    const handleEditEmail = useCallback(async () => {
        try {
            setDataState((prev) => ({ ...prev, loading: true }));

            const response = await axios({
                method: 'post',
                url: POST_AUTH_EDIT_EMAIL,
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                },
                data: {
                    email,
                },
            });

            console.log('response :>> ', response);
            setDataState((prev) => ({
                ...prev,
                result: true,
                loading: false,
                error: null,
            }));

            toast('👍 Accept Email Edit. Confirmation Email has been Sent!');

            return true;
        } catch (err) {
            console.log('err :>>', err);
            setDataState((prev) => ({
                ...prev,
                result: false,
                loading: false,
                error: err.message,
            }));

            toast('❌ Reject Email Edit. Please Try Again!');

            return false;
        }
    }, [email]);

    useEffect(() => {
        if (!submit || !email) return;
        handleEditEmail().then((result) => {
            setQuery((prev) => ({
                ...prev,
                submit: false,
            }));
        });
    }, [submit]);

    return {
        ...dataState,
    };
}

// useEditAvatar
export function useEditAvatar({ avatar, submit }, setQuery) {
    // context
    const { accessToken } = useAuthContext();
    const { toast } = useToastContext();
    // state
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    const handleEditAvatar = useCallback(async () => {
        try {
            setDataState((prev) => ({ ...prev, loading: true }));

            const formData = new FormData();
            formData.append('avatar', avatar);

            const response = await axios({
                method: 'post',
                url: POST_AUTH_EDIT_AVATAR,
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                    'Content-Type': 'multipart/form-data',
                },
                data: formData,
            });

            // console.log('response :>> ', response);
            if (response.status != 200) {
                throw new Error();
            }
            // local state
            setDataState((prev) => ({
                ...prev,
                result: true,
                loading: false,
                error: null,
            }));

            toast('👍 Avatar Edit Successful!');

            return true;
        } catch (err) {
            console.log('err :>>', err);
            // local state
            setDataState((prev) => ({
                ...prev,
                result: false,
                loading: false,
                error: err.message,
            }));

            toast('❌ Avatar Edit Failed. Please Try Again!');

            return false;
        }
    }, [avatar]);

    useEffect(() => {
        if (!submit || !avatar) return;
        handleEditAvatar().then((result) => {
            setQuery((prev) => ({
                ...prev,
                submit: false,
            }));
        });
    }, [submit]);

    return {
        ...dataState,
    };
}

// useHealth
export function useHealth() {
    const [dataState, setDataState] = useState({
        result: false,
        loading: true,
        error: null,
    });

    const handleHealth = useCallback(async () => {
        try {
            const response = await axios({
                method: 'get',
                url: GET_AUTH_HEALTH,
                withCredentials: true,
            });

            if (response.status != 200) {
                throw new Error();
            }

            setDataState({
                result: true,
                loading: false,
                error: null,
            });
        } catch (err) {
            console.log('err :>>', err);
            setDataState({
                result: false,
                loading: false,
                error: null,
            });
        }
    }, []);

    useEffect(() => {
        handleHealth();
    }, []);

    return {
        ...dataState,
    };
}

// useGoogleSignIn
export function useGSIScript({ button }, setQuery) {
    // context
    const { setAuthState } = useAuthContext();
    // load gsi library
    const script = useScript(GOOGLE_SIGNIN_CDN);

    // state
    const [dataState, setDataState] = useState({
        user: {},
        accessToken: '',
        loading: false,
        error: null,
    });

    // flow: handleDisplayGoogleButton -> handleAccessToken
    const handleAccessToken = useCallback(async (data) => {
        // console.log('data :>> ', data);

        try {
            setDataState((prev) => ({ ...prev, loading: true }));

            const response = await axios({
                method: 'post',
                url: POST_AUTH_GOOGLE_SIGNIN,
                headers: { Authorization: 'Bearer ' + data.credential },
                withCredentials: true,
            });

            if (response.status != 200) {
                throw new Error();
            }

            const { access_token } = response.data;
            const payload = jwt_decode(access_token);

            // local
            setDataState({
                user: payload,
                accessToken: access_token,
                loading: false,
                error: null,
            });
            // global
            setAuthState((prev) => ({
                ...prev,
                user: payload,
                accessToken: access_token,
            }));

            toast('👍 Google Sign In Successful!');
        } catch (err) {
            console.log('err :>>', err);

            setDataState({
                user: {},
                accessToken: '',
                loading: false,
                error: err.message,
            });

            toast('❌ Google Sign In Failed!');
        }
    }, []);

    const handleDisplayGoogleButton = useCallback(() => {
        // init
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleAccessToken,
            ux_mode: 'popup',
            auto_select: true,
        });

        // render
        google.accounts.id.renderButton(document.querySelector(button), {
            type: 'standard',
            size: 'large',
            theme: 'outline',
            text: 'sign_in_with',
            shape: 'pill',
            logo_alignment: 'center',
            locale: 'en',
            auto_select: true,
        });
    }, []);

    useEffect(() => {
        if (!script.result) return;
        handleDisplayGoogleButton();
    }, [script.result]);

    return {
        ...dataState,
    };
}
