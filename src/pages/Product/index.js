import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useNavigate,
} from 'react-router-dom';

import { routes } from '../../utils/routes';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

function Product(props) {
    const match = useRouteMatch();

    return (
        <>
            <Switch>
                {/* 商品細節 */}
                {/* <Route path={`${routes.productDetail}/:id?`}></Route> */}
                <Route path={`${match.path}/detail/:id?`}>
                    <ProductDetail />
                </Route>
                {/* 商品列表 */}
                <Route path={match.path}>
                    <ProductList />
                </Route>
            </Switch>
        </>
    );
}

export default Product;
