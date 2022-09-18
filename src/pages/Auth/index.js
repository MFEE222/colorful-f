import { Routes, Route, Navigate } from 'react-router-dom';
import { routes, route } from 'utils/routes';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Forgot from './ForgotPassword';
import Reset from './ResetPassword';

function Auth() {
    return (
        <Routes>
            <Route
                path={route(routes.auth.signin).pop()}
                element={<SignIn />}
            />
            <Route
                path={route(routes.auth.signup).pop()}
                element={<SignUp />}
            />
            <Route
                path={route(routes.auth.forgot).pop()}
                element={<Forgot />}
            />
            <Route path={route(routes.auth.reset).pop()} element={<Reset />} />
            <Route path="*" element={<Navigate to={routes.error} />} />
        </Routes>
    );
}

export default Auth;
