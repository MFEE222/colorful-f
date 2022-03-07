import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import { routes } from '../../utils/routes';
import Game from '../Game';

function Home(props) {
    const match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={match.path}>
                   <Game />
                </Route>
            </Switch>
        </>
    );
}

export default Home;
