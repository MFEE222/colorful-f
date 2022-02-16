import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import { routes } from '../../utils/routes';

import ErrorContent from '../../components/Error/ErrorContent';

function Error(props) {
    const match = useRouteMatch();
    // console.log('match.path :>> ', match.path);

    return (
        <>
            <Switch>
                <Route path={match.path}>
                    <ErrorContent />
                </Route>
            </Switch>
        </>
    );
}

export default Error;
