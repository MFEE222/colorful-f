import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

// TODO: 生日、手機、大頭照、密碼 修改
// TODO: 將共通 UI 畫面包在 Context 裡面 (Loading, Toast)

// FIXME: improve custom hook with callback
// FIXME: test each custom hook

// API
import {
    POST_AUTH_SIGNIN,
    POST_AUTH_SIGNUP,
    POST_AUTH_FORGOT_PASSWORD,
    DELETE_AUTH_SIGNOUT,
    GET_AUTH,
    GET_AUTH_TOKEN,
    GET_AUTH_HEALTH,
} from '../utils/config';

import login from '../images/film001.jpg';

// routes
import { routes } from '../utils/routes';
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
            {props.children}
        </AuthContext.Provider>
    );
}

// Consumer
export function useAuthContext() {
    return React.useContext(AuthContext);
}

// useAuth
export function useAuth(accessToken, dependencies) {
    // context
    const auth = useAuthContext();
    // state
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    async function handleAuth() {
        try {
            setDataState({ ...dataState, loading: true });

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
    }

    useEffect(() => {
        handleAuth();
    }, dependencies);

    console.log('useAuth return :>> ', dataState);
    return {
        ...dataState,
    };
}

// useSignIn
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

            toast('👍 Sign In Successful!');

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

// useSignOut
export function useSignOut({ submit }, setQuery) {
    // context
    const { authState, setAuthState } = useAuthContext();
    const { toast } = useToastContext();
    // state
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    const handleSignOut = useCallback(async () => {
        try {
            setDataState({ ...dataState, loading: true });

            const response = await axios({
                method: 'delete',
                url: DELETE_AUTH_SIGNOUT,
                withCredentials: true,
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
            setAuthState({ ...authState, user: {}, accessToken: '' });

            toast('👍 Sign Out Successful!');

            return true;
        } catch (err) {
            console.log('err :>>', err);
            setDataState((prev) => ({
                result: false,
                loading: false,
                error: err.message,
            }));

            toast('❌ Sign Out Failed. Please Try Again!');

            return false;
        }
    }, [submit]);

    useEffect(() => {
        if (!submit) return;
        handleSignOut().then((result) => {
            // Navbar always in the scrren, so reset submit whatever successful/failed
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

// useSignUp
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

// useForgotPassword
export function useForgotPassword({ email, hint }, dependencies) {
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    async function handleForgotPassword() {
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
        } catch (err) {
            console.log('err :>>', err);
            setDataState({
                result: false,
                loading: false,
                error: err.message,
            });
        }
    }

    useEffect(() => {
        handleForgotPassword();
    }, dependencies);

    return {
        ...dataState,
    };
}

// useAccessToken
export function useAccessToken() {
    // context
    const { authState, setAuthState } = useAuthContext();
    // state
    const [dataState, setDataState] = useState({
        user: {},
        accessToken: '',
        loading: true,
        error: null,
    });

    const handleAccessToken = useCallback(async () => {
        try {
            setDataState({ ...dataState, loading: true });

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
            setAuthState({
                ...authState,
                user: payload,
                accessToken: access_token,
            });
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

// useHealth
export function useHealth(dependencies) {
    const [dataState, setDataState] = useState({
        result: false,
        loading: false,
        error: null,
    });

    async function handleHealth() {
        try {
            setDataState({ ...dataState, loading: true });

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
    }

    useEffect(() => {
        handleHealth();
    }, dependencies);

    return {
        ...dataState,
    };
}
