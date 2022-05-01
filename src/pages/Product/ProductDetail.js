// 內建
import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch, useLocation } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// 通用元件
import axios from 'axios';
import { API_URL, API_GET_PRODUCT_REVIEW, IMG_URL2 } from '../../utils/config';

// 自用元件
import Main from '../../components/Product/Main';
import ProductDetailContent from '../../components/Product/ProductDetailContent';
import ReviewDetail from '../../components/Product/ReviewDetail';
//context
import { useProductsContext } from '../../utils/context/ProductsContext';

function ProductDetail(props) {
    //勾子
    const [review, setReview] = useState([]); //商品評論區
    const product = useProductsContext();
    //函數
    // console.log('product.current.id :>> ', product.current.id);
    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `${API_GET_PRODUCT_REVIEW}/${product.current.id}`
            );
            const review = response.data.newReviewDetail;
            //處理圖片網址（串起來）
            const newReviews = review.map((v) => {
                const newPhotos = v.photos.map((e) => {
                    return `${IMG_URL2}/${v.img}/${e}`;
                });
                v.photos = newPhotos;
                return v;
            });
            setReview(response.data.newReviewDetail);
        })();
        // console.log('review :>> ', review);
    }, [product.current]);

    // 渲染
    return (
        <>
            <Main>
                <ProductDetailContent />
                <ReviewDetail reviews={review} product={product.current} />
            </Main>
        </>
    );
}

export default ProductDetail;
