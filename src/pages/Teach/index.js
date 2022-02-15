import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import { routes } from '../../utils/routes';

function Teach(props) {
    const match = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={match.path}>
                    <div className="box">
                        <h1>Teach</h1>
                        <p>Welcome to teach page...</p>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default Teach;
