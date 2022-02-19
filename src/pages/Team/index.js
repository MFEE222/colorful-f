import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import TeamContent from '../../components/Team/TeamContent';
import { routes } from '../../utils/routes';

function Team(props) {
    const match = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={routes.team}>
                    <TeamContent />
                </Route>
            </Switch>
        </>
    );
}

export default Team;
