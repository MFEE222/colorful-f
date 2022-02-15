import './styles/global.scss';
import '../node_modules/bootstrap/dist/js/bootstrap';
// import '../node_modules/vanilla-tilt/dist/vanilla-tilt';
// Pages 頁面（會加到路由裡面）
// import Cart from './pages/Cart/Cart';
// import Checkout from './pages/Checkout/Checkout';
// import CustomerService from './pages/CustomerService/CustomerService';
// import Download from './pages/Download/Download';
// import Error from './pages/Error/Error';
// import Home from './pages/Home/Home';
// import Mail from './pages/Mail/Mail';
// import Member from './pages/MemberProfile/Member';
// import OrderDetail from './pages/OrderDetail/OrderDetail';
// import Payment from './pages/Payment/Payment';
// import PaymentInfo from './pages/PaymentInfo/PaymentInfo';
// import ProductDetail from './pages/ProductDetail/ProductDetail';
// import ProductList from './pages/ProductList/ProductList';
// import Profile from './pages/Profile/Profile';
// import Review from './pages/Review/Review';
// import Signout from './pages/Signout/Signout';
// import Signup from './pages/Signup/Signup';
// import Signin from './pages/Signin/Signin';
// import Support from './pages/Support/Support';
// import Team from './pages/Team/Team';
// import WishList from './pages/WishList/WishList';

// Components 元件（一些頁面上固定顯示的元件）
// import NavBar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

// import { Button } from 'react-bootstrap';

// Q: 為什麼直接在 <head></head> 引入 fontawesome 會失敗？

import Member from './pages/Member';
import Authentication from './pages/Authentication';
import Product from './pages/Product';
import Team from './pages/Team';

function App() {
    return (
        <>
            {/* <Member /> */}

            {/* <Authentication /> */}

            <Product />

            {/* <Team /> */}
        </>
    );
}

// function App() {
//     // Exp.get();
//     return (
//         <>
//             <NavBar></NavBar>
//             <Router>
//                 <>
//                     {/* Switch 只會返回一個元件 */}
//                     <Switch>
//                         {/* <Route path="/member">
//                             <Subscrible></Subscrible>
//                         </Route> */}
//                         <Route path="/member/:number?">
//                             <Subscrible></Subscrible>
//                         </Route>
//                         <Route>
//                             <Checkout></Checkout>
//                         </Route>
//                         <Route>
//                             <Register></Register>
//                         </Route>
//                         <Route>
//                             <Order></Order>
//                         </Route>
//                         <Route path="">
//                             <OrderDetail></OrderDetail>
//                         </Route>
//                         <Route path="/cart">
//                             <Cart></Cart>
//                         </Route>
//                         <Route path="/favorite">
//                             <Favorite></Favorite>
//                         </Route>
//                         <Route path="/member/detail">
//                             <ProductDetail></ProductDetail>
//                         </Route>
//                         <Route path="/member">
//                             <Product></Product>
//                         </Route>
//                         <Route path="/member">
//                             <Member></Member>
//                         </Route>
//                         <Route path="/">
//                             <Home></Home>
//                         </Route>
//                     </Switch>
//                 </>
//             </Router>
//             <Footer></Footer>
//         </>
//     );
// }

export default App;
