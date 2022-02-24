import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
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
import { API_GET_PRODUCT_RECOMMEND } from '../../utils/config';
import { PlaceholderLine } from 'semantic-ui-react';
import { useProductsContext } from '../../utils/context/ProductsContext';

//context
// import { useProductsContext } from '../../utils/context/ProductsContext';

// url : localhost:3000/product/detail/7
// url : localhost:3000/product/

function Product(props) {
    const match = useRouteMatch();
    const [recommend, setRecommend] = useState([]); //推薦區呈現

    const fetchList = async () => {
        const rank = await axios.get(API_GET_PRODUCT_RECOMMEND);
        setRecommend(rank.data);
    };

    useEffect(() => {
        fetchList(); // 下載商品推薦資料
        // console.log('recommend :>> ', recommend);
    }, []); // 初次掛載
    return (
        <>
            <Switch>
                {/* 商品細節 */}
                <Route path={`${routes.productDetail}/id?`}>
                    <ProductDetail recommend={recommend} />
                </Route>
                {/* 商品列表 */}
                <Route path={match.path}>
                    <ProductList recommend={recommend} />
                </Route>
            </Switch>
            {/* 推薦區 */}
            <div className="recommend">A</div>
            {/* 評論區 */}
            {match.path === routes.productDetail && (
                <div className="review">B</div>
            )}
        </>
    );
}

export default Product;

// 我們先測試 Link 的 state 是可以被 useLocation 抓到
// TODO: 重新安排一下商品頁的狀態

// 商品列表狀態：
