// standard
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// internal utility
import Routes from '../../utils/ts-routes';
import { routes } from '../../utils/routes';

// internal components of page
import SignIn from './SignIn';
import SignUp from './SignUp';
import Forgot from './Forgot';
import Reset from './Reset';

function Auth(props) {
    // second router
    return (
        <Switch>
            <Route path={Routes.AUTH.SIGNIN}>
                <SignIn />
            </Route>
            <Route path={Routes.AUTH.SIGNUP}>
                <SignUp />
            </Route>
            <Route path={Routes.AUTH.FORGOT}>
                <Forgot />
            </Route>
            <Route path={Routes.AUTH.RESET}>
                <Reset />
            </Route>
        </Switch>
    );
}

export default Auth;
