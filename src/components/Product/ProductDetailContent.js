import React, { useEffect, useState } from 'react';
import { domain, asset } from 'utils/api';
import { useProductsContext } from 'contexts/ProductsContext';
import ShowStar from './ShowStar';

function ProductDetailContent(props) {
    const products = useProductsContext();

    const product = products.current;
    const [current, setCurrent] = useState('');

    const imgUrlAfter = [
        domain + asset.static.replace(':static', product.img + '/a1.jpg'),
        domain + asset.static.replace(':static', product.img + '/a2.jpg'),
        domain + asset.static.replace(':static', product.img + '/a3.jpg'),
    ];

    // const imgUrlBefore =
    //     domain + asset.static.replace(':static', product.img + '/b0.jpg');

    useEffect(() => {
        const img =
            domain + asset.static.replace(':static', product.img + '/a1.jpg');
        setCurrent(img);
    }, [products.current]);

    return (
        product && (
            <>
                <div className="product-detail">
                    <div className="row pd-1 pd-shared">
                        {/* 大張商品示意圖 */}
                        <div className="col-12 col-md-6 order-1">
                            <img
                                src={current}
                                alt=""
                                className="w-100 ratio-1x1"
                            />
                        </div>
                        {/* 商品詳細描述 */}
                        <div className="col-12 col-md-6 order-3 order-md-2 p-0 m-0 row align-content-start align-content-xxl-start">
                            <div className="col-12 my-xxl-4 align-self-start ">
                                <h1 className="mt-2 mb-md-2 mb-lg-1  product-name">
                                    {product.name}
                                </h1>
                                <ul className="d-flex align-items-center pb-1 pb-md-3 ul-unstyle">
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
                            <div className="col-12 row p-0 m-0 align-items-center justify-content-between mt-md-3">
                                <div className="col-auto  mb-xl-2">
                                    <div className="wish-list-2 mb-xl-1">
                                        <i
                                            className="far fa-heart"
                                            // onClick={function () {
                                            //     if (!auth.current) {
                                            //         auth.setShowLoginModal(
                                            //             true
                                            //         );
                                            //     }
                                            // }}
                                        ></i>
                                    </div>
                                    <p className="price my-1 mb-xxl-4">
                                        NT. {product.price}
                                    </p>
                                </div>
                                <div className="col-auto col-xl-12">
                                    <button
                                        className="add-cart"
                                        // onClick={function () {
                                        //     if (!auth.current) {
                                        //         auth.setShowLoginModal(true);
                                        //     }
                                        // }}
                                    >
                                        加入購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 小張圖片可更換商品示意圖 */}
                        <div className="col-12 col-md-6 order-2 order-md-3 row mt-3 img-list">
                            {imgUrlAfter.map((v, i) => {
                                return (
                                    <div className="col p-1 " key={i}>
                                        <div className="img-small">
                                            <div
                                                className="ratios "
                                                onClick={() => setCurrent(v)}
                                            >
                                                <img src={v} alt="" />
                                            </div>
                                        </div>
                                    </div>
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
