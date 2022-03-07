// 內建
import React, { useEffect, useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

// 第三方
import axios from 'axios';
import Slider from 'react-slick';

// 共用
import { routes } from '../../utils/routes';
import { API_URL } from '../../utils/config';
import { useProductsContext } from '../../utils/context/ProductsContext';

// 自己
import Card from './Card';

// 圖片
import cardDemo from '../../images/navbar-ex-1.jpg';
import decBar from '../../icons/dec-bar.png';

function RecommendCard(props) {
    // 狀態、勾子
    const match = useRouteMatch();
    const products = useProductsContext();
    const recommend = props.recommend.recommend;
    //設定slider
    var settings = {
        centerPadding: 30,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };
    // 渲染
    return (
        <>
            <div className="container">
                <div className="recommend mt-5">
                    <div className="recommend-title">
                        <div className="text-box">
                            <div className="phone-title">
                                <h3 className="">熱銷排行</h3>
                                <div className="mb-2">
                                    <img
                                        className="d-md-none"
                                        src={decBar}
                                        alt=""
                                    />
                                </div>
                                <p className="d-none d-md-block">
                                    暢銷色調值得您擁有 強化風格與色調
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="recommend-card row flex-nowrap overflow-scroll ">
                        <Slider {...settings}>
                            {recommend &&
                                recommend.map((v) => {
                                    const goTo = `${match.path}/detail/${v.id}`;
                                    return (
                                        <div
                                            key={v.id}
                                            className="col-6 col-md-3 solve-padding"
                                        >
                                            <Card
                                                className="mx-4"
                                                product={v}
                                                to={routes.productDetail(v.id)}
                                                onEvent={function () {
                                                    products.find(v);
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecommendCard;
