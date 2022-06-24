// standard
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// internal utility
import { routes } from '../../utils/routes';

// internal components of page
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

function Auth(props) {
    // second router
    return (
        <Switch>
            <Route path={routes.signin}>
                <SignIn />
            </Route>
            <Route path={routes.signup}>
                <SignUp />
            </Route>
            <Route path={routes.forgot}>
                <ForgotPassword />
            </Route>
            <Route path={routes.resetPassword}>
                <ResetPassword />
            </Route>
        </Switch>
    );
}

export default Auth;
