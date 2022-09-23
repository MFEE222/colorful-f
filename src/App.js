import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'styles/global.scss';
import { routes } from 'utils/routes';

import Layout from 'pages/Layout';
import Loading from 'components/Loading';
const Auth = lazy(() => import('pages/Auth'));
const Product = lazy(() => import('pages/Product'));
const Member = lazy(() => import('pages/Member'));
const Team = lazy(() => import('pages/Team'));
const Teach = lazy(() => import('pages/Teach'));
const Game = lazy(() => import('pages/Game'));
const Cart = lazy(() => import('pages/Cart'));
const Home = lazy(() => import('pages/Home'));
const Error = lazy(() => import('pages/Error'));
const Landing = lazy(() => import('pages/Landing'));

// 時常思考元件（不要習慣集中管理資料思維）、單向資料流、屬性唯讀、狀態概念！！
// 不要在同步代碼中，編寫非同步代碼，且該非同步代碼會需要作為同步代碼的相依
// UI 元件加載在畫面上時會進入生命週期 Mount，卸載時會進入生命週期 UnMount
// useEffect 也可以監控別的元件的狀態

function App() {
    function page(Lazy) {
        return (
            <Suspense fallback={<Loading />}>
                <Lazy />
            </Suspense>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.landing} element={<Layout />}>
                    <Route
                        path={routes.auth.self.concat('*')}
                        element={page(Auth)}
                    />
                    <Route
                        path={routes.product.self.concat('*')}
                        element={page(Product)}
                    />
                    <Route
                        path={routes.member.self.concat('*')}
                        element={page(Member)}
                    />
                    <Route
                        path={routes.team.concat('*')}
                        element={page(Team)}
                    />
                    <Route path={routes.teach} element={page(Teach)} />
                    <Route path={routes.game} element={page(Game)} />
                    <Route
                        path={routes.cart.self.concat('*')}
                        element={page(Cart)}
                    />
                    <Route path={routes.home} element={page(Home)} />
                    <Route
                        exact
                        path={routes.landing}
                        element={page(Landing)}
                    />
                </Route>
                <Route path={routes.error} element={page(Error)} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
