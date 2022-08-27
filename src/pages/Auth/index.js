// standard
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// internal utility
import routes from '../../utils/routes';

// internal components of page
import SignIn from './SignIn';
import SignUp from './SignUp';
import Forgot from './Forgot';
import Reset from './Reset';

function Auth(props) {
    // second router
    return (
        <Switch>
            <Route path={routes.auth.signin}>
                <SignIn />
            </Route>
            <Route path={routes.auth.signup}>
                <SignUp />
            </Route>
            <Route path={routes.auth.forgot}>
                <Forgot />
            </Route>
            <Route path={routes.auth.reset}>
                <Reset />
            </Route>
        </Switch>
    );
}

export default Auth;
