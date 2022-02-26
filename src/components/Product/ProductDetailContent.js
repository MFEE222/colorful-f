// 內建庫
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Redirect } from 'react-router-dom';

// 第三方庫
import axios from 'axios';
import ReactBeforeAfter from 'react-before-after';
// 共用
import { IMG_URL, API_URL } from '../../utils/config';
import { useProductsContext } from '../../utils/context/ProductsContext';

// 自己
import { imgName } from '../../utils/imageName';
import ShowStar from './ShowStar';

// 圖片
import DemoImgProduct from '../../images/navbar-ex-1.jpg';
import DemoImgFigure from '../../images/portrait01.jpg';
import ImgIcon from '../../icons/dec-bar.png';
import { routes } from '../../utils/routes';

function ProductDetailContent(props) {
    // 狀態、勾子
    const [current, setCurrent] = useState(''); //圖片更換
    const products = useProductsContext();
    const product = products.current; //目前特定商品
    const imgUrlAfter = [
        `${IMG_URL}/${product.img}${imgName.a0}`,
        `${IMG_URL}/${product.img}${imgName.a1}`,
        `${IMG_URL}/${product.img}${imgName.a2}`,
    ];
    const imgUrlBefore = `${IMG_URL}/${product.img}${imgName.b0}`;

    //didMount
    useEffect(
        function () {
            setCurrent(`${IMG_URL}/${product.img}${imgName.a0}`);
        },
        [products.current]
    );

    // 渲染
    return (
        product && (
            <>
                <div className="product-detail">
                    <div className="row pd-1 pd-shared">
                        {/* 大張商品示意圖 */}
                        <div className="col-12 col-md-6 order-1">
                            <ReactBeforeAfter
                                className="ratio ratio-4x3"
                                beforeSrc={imgUrlBefore}
                                // afterSrc={imgUrlAfter[0]}
                                afterSrc={current}
                            />
                            {/* <ReactBeforeSliderComponent */}
                            {/* className="ratio ratio-4x3" firstImage={FIRST_IMAGE}
                            secondImage={SECOND_IMAGE} */}
                            {/* />  */}
                            {/* <img src={imgUrlAfter[0]} alt="" /> */}
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
                                    {/*//TODO:react bootstrap Modals 加入成功 */}
                                </div>
                            </div>
                        </div>
                        {/* 小張圖片可更換商品示意圖 */}
                        <div className="col-6 col-md-3 order-2 order-md-3 row mt-3 img-list">
                            {imgUrlAfter.map((v) => {
                                return (
                                    <>
                                        <div className="col p-1">
                                            <div className="img-small">
                                                <div
                                                    className="ratios "
                                                    onClick={function () {
                                                        setCurrent(v);
                                                        console.log(
                                                            'current :>> ',
                                                            current
                                                        );
                                                    }}
                                                >
                                                    <img src={v} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    );
}

export default ProductDetailContent;
