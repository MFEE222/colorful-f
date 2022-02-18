import React from 'react';
import ImgProduct from '../../images/product-img.jpeg';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { routes } from '../../utils/routes';
import FilterBar from './FilterBar';

function ReviewContent(props) {
    const match = useRouteMatch();

    return (
        <div className="col-12 col-md-10 member-comment">
            <div className="container">
                {/* filterbar */}
                <div className="filter mt-sm-5 my-sm-3 my-md-5">
                    <div className="filter-box d-flex">
                        <ul className="sort-series p-0">
                            <li className="active py-1 px-2 py-md-2 px-md-3">
                                全部
                            </li>
                            <li className="py-1 px-2 py-md-2 px-md-3">
                                未評論
                            </li>
                            <li className="py-1 px-2 py-md-2 px-md-3">
                                已評論
                            </li>
                        </ul>
                    </div>
                    <div className="line"></div>
                </div>
                {/* card */}
                <div className="row review-card">
                    <div class="col-auto review-card-img">
                        <img src={ImgProduct} alt="" />
                    </div>
                    <div class="col row align-items-center align-content-center">
                        <h4 class="col-8 col-md-8 me-auto">FOOD-A1</h4>
                        <p class="col-4 col-md-4 review-card-text ">2件商品</p>
                        <p class="col-5 col-md-6 me-auto">
                            色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力
                        </p>
                        <Link
                            className="btn ms-auto d-block"
                            to={routes.member + routes.mailDetail}
                        >
                            <span>編輯</span>
                        </Link>
                    </div>
                </div>
                <div className="row review-card">
                    <div class="col-auto review-card-img">
                        <img src={ImgProduct} alt="" />
                    </div>
                    <div class="col row align-items-center align-content-center">
                        <h4 class="col-8 col-md-8 me-auto">FOOD-A1</h4>
                        <p class="col-4 col-md-4 review-card-text ">2件商品</p>
                        <p class="col-5 col-md-6 me-auto">
                            色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力
                        </p>
                        <Link
                            className="btn ms-auto d-block"
                            to={routes.member + routes.mailDetail}
                        >
                            <span>編輯</span>
                        </Link>
                    </div>
                </div>
                <div className="row review-card">
                    <div class="col-auto review-card-img">
                        <img src={ImgProduct} alt="" />
                    </div>
                    <div class="col row align-items-center align-content-center">
                        <h4 class="col-8 col-md-8 me-auto">FOOD-A1</h4>
                        <p class="col-4 col-md-4 review-card-text ">2件商品</p>
                        <p class="col-5 col-md-6 me-auto">
                            色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力
                        </p>
                        <Link
                            className="btn ms-auto d-block"
                            to={routes.member + routes.reviewDetail}
                        >
                            <span>編輯</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewContent;
