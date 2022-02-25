import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

// https://www.sailpoint.com/identity-library/difference-between-authentication-and-authorization/

import { routes } from '../../utils/routes';
import Signin from './Signin';
import Signup from './Signup';
import Forgot from './Forgot';

function Auth(props) {
    const match = useRouteMatch();
    // console.log('match :>> ', match);

    return (
        <>
            {/* <Signin /> */}
            {/* <Signup /> */}
            {/* The Topics page has its own <Switch> with more routes
                that build on the /topics URL path. You can think of the
                2nd <Route> here as an "index" page for all topics, or
                the page that is shown when no topic is selected */}
            <Switch>
                <Route path={routes.signin}>
                    <Signin />
                </Route>
                <Route path={routes.signup}>
                    <Signup />
                </Route>
                <Route path={routes.forgot}>
                    <Forgot />
                </Route>
                <Route path={match.path}>
                    <div className="box">
                        <h1>Auth</h1>
                        <p>Welcome to auth page...</p>
                        <ul>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={routes.signin}
                                >
                                    Signin
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={routes.signup}
                                >
                                    Signup
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={routes.forgot}
                                >
                                    Forgot
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default Auth;
