import React from 'react';
import ImgProduct from '../../images/product-img.jpeg';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { routes } from '../../utils/routes';
import FilterBar from './FilterBar';

// 先檢查 url 是否跟 productDetail.id 一致

// url : /product/detail/3
// 點擊卡片進來 (卡片本身就有商品資料) setProductDetail

// 直接 url (第一個先去 produtcs, 第二個再去發 axios)

// axios request id = 3

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
                    <div className="col-auto review-card-img">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col row align-items-center align-content-center">
                        <h4 className="col-8 col-md-8 me-auto">FOOD-A1</h4>
                        <p className="col-4 col-md-4 review-card-text ">
                            2件商品
                        </p>
                        <p className="col-5 col-md-6 me-auto">
                            色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力
                        </p>
                        <Link
                            className="btn ms-auto d-block"
                            to={routes.reviewDetail}
                        >
                            <span>編輯</span>
                        </Link>
                    </div>
                </div>
                <div className="row review-card">
                    <div className="col-auto review-card-img">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col row align-items-center align-content-center">
                        <h4 className="col-8 col-md-8 me-auto">FOOD-A1</h4>
                        <p className="col-4 col-md-4 review-card-text ">
                            2件商品
                        </p>
                        <p className="col-5 col-md-6 me-auto">
                            色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力
                        </p>
                        <Link
                            className="btn ms-auto d-block"
                            to={routes.reviewDetail}
                        >
                            <span>編輯</span>
                        </Link>
                    </div>
                </div>
                <div className="row review-card">
                    <div className="col-auto review-card-img">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col row align-items-center align-content-center">
                        <h4 className="col-8 col-md-8 me-auto">FOOD-A1</h4>
                        <p className="col-4 col-md-4 review-card-text ">
                            2件商品
                        </p>
                        <p className="col-5 col-md-6 me-auto">
                            色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力色彩豐富、溫暖且對比自然為人像時尚和大自然攝引影，帶來生命力
                        </p>
                        <Link
                            className="btn ms-auto d-block"
                            to={routes.reviewDetail}
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
