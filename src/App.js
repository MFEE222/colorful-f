// 內建
// i<h1>A</h1>mport { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';

// 引入樣式、庫
import './styles/global.scss';
import '../node_modules/bootstrap/dist/js/bootstrap';
// import '../node_modules/vanilla-tilt/dist/vanilla-tilt';

// 通用元件
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
import Cart from './pages/Cart';
import Home from './pages/Home';
import Error from './pages/Error';

import {
    ProductsProvider,
    useProductsContext,
} from './utils/context/ProductsContext';

import { RWDProvider } from './utils/context/RWDContext';

import { CartProvider } from './utils/context/CartContext';
import CitiesSlider from './pages/Home/slider';

function App() {
    return (
        <>
            <RWDProvider>
                <ProductsProvider>
                    <CartProvider>
                        <div className="web-content">
                            {/* 導覽列 */}
                            <Navbar />
                            <ScrollToTop />
                            {/* 麵包屑 */}
                            {/* <Breadcrumb /> */}
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
                                {/* 購物車 */}
                                <Route path={routes.cart}>
                                    <Cart />
                                </Route>
                                {/* 主頁 */}
                                <Route exact path={routes.home}>
                                    <Home />
                                </Route>
                                {/* 404 */}
                                <Route path={routes.error}>
                                    <Error />
                                </Route>
                            </Switch>
                        </div>

                        <Footer />
                    </CartProvider>
                </ProductsProvider>
            </RWDProvider>
        </>
    );
}

export default App;
