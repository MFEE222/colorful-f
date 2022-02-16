import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import { routes } from '../../utils/routes';

function Error(props) {
    const match = useRouteMatch();
    console.log('match.path :>> ', match.path);

    return (
        <>
            <Switch>
                <Route path={match.path}>
                    <div className="box">
                        <h1>Error</h1>
                        <p>This is 404 page. FIXME: 404/404.js </p>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default Error;
