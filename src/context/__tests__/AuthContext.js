import {
    requestSignIn,
    requestSignUp,
    requestForgotPassword,
    requestSignOut,
    requestAuth,
    requsetAccessToken,
    requestHealthCheck,
} from '../AuthContext';

// it('post sign in request to backend', () => {});

it('auth health check', async () => {
    const result = await requestHealthCheck();

    expect(result).toBeTruthy();
});
