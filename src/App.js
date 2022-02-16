// 內建
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';

// 引入樣式、庫
import './styles/global.scss';
import '../node_modules/bootstrap/dist/js/bootstrap';
// import '../node_modules/vanilla-tilt/dist/vanilla-tilt';

// 通用元件
import Navbar from './utils/Navbar';
import Breadcrumb from './utils/Breadcrumb';
import Footer from './utils/Footer';
import { routes } from './utils/routes';

// 路由
// https://v5.reactrouter.com/web/guides/quick-start
// - routers, like <BrowserRouter> and <HashRouter>
// - route matchers, like <Route> and <Switch>
// - and navigation, like <Link>, <NavLink> , and <Redirect>

// <Switch> : 會由上至下尋找一個路由出來後跳出（注意：路徑比對是從頭開始，不是整個比對，所以擺放位置需要複雜到簡單，或用 exact）
// <Route> : 包住想要顯示的內容
// <Link to=""> : 連結至其他頁面
// <NavLink to=""> : 連結至其他頁面，並且 (style itself active ?)
// <Redirect path=""> : 用來重新導向到其他頁面

import Auth from './pages/Auth';
import Product from './pages/Product';
import Member from './pages/Member';
import Team from './pages/Team';
import Teach from './pages/Teach';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
    return (
        <>
            {/* 導覽列 */}
            <Navbar />
            {/* 麵包屑 */}
            <Breadcrumb />
            <div>
                <button className="btn btn-danger m-2">
                    <Link className="text-light" to={routes.home}>
                        Home
                    </Link>
                </button>
                <button className="btn btn-danger m-2">
                    <Link className="text-light" to={routes.teach}>
                        Teach
                    </Link>
                </button>
                <button className="btn btn-danger m-2">
                    <Link className="text-light" to={routes.team}>
                        Team
                    </Link>
                </button>
                <button className="btn btn-danger m-2">
                    <Link className="text-light" to={routes.member}>
                        Member
                    </Link>
                </button>
                <button className="btn btn-danger m-2">
                    <Link className="text-light" to={routes.product}>
                        Product
                    </Link>
                </button>
                <button className="btn btn-danger m-2">
                    <Link className="text-light" to={routes.auth}>
                        Auth
                    </Link>
                </button>
            </div>

            {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
            <Switch>
                {/* 驗證頁：登入、註冊、忘記密碼 */}
                <Route path={routes.auth}>
                    <Auth />
                </Route>
                {/* 商品頁：商品列表、商品細節 */}
                <Route path={routes.product}>
                    <Product />
                </Route>
                {/* 會員頁：個人資料、訂單列表、訂單細節、蒐藏、評論、信件、付款 */}
                <Route path={routes.member}>
                    <Member />
                </Route>
                {/* 團隊介紹頁 */}
                <Route path={routes.team}>
                    <Team />
                </Route>
                {/* 教學頁 */}
                <Route path={routes.teach}>
                    <Teach />
                </Route>
                {/* 測試用 Error 頁面 */}
                <Route path="/error">
                    <Error />
                </Route>
                {/* 主頁 */}
                <Route path={routes.home}>
                    <Home />
                </Route>
                {/* 404 */}
                <Route path={routes.error}>
                    <Error />
                </Route>
            </Switch>

            <Footer />
        </>
    );
}

export default App;
