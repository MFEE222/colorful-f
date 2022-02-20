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

// TODO: 我們先測試 Link 的 state 是可以被 useLocation 抓到
// TODO: 重新安排一下商品頁的狀態

// 商品列表狀態：
