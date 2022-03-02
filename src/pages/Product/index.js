// 內建
import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

// 第三方庫
import axios from 'axios';
import { API_GET_PRODUCT_RECOMMEND } from '../../utils/config';
// import { PlaceholderLine } from 'semantic-ui-react';

// 通用庫
import { routes } from '../../utils/routes';

// context
import { useProductsContext } from '../../utils/context/ProductsContext';

// 自己
import ReviewDetail from '../../components/Product/ReviewDetail';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import RecommendCard from '../../components/Product/RecommendCard';

function Product(props) {
    // 勾子
    const match = useRouteMatch();

    // 狀態
    const [recommend, setRecommend] = useState([]); // 推薦
    // const [loading, setLoading] = useState(false); //載入顯示 ok

    //函數
    const fetchList = async () => {
        const rank = await axios.get(API_GET_PRODUCT_RECOMMEND);
        setRecommend(rank.data);
    };

    useEffect(() => {
        fetchList(); // 下載商品推薦資料
        // console.log('recommend :>> ', recommend);
    }, []); // 初次掛載

    // const [color, setColor] = useState('#cf9d3f');
    // Loading 設定值
    // const override = css`
    //     display: block;
    //     margin: auto;
    //     width: 100vh;
    //     height: 100vh;
    // `;
    //loading
    // useEffect(() => {
    //     if (products !== []) {
    //         setLoading(false);
    //     }
    // }, [loading]); // 更新 loading

    //渲染
    return (
        <>
            <Switch>
                {/* 細節 */}
                <Route path={routes.productDetail()}>
                    <ProductDetail />
                </Route>
                {/* 食物 */}
                <Route path={routes.productFood}>
                    <ProductList />
                </Route>
                {/* 婚禮 */}
                <Route path={routes.productWedding}>
                    <ProductList />
                </Route>
                {/* 復古 */}
                <Route path={routes.productFilm}>
                    <ProductList />
                </Route>
                {/* 風景 */}
                <Route path={routes.productScenery}>
                    <ProductList />
                </Route>
                {/* 人像 */}
                <Route path={routes.productPortrait}>
                    <ProductList />
                </Route>
                {/* 最新 */}
                <Route path={routes.productNewest}>
                    <ProductList />
                </Route>
                {/* 全部 */}
                <Route path={routes.product}>
                    <ProductList />
                </Route>
            </Switch>
            {/* 推薦區 */}
            {/* <RecommendCard recommend={recommend} /> */}
            {/* 評論區 */}
            {/* {match.path === routes.productDetail && <ReviewDetail />} */}
        </>
    );
}

export default Product;
