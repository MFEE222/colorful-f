import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useNavigate,
} from 'react-router-dom';

//第3方庫
import axios from 'axios';
import { API_GET_PRODUCT_RECOMMEND } from '../../utils/config';
import { PlaceholderLine } from 'semantic-ui-react';

//共用
import { routes } from '../../utils/routes';

//context
import { useProductsContext } from '../../utils/context/ProductsContext';

//自己
import ReviewDetail from '../../components/Product/ReviewDetail';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import RecommendCard from '../../components/Product/RecommendCard';

// url : localhost:3000/product/detail/7
// url : localhost:3000/product/

function Product(props) {
    //router-dom
    const match = useRouteMatch();
    //context
    const products = useProductsContext();
    //勾子
    const [origin, setOrigin] = useState([]); //原資料
    const [recommend, setRecommend] = useState([]); // 推薦區
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

    //監控product context 要到資料沒
    //因為異步所以要等 product context有資料後設定回去Setshow
    useEffect(
        function () {
            // setLoading(true);
            setOrigin(products.state);
            // console.log('products.state :>> ', products.state);
            console.log('origin :>> ', origin);
            // setRecommend(products.addState({ owner, orde: 1, limit: 8 }));
        },
        [products.state]
    );
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
                {/* 商品細節 */}
                <Route path={`${routes.productDetail}/:id`}>
                    <ProductDetail />
                </Route>
                {/* 商品列表 */}
                <Route path={match.path}>
                    <ProductList origin={origin} />
                </Route>
            </Switch>
            {/* 推薦區 */}
            <RecommendCard recommend={recommend} />
            {/* 評論區 */}
            {match.path === routes.productDetail && <ReviewDetail />}
        </>
    );
}

export default Product;

// 我們先測試 Link 的 state 是可以被 useLocation 抓到
// TODO: 重新安排一下商品頁的狀態

// 商品列表狀態：
