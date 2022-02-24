// 內建庫
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Redirect } from 'react-router-dom';

// 第三方庫
import axios from 'axios';

// 共用
import { IMG_URL, API_URL } from '../../utils/config';

// 自己
import { imgName } from '../../utils/imageName';
import Pagination from '../Pagination/Pagination';
import Card from './Card';
import RecommendCard from './RecommendCard';
import ShowStar from './ShowStar';
import ReviewDetail from './ReviewDetail';

// 圖片
import DemoImgProduct from '../../images/navbar-ex-1.jpg';
import DemoImgFigure from '../../images/portrait01.jpg';
import ImgIcon from '../../icons/dec-bar.png';
import { routes } from '../../utils/routes';

function ProductDetailContent(props) {
    // 狀態、勾子
    // const detialData = props.detialData;
    const location = useLocation();
    if (!location.state) return <Redirect to={routes.productList} />;

    // console.log('detialData :>> ', detialData);
    // console.log('location :>> ', location);

    // 變數
    const { product } = location.state;
    const imgUrlAfter = [
        `${IMG_URL}/${product.img}${imgName.a0}`,
        `${IMG_URL}/${product.img}${imgName.a1}`,
        `${IMG_URL}/${product.img}${imgName.a2}`,
    ];
    const imgUrlBefore = [`${IMG_URL}/${product.img}${imgName.b0}`];

    // 渲染
    return (
        product && (
            <>
                <div className="product-detail">
                    <div className="row pd-1 pd-shared">
                        {/* 大張商品示意圖 */}
                        <div className="col-12 col-md-6 order-1">
                            <div className="img-big">
                                <div className="ratios">
                                    <img src={imgUrlAfter[0]} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* 商品詳細描述 */}
                        <div className="col-12 col-md-6 order-3 order-md-2 p-0 m-0 row align-content-start align-content-xxl-start">
                            <div className="col-12 my-xxl-4 align-self-start ">
                                <h1 className="mt-2 mb-md-2 mb-lg-1  product-name">
                                    {product.name}
                                </h1>
                                <ul className="d-flex align-items-center pb-1 pb-md-1 ul-unstyle">
                                    <ShowStar>{product.stars}</ShowStar>
                                    <p className="reviews-text ms-2">
                                        {product.review_counts}/ Reviews
                                    </p>
                                    <div className="wish-list ms-auto d-md-none">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                </ul>
                                <p className="mt-lg-0  detail-text mb-2">
                                    {product.descp}
                                </p>
                            </div>
                            <div className="col-12 row p-0 m-0 align-items-center justify-content-between">
                                <div className="col-auto  mb-xl-2">
                                    <div className="wish-list-2 mb-xl-1">
                                        <i className="far fa-heart"></i>
                                    </div>
                                    <p className="price my-1 mb-xxl-4">
                                        NT. {product.price}
                                    </p>
                                </div>
                                <div className="col-auto col-xl-12">
                                    <button className="add-cart">
                                        加入購物車
                                    </button>
                                    {/* react bootstrap Modals 加入成功 */}
                                </div>
                            </div>
                        </div>
                        {/* 小張圖片可更換商品示意圖 */}
                        <div className="col-8 col-md-4 order-2 order-md-3 row mt-3 img-list">
                            <div className="col p-1">
                                <div className="img-small">
                                    <div className="ratios ">
                                        <img src={imgUrlAfter[1]} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col p-1">
                                <div className="img-small">
                                    <div className="ratios ">
                                        <img src={imgUrlAfter[2]} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 熱銷排行 md 以上評論 標題*/}
                    <div className="my-5 recommend pd-2 pd-shared">
                        <RecommendCard />
                    </div>
                    {/* xs,sm 評論細節 */}
                    <div className="pt-md-3 pd-3 pd-shared">
                        <div className="review-title">
                            <div className="text-box">
                                <div className="phone-title p-0">
                                    <h3 className="text-center d-md-none">
                                        評論
                                    </h3>
                                    <p className="m-0 e-title text-center">
                                        CUSTOMER REVIEWS
                                    </p>
                                    <div>
                                        <img
                                            className="d-md-none"
                                            src={ImgIcon}
                                            alt=""
                                        />
                                    </div>

                                    <div className="d-md-none">
                                        <h3> {product.name}</h3>
                                        <ul className="d-flex justify-content-center align-items-center ul-unstyle">
                                            <li className="ps-0">
                                                <i className="far fa-star active"></i>
                                            </li>
                                            <li>
                                                <p className="m-0">
                                                    {' '}
                                                    {product.stars}/5
                                                </p>
                                            </li>
                                            <li>
                                                <p className="ms-2 reviews-text text-dark">
                                                    {product.review_counts}
                                                    則評論
                                                </p>
                                            </li>
                                        </ul>

                                        <div className="col-auto align-self-center mt-3">
                                            <button className="add-review">
                                                撰寫評論
                                            </button>
                                            {/* 判斷是否登入->導向登入會員 */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* md 以上評論細節 */}
                    <div className="d-none d-md-block pd-4 pd-shared">
                        <div className="review-box row justify-content-between mt-3 ">
                            <div className="col-auto">
                                <h3 className="mb-3 d-md-none">
                                    {product.name}
                                </h3>
                                <h3 className="m-0 text-center score ">
                                    {product.stars}/5
                                </h3>
                                <ul className="d-flex align-items-center justify-content-center pb-2 pb-md-1 mb-1 ul-unstyle">
                                    <ShowStar>{product.stars}</ShowStar>
                                </ul>
                                <p className="text-center review-count">
                                    {product.review_counts} 則評論
                                </p>
                            </div>
                            <div className="col-auto align-self-center">
                                <button className="add-review">撰寫評論</button>
                                {/* 判斷是否登入->導向登入會員 */}
                            </div>
                        </div>
                    </div>
                    {/* 評論區 */}
                    <ReviewDetail>{product.id}</ReviewDetail>
                    {/* Pagination */}
                    <Pagination />
                </div>
            </>
        )
    );
}

export default ProductDetailContent;
