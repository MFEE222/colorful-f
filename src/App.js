// import logo from './logo.svg';
// import './App.css';

function App() {
    return (
        <Router>
            <>
                <Switch>
                    <Route>
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
    );
}

export default App;
