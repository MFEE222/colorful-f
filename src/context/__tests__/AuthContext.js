// import {
//     requestSignIn,
//     requestSignUp,
//     requestForgotPassword,
//     requestSignOut,
//     requestAuth,
//     requsetAccessToken,
//     requestHealthCheck,
// } from '../AuthContext';

const name = '';
const email = ''; // email also is account
const password = '';
const hint = '';

// it('auth health check', async () => {
//     const result = await requestHealthCheck();

//     expect(result).toBeTruthy();
// });

// once register successful, will receive authentication email.
// and repeat register will lead to HTTP 403.

// it('sign up test', async () => {
//     const result = await requestSignUp(
//         name,
//         email,
//         password,
//         password,
//         hint
//     );

//     expect(result).toBeTruthy();
// });

// let access_token;

// it('sign in test', async () => {
//     const result = await requestSignIn(email, password);

//     access_token = result;

//     expect(result).not.toBeNull();
// });

// it('auth (access_token) test', async () => {
//     const result = await requestAuth(access_token);

//     expect(result).toBeTruthy();
// });

// it('sign out test', async () => {
//     const result = await requestSignOut();

//     expect(result).toBeTruthy();
// });

// it('access token refresh test', async () => {
//     const result = await requsetAccessToken();

//     expect(result).not.toBeNull();
// });

// !!! each success response has send reset password email for you.
// it('forgot password test', async () => {
//     const result = await requestForgotPassword(email, hint);

//     expect(result).toBeTruthy();
// });
