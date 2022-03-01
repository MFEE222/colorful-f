// 內建
import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch, useLocation } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// 通用元件
import axios from 'axios';
import { API_URL, API_GET_PRODUCT_REVIEW } from '../../utils/config';

// 自用元件
import Main from '../../components/Product/Main';
import ProductDetailContent from '../../components/Product/ProductDetailContent';
import ReviewDetail from '../../components/Product/ReviewDetail';
import Pagination from '../../components/Other/Pagination';
import RecommendCard from '../../components/Product/RecommendCard';
//context
import { useProductsContext } from '../../utils/context/ProductsContext';

function ProductDetail(props) {
    //勾子
    const [review, setReview] = useState([]); //商品評論區
    const product = useProductsContext();
    //函數

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `${API_GET_PRODUCT_REVIEW}/${product.current.id}`
            );
            console.log('product.current.id :>> ', product.current.id);
            setReview(response.data.reviewDetail);
            //TODO:接收一個會員的＆此評論的全部圖片）
            console.log('response :>> ', response);
            console.log('review :>> ', review);
        })();
    }, [product.current]);

    // 渲染
    return (
        <>
            <Main>
                <ProductDetailContent />
                {/* <div className="my-5 recommend pd-2 pd-shared">
                    <RecommendCard recommend={recommend} />
                    {/* 提取到index.js */}
                {/* </div> */}
                <ReviewDetail reviews={review} />
            </Main>
        </>
    );
}

export default ProductDetail;
