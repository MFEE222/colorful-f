// 內建
// i<h1>A</h1>mport { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';

// 引入樣式、庫
import './styles/global.scss';
import 'bootstrap';
// import '../node_modules/vanilla-tilt/dist/vanilla-tilt';

// 通用元件
import Routes from './utils/ts-routes';
import Navbar from './utils/Navbar';
import Breadcrumb from './utils/Breadcrumb';
import Footer from './utils/Footer';
import ScrollToTop from './utils/ScrollToTop';
import { routes } from './utils/routes';
import { API_URL, IMG_URL } from './utils/config';

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
import Game from './pages/Game';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Error from './pages/Error';
import Landing from './pages/Landing';
// import Email from './pages/Email';
import Email from './components/Email/email';

// Context
import { ProductsProvider } from './context/ProductsContext';
import { RWDProvider } from './context/RWDContext';
import { UIToastProvider } from './context/ToastContext';
// import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { LoadingProvider } from './context/LoadingContext';
// import { OrderProvider } from './context/OrderContext';

// import { Modal } from '../node_modules/bootstrap/dist/js/bootstrap';

// 時常思考元件（不要習慣集中管理資料思維）、單向資料流、屬性唯讀、狀態概念！！
// 不要在同步代碼中，編寫非同步代碼，且該非同步代碼會需要作為同步代碼的相依
// UI 元件加載在畫面上時會進入生命週期 Mount，卸載時會進入生命週期 UnMount
// useEffect 也可以監控別的元件的狀態

function App() {
    return (
        <>
            <RWDProvider>
                <UIToastProvider>
                    <LoadingProvider>
                        <AuthProvider>
                            <ProductsProvider>
                                {/* <CartProvider> */}
                                {/* <OrderProvider> */}
                                <div className="web-content">
                                    {/* 導覽列 */}
                                    <Navbar />
                                    <ScrollToTop />
                                    {/* 麵包屑 */}
                                    {/* <Breadcrumb /> */}
                                    <Switch>
                                        {/* 驗證頁：登入、註冊、忘記密碼 */}
                                        <Route path={Routes.AUTH.INDEX}>
                                            <Auth />
                                        </Route>
                                        {/* 商品頁：商品列表、商品細節 */}
                                        <Route path={Routes.PRODUCT.INDEX}>
                                            <Product />
                                        </Route>
                                        {/* 會員頁：個人資料、訂單列表、訂單細節、蒐藏、評論、信件、付款 */}
                                        <Route path={Routes.MEMBER.INDEX}>
                                            <Member />
                                        </Route>
                                        {/* 團隊介紹頁 */}
                                        <Route path={Routes.TEAM.INDEX}>
                                            <Team />
                                        </Route>
                                        {/* 教學頁 */}
                                        <Route path={Routes.TEACH.INDEX}>
                                            <Teach />
                                        </Route>
                                        {/* 心理測驗頁 */}
                                        <Route path={Routes.GAME.INDEX}>
                                            <Game />
                                        </Route>
                                        {/* email */}
                                        <Route path={Routes.MEMBER.MAILS}>
                                            <Email />
                                        </Route>
                                        {/* 購物車 */}
                                        <Route path={Routes.CART.INDEX}>
                                            <Cart />
                                        </Route>
                                        {/* 主頁 */}
                                        <Route exact path={Routes.HOME.INDEX}>
                                            <Home />
                                        </Route>
                                        {/* 前導頁 */}
                                        <Route exact path={Routes.LANDING.INDEX}>
                                            <Landing />
                                        </Route>
                                        {/* 404 */}
                                        <Route path={Routes.ERROR.INDEX}>
                                            <Error />
                                        </Route>
                                    </Switch>
                                </div>
                                <Footer />
                                {/* </OrderProvider> */}
                                {/* </CartProvider> */}
                            </ProductsProvider>
                        </AuthProvider>
                    </LoadingProvider>
                </UIToastProvider>
            </RWDProvider>
        </>
    );
}

export default App;
