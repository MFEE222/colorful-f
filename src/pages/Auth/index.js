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

// context
import { useAuthContext } from '../../context/AuthContext';
import { useLoadingContext } from '../../context/LoadingContext';

function Auth(props) {
    // context
    const auth = useAuthContext();
    const load = useLoadingContext();

    // second router
    return (
        <Switch>
            <Route path={routes.signin}>
                <SignIn auth={auth} load={load} />
            </Route>
            <Route path={routes.signup}>
                <SignUp auth={auth} load={load} />
            </Route>
            <Route path={routes.forgot}>
                <ForgotPassword auth={auth} load={load} />
            </Route>
            <Route path={routes.resetPassword}>
                <ResetPassword />
            </Route>
        </Switch>
    );
}

export default Auth;
