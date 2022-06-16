import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

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
import { useLoadingContext } from './LoadingContext';

// Context
const AuthContext = React.createContext('wrap not correct');

// Provider
export function AuthProvider(props) {
    const load = useLoadingContext();
    // state
    const [user, setUser] = useState({
        name: '',
        email: '',
        expiration: 0,
        accessToken: '',
    });

    // useEffect(() => {
    //     console.log('user :>> ', user);
    // }, [user]);

    useEffect(async () => {
        await requsetAccessToken();
    }, []);

    // share
    const share = {
        requestSignIn,
        requestSignUp,
        requestForgotPassword,
        requestSignOut,
        requestAuth,
        requsetAccessToken,
        requestHealthCheck,
        user,
        isAllowed,
        isDenied,
    };

    // render
    return (
        <AuthContext.Provider value={share}>
            {/* {props.children} */}
            {/* <LoginModal share={share} onHide={() => setShowLoginModal(false)}> */}
            {props.children}
            {/* </LoginModal> */}
        </AuthContext.Provider>
    );

    // event handle
    async function requestAuth() {
        const { accessToken } = user;

        try {
            const response = await axios({
                method: 'get',
                url: GET_AUTH,
                headers: { Authorization: 'Bearer ' + accessToken },
                withCredentials: true,
            });

            // console.log('response :>> ', response);
            if (response.status != 200) {
                throw new Error();
            }

            return true;
        } catch (err) {
            console.log('err :>>', err);
            return false;
        }
    }

    async function requestSignIn(email, password) {
        try {
            const response = await axios({
                method: 'post',
                url: POST_AUTH_SIGNIN,
                data: {
                    account: email,
                    password: password,
                },
                withCredentials: true,
            });

            const { access_token } = response.data;
            console.log('access_token :>> ', access_token);

            if (response.status != 200 || !access_token) {
                throw new Error();
            }

            const payload = jwt_decode(access_token);

            setUser({
                name: payload.name,
                email: payload.email,
                expiration: payload.exp,
                accessToken: access_token,
            });

            return true;
        } catch (err) {
            console.log('err :>>', err);
            return false;
        }
    }

    async function requestSignOut() {
        try {
            const response = await axios({
                method: 'delete',
                url: DELETE_AUTH_SIGNOUT,
                withCredentials: true,
            });

            if (response.status != 204) {
                throw new Error();
            }

            // set state
            setUser({
                name: '',
                email: '',
                expiration: 0,
                accessToken: '',
            });

            return true;
        } catch (err) {
            console.log('err :>>', err);
            return false;
        }
    }

    async function requestSignUp(
        name,
        email,
        password,
        confirm_password,
        hint
    ) {
        try {
            const response = await axios({
                method: 'post',
                url: POST_AUTH_SIGNUP,
                data: {
                    name: name,
                    account: email,
                    password: password,
                    confirm_password: confirm_password,
                    hint: hint,
                },
            });

            // console.log('response :>> ', response);
            if (response.status != 200) {
                throw new Error();
            }

            // if success, meaning email has sent to user
            return true;
        } catch (err) {
            console.log('err :>>', err);

            return false;
        }
    }

    async function requestForgotPassword(email, hint) {
        try {
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

            // 'true' means reset password email has sent.
            return true;
        } catch (err) {
            console.log('err :>>', err);
            return false;
        }
    }

    async function requsetAccessToken() {
        // attention: don't use beofre sign in (not yet get refresh token)
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
            console.log('access_token :>> ', access_token);

            const payload = jwt_decode(access_token);

            setUser({
                name: payload.name,
                email: payload.email,
                expiration: payload.exp,
                accessToken: access_token,
            });

            return true;
        } catch (err) {
            console.log('err :>>', err);
            return false;
        }
    }

    async function requestHealthCheck() {
        try {
            const response = await axios({
                method: 'get',
                url: GET_AUTH_HEALTH,
                withCredentials: true,
            });

            console.log('health response :>> ', response);

            if (response.status != 200) {
                throw new Error();
            }

            return true;
        } catch (err) {
            console.log('err :>>', err);
            return false;
        }
    }

    function isAllowed() {
        // timestamp (sesmills)
        const now = Date.now() / 1000;
        return now < user.expiration;
    }

    function isDenied() {
        return !isAllowed();
    }
}

