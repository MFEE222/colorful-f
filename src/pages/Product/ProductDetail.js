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

function ProductDetail(props) {
    const recommend = props.recommend;
    const [review, setReview] = useState([]);
    // console.log('props.match.params', props.match.params);
    // const { pid } = useParams();
    // console.log('pid :>> ', pid);
    // const fetchReview = async () => {
    //     const response = await axios.get(`${API_GET_PRODUCT_REVIEW}/${pid}`);
    //     console.log('response :>> ', response.data.reviewDetail);
    //     setReview(response.data.reviewDetail);
    // };
    // useEffect(() => {
    //     fetchReview();
    //     console.log('review :>> ', review);
    // }, []);
    // 渲染
    return (
        <>
            <Main>
                {/* 熱銷排行 md 以上評論 標題*/}
                <ProductDetailContent />
                <div className="my-5 recommend pd-2 pd-shared">
                    <RecommendCard recommend={recommend} />
                </div>
                {/* <ReviewDetail></ReviewDetail> */}
            </Main>
        </>
    );
}

export default ProductDetail;
