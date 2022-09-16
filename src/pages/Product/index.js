// 內建
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import axios from 'axios';
import { API_GET_PRODUCT_RECOMMEND } from 'utils/config';

import { routes, route } from 'utils/routes';

import ReviewDetail from 'components/Product/ReviewDetail';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import RecommendCard from 'components/Product/RecommendCard';

function Product(props) {
    const location = useLocation();

    const [recommend, setRecommend] = useState([]); // 推薦

    const fetchList = async () => {
        const rank = await axios.get(API_GET_PRODUCT_RECOMMEND);
        setRecommend(rank.data);
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <>
            <Routes>
                <Route
                    path={route(routes.product.detail).slice(1).join('/')}
                    element={<ProductDetail />}
                />
                <Route
                    path={route(routes.product.food).pop()}
                    element={<ProductList />}
                />
                <Route
                    path={route(routes.product.wedding).pop()}
                    element={<ProductList />}
                />
                <Route
                    path={route(routes.product.film).pop()}
                    element={<ProductList />}
                />
                <Route
                    path={route(routes.product.scenery).pop()}
                    element={<ProductList />}
                />
                <Route
                    path={route(routes.product.portrait).pop()}
                    element={<ProductList />}
                />
                <Route
                    path={route(routes.product.newest).pop()}
                    element={<ProductList />}
                />
                <Route index element={<ProductList />} />
                {/* <Route
                    path={routes.error}
                    element={<Navigate to={routes.error} />}
                /> */}
            </Routes>
            {/* 推薦區 */}
            <RecommendCard recommend={recommend} />
            {/* 評論區 */}
            {location.pathname === routes.product.detail && <ReviewDetail />}
        </>
    );
}

export default Product;
