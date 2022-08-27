import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import TeamContent from '../../components/Team/TeamContent';

function Team(props) {
    const match = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={match.path}>
                    <TeamContent />
                </Route>
            </Switch>
        </>
    );
}

export default Team;