// Consumer (old version)
// export function AuthConsumer(props) {
//     return <AuthContext.Consumer>{props.children}</AuthContext.Consumer>;
// }

// Consumer
export function useAuthContext() {
    return React.useContext(AuthContext);
}

// Testing
// export async function requestAuth(access_token) {
//     try {
//         const response = await axios({
//             method: 'get',
//             url: GET_AUTH,
//             headers: { Authorization: 'Bearer ' + access_token },
//         });

//         // console.log('response :>> ', response);

//         if (response.status != 200) {
//             throw new Error();
//         }

//         return true;
//     } catch (err) {
//         console.log('err :>>', err);
//         return false;
//     }
// }
//
// export async function requestSignIn(account, password) {
//     try {
//         const response = await axios({
//             method: 'post',
//             url: POST_AUTH_SIGNIN,
//             data: {
//                 account: account,
//                 password: password,
//             },
//         });

//         const { access_token } = response.data;

//         if (response.status != 200 || !access_token) {
//             throw new Error();
//         }

//         // const user = jwt_decode(access_token);
//         // console.log('user :>> ', user);

//         return access_token;
//     } catch (err) {
//         console.log('err :>>', err);
//         return null;
//     }
// }

// export async function requestSignOut() {
//     try {
//         const response = await axios({
//             method: 'delete',
//             url: DELETE_AUTH_SIGNOUT,
//         });

//         if (response.status != 204) {
//             throw new Error();
//         }

//         return true;
//     } catch (err) {
//         console.log('err :>>', err);
//         return false;
//     }
// }

// export async function requestSignUp(
//     name,
//     account,
//     password,
//     confirm_password,
//     hint
// ) {
//     try {
//         const response = await axios({
//             method: 'post',
//             url: POST_AUTH_SIGNUP,
//             data: {
//                 name: name,
//                 account: account,
//                 password: password,
//                 confirm_password: confirm_password,
//                 hint: hint,
//             },
//         });

//         // console.log('response :>> ', response);
//         if (response.status != 200) {
//             throw new Error();
//         }

//         // if success, meaning email has sent to user
//         return true;
//     } catch (err) {
//         console.log('err :>>', err);

//         return false;
//     }
// }

// export async function requestForgotPassword(account, hint) {
//     try {
//         const response = await axios({
//             method: 'post',
//             url: POST_AUTH_FORGOT_PASSWORD,
//             data: {
//                 email: account,
//                 hint: hint,
//             },
//         });

//         if (response.status != 200) {
//             throw new Error();
//         }

//         // 'true' means reset password email has sent.
//         return true;
//     } catch (err) {
//         console.log('err :>>', err);
//         return false;
//     }
// }

// export async function requsetAccessToken() {
//     // attention: don't use beofre sign in (not yet get refresh token)
//     try {
//         const response = await axios({
//             method: 'get',
//             url: GET_AUTH_TOKEN,
//         });

//         if (response.status != 200) {
//             throw new Error();
//         }

//         const { access_token } = response.data;

//         return access_token;
//     } catch (err) {
//         console.log('err :>>', err);
//         return null;
//     }
// }

// export async function requestHealthCheck() {
//     try {
//         const response = await axios({
//             method: 'get',
//             url: GET_AUTH_HEALTH,
//         });

//         // console.log('response :>> ', response);

//         if (response.status != 200) {
//             throw new Error();
//         }

//         return true;
//     } catch (err) {
//         console.log('err :>>', err);
//         return false;
//     }
// }
