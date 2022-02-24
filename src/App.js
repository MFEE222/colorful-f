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
import Home from './pages/Home';
import Error from './pages/Error';

import {
    ProductsProvider,
    ProductsConsumer,
    useProductsContext,
} from './utils/context/ProductsContext';

import { CartProvider, useCartContext } from './utils/context/CartContext';

import FancySlider from './effect/FancySlider';
import ScrollGallery from './effect/ScrollGallery';

function App() {
    return (
        <>
            <div>
                <button className="btn btn-primary m-2">
                    <Link className="text-light" to='/facy-slider'>
                        FancySlider
                    </Link>
                </button>
                <button className="btn btn-danger m-2">
                    <Link className="text-light" to='/scroll-gallery'>
                        ScrollGallery
                    </Link>
                </button>
            </div>

            <Switch>
                <Route path="/facy-slider">
                    <FancySlider />
                </Route>
                <Route path="/scroll-gallery">
                    <ScrollGallery />
                </Route>
            </Switch>
        </>
    );
}

export default App;
