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
import Pagination from '../../components/Pagination/Pagination';
import RecommendCard from '../../components/Product/RecommendCard';
//context
import { useProductsContext } from '../../utils/context/ProductsContext';

function ProductDetail(props) {
    //context
    const products = useProductsContext();
    //勾子
    const [detail, setDetail] = useState([]); //商品介紹區
    const [review, setReview] = useState([]); //商品評論區
    // setDetail(products.current()) //context 取得現在這筆id

    //函數
    const fetchReview = async () => {
        const response = await axios.get(
            `${API_GET_PRODUCT_REVIEW}/${detail.id}`
        );
        setReview(response.data);
    }; //review詳細資訊

    useEffect(() => {
        fetchReview();
    }, []);

    // 渲染
    return (
        <>
            <Main>
                {/* 熱銷排行 md 以上評論 標題*/}
                {/* 改成context 傳進的資料 */}
                <ProductDetailContent detail={detail} />
                {/* <div className="my-5 recommend pd-2 pd-shared">
                    <RecommendCard recommend={recommend} />
                    {/* 提取到index.js */}
                {/* </div> */}
                <ReviewDetail review={review} />
            </Main>
        </>
    );
}

export default ProductDetail;
