import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import { routes } from '../../utils/routes';

function Home(props) {
    const match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={match.path}>
                    <div className="box">
                        <h1>Colorful</h1>
                        <p>Welcome to colorful...</p>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default Home;
