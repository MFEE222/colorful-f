// import logo from './logo.svg';
// import './App.css';
import Exp from './utils/Exp';

function App() {
    Exp.get();
    return (
        <div>
            <Router>
                <>
                    {/* Switch 只會返回一個元件 */}
                    <Switch>
                        {/* <Route path="/member">
                            <Subscrible></Subscrible>
                        </Route> */}
                        <Route path="/member/:number?">
                            <Subscrible></Subscrible>
                        </Route>
                        <Route>
                            <Checkout></Checkout>
                        </Route>
                        <Route>
                            <Register></Register>
                        </Route>
                        <Route>
                            <Order></Order>
                        </Route>
                        <Route path="">
                            <OrderDetail></OrderDetail>
                        </Route>
                        <Route path="/cart">
                            <Cart></Cart>
                        </Route>
                        <Route path="/favorite">
                            <Favorite></Favorite>
                        </Route>
                        <Route path="/member/detail">
                            <ProductDetail></ProductDetail>
                        </Route>
                        <Route path="/member">
                            <Product></Product>
                        </Route>
                        <Route path="/member">
                            <Member></Member>
                        </Route>
                        <Route path="/">
                            <Home></Home>
                        </Route>
                    </Switch>
                </>
            </Router>
        </div>
    );
}

export default App;
