// 內建
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// 引入樣式、庫
import './styles/global.scss';
import '../node_modules/bootstrap/dist/js/bootstrap';
// import '../node_modules/vanilla-tilt/dist/vanilla-tilt';

// 通用元件
import Navbar from './utils/Navbar';
import Footer from './utils/Footer';

// 路由
// https://v5.reactrouter.com/web/guides/quick-start
import Auth from './pages/Authentication';
import Product from './pages/Product';
import Member from './pages/Member';
import Team from './pages/Team';
import Teach from './pages/Teach';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
    return (
        <Router>
            <>
                {/* 導覽列 */}
                <Navbar />
                {/* <Link to="/">Home</Link>
                    <Link to="/teach">Teach</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/member">Member</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/auth">Auth</Link> */}

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    {/* 驗證頁：登入、註冊、忘記密碼 */}
                    <Route path="/auth">
                        <Auth />
                    </Route>
                    {/* 商品頁：商品列表、商品細節 */}
                    <Route path="/product">
                        <Product />
                    </Route>
                    {/* 會員頁：個人資料、訂單列表、訂單細節、蒐藏、評論、信件、付款 */}
                    <Route path="/member">
                        <Member />
                    </Route>
                    {/* 團隊介紹頁 */}
                    <Route path="/team">
                        <Team />
                    </Route>
                    {/* 教學頁 */}
                    <Route path="/teach">
                        <Teach />
                    </Route>
                    {/* 主頁 */}
                    <Route path="/">
                        <Home />
                    </Route>
                    {/* 404 */}
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>

                <Footer />
            </>
        </Router>
    );
}

export default App;
