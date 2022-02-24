import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// 第三方庫
import axios from 'axios';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { css } from '@emotion/react';

// 共用
import {
    API_URL,
    IMG_URL,
    API_GET_PRODUCTS,
    API_GET_PRODUCT_TAGS_SERIES,
    API_GET_PRODUCT_RECOMMEND,
} from '../../utils/config';

//自己
import Banner from '../../components/Product/Banner';
import PSearchFilter from '../../components/Product/PSearchFilter';
import FilterBarContent from '../../components/Product/FilterBarContent';
import Tags from '../../components/Product/Tags';
import ProductListContent from '../../components/Product/ProductListContent';
import RecommendCard from '../../components/Product/RecommendCard';
import Pagination from '../../components/Pagination/Pagination';

//context
import {
    ProductsProvider,
    useProductsContext,
} from '../../utils/context/ProductsContext';

function ProductList(props) {
    const products = useProductsContext();
    const match = useRouteMatch();
    const recommend = props.recommend; //推薦區
    //狀態
    const [show, setShow] = useState([]); //過濾呈現用
    // const [recommend, setRecommend] = useState([]); //推薦區呈現
    const [tags, setTags] = useState([]); //表單元素（過濾用的）狀態
    const [init, setInit] = useState({}); //初始的tags,series
    const [loading, setLoading] = useState(false); //載入顯示 ok
    const [color, setColor] = useState('#cf9d3f');

    // Loading 設定值
    const override = css`
        display: block;
        margin: auto;
        width: 100vh;
        height: 100vh;
    `;
    //變數

    //函數
    const fetchList = async () => {
        const response = await axios.get(API_GET_PRODUCT_TAGS_SERIES);
        // const rank = await axios.get(API_GET_PRODUCT_RECOMMEND);
        setInit(response.data);
        // setRecommend(rank.data);
        // console.log('response.data :>> ', response.data);
        setLoading(false);
    };

    //監控product context 要到資料沒
    //因為異步所以要等 product context有資料後設定回去Setshow
    useEffect(
        function () {
            setLoading(true);
            // console.log('products.state :>> ', products.state);
            setShow(products.state);
            // setRecommend(products.addState({ owner, orde: 1, limit: 8 }));
        },
        [products.state]
    );

    useEffect(function () {}, []); //TODO:放要監控的狀態

    // 生命週期
    useEffect(() => {
        fetchList(); // 下載商品資料
        // console.log('show :>> ', show);
    }, []); // 初次掛載

    useEffect(() => {
        if (products !== []) {
            setLoading(false);
        }
    }, [loading]); // 更新 loading
    // useEffect(() => {}, [init]); // 更新 loading
    //loading
    const spinner = (
        <div className="sweet-loading">
            <ClimbingBoxLoader
                color={color}
                loading={loading}
                css={override}
                size={13}
            />
        </div>
    );

    // useEffect(
    //     function () {
    //         console.log('init :>> ', init);
    //         console.log('recommend :>> ', recommend);
    //     },
    //     [init, recommend]
    // );
    return (
        <>
            <Banner />
            {/* 手機版 search & filter */}
            <PSearchFilter init={init} />
            {/* md 以上 search & filter */}
            <FilterBarContent init={init} />
            <Tags init={init} />
            {loading ? spinner : <ProductListContent show={show} />}
            <Pagination />
            <RecommendCard recommend={recommend} />
        </>
    );
}

export default ProductList;
