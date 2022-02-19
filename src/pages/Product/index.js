import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import { routes } from '../../utils/routes';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

function Product(props) {
    const match = useRouteMatch();
    // console.log('match :>> ', match);

    return (
        <>
            <Switch>
                {/* <Route path={match.path + routes.productList}>
                    <ProductList />
                </Route> */}
                {/* <Route path={match.path + routes.productDetail}>
                    <ProductDetail />
                </Route> */}
                <Route path={match.path}>
                    <ProductList />
                </Route>
                <Route path={`${match.path}/detail/:pid`}>
                    <ProductDetail />
                </Route>
                {/* <Route path={match.path}>
                    <div className="box">
                        <h1>Product</h1>
                        <p>Welcome to product page</p>
                        <ul>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={match.path + routes.productList}
                                >
                                    Product List
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={match.path + routes.productDetail}
                                >
                                    Product Detail
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Route> */}
            </Switch>
        </>
    );
}

export default Product;
