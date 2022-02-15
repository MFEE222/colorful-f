import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

// https://www.sailpoint.com/identity-library/difference-between-authentication-and-authorization/

import Signin from './Signin';
import Signup from './Signup';
import Forgot from './Forgot';

function Authentication(props) {
    return (
        <>
            {/* <Signin /> */}
            {/* <Signup /> */}

            {/* The Topics page has its own <Switch> with more routes
                that build on the /topics URL path. You can think of the
                2nd <Route> here as an "index" page for all topics, or
                the page that is shown when no topic is selected */}
            <Switch>
                <Route>
                    <Signin />
                </Route>
                <Route>
                    <Signup />
                </Route>
                <Route>
                    <Forgot />
                </Route>
            </Switch>
        </>
    );
}

export default Authentication;
