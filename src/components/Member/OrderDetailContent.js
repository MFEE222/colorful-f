import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import { routes } from 'utils/routes';
import ImgProduct from 'images/product-img.jpg';

//共用
import FilterBar from './FilterBar';
import StepProgressBar from './StepProgressBar';
// import { useOrderContext } from 'contexts/OrderContext';

function OrderDetailContent(props) {
    // const order = useOrderContext();

    return (
        <div className="col-12 member-order-detail-main">
            {/* <!-- filter bar --> */}
            <div className="filter my-3">
                <div className="filter-box d-flex">
                    <ul className="sort-series p-0">
                        <li
                            className="active py-2 px-3"

                            // console.log('1 :>> ', statusId);
                        >
                            全部
                        </li>
                        <li className="py-2 px-3 ">未付款</li>
                        <li className="py-2 px-3">已付款</li>
                        <li className="py-2 px-3 ">完成</li>
                        <li className="py-2 px-3 ">不成立</li>
                    </ul>
                </div>
                <div className="line d-none d-md-block"></div>
            </div>

            <div className="order-detail-wall">
                {/* <!-- step progress bar --> */}
                <StepProgressBar />
                {/* <!-- 訂購商品卡片 --> */}
                <div className="order-detail-card">
                    <div className="row order-detail-card-body">
                        <div className="col-auto order-detail-card-img">
                            <div className="ratios">
                                <img src={ImgProduct} alt="" />
                            </div>
                        </div>
                        <div className="col row align-items-center align-content-center">
                            <h5 className="col-12 me-auto order-detail-card-title">
                                Product
                            </h5>
                            <p className="col-9 col-md-6 me-auto order-detail-card-descp">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae omnis, distinctio
                                deleniti culpa voluptate odio perferendis
                                quisquam ipsam, doloribus ab nulla hic
                                asperiores? Quaerat repellendus suscipit
                                voluptate eum itaque. Veniam.
                            </p>
                            <p className="col order-detail-card-price">$10</p>
                        </div>
                    </div>
                </div>
                <div className="order-detail-card">
                    <div className="row order-detail-card-body">
                        <div className="col-auto order-detail-card-img">
                            <div className="ratios">
                                <img src={ImgProduct} alt="" />
                            </div>
                        </div>
                        <div className="col row align-items-center align-content-center">
                            <h5 className="col-12 me-auto order-detail-card-title">
                                Product
                            </h5>
                            <p className="col-9 col-md-6 me-auto order-detail-card-descp">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae omnis, distinctio
                                deleniti culpa voluptate odio perferendis
                                quisquam ipsam, doloribus ab nulla hic
                                asperiores? Quaerat repellendus suscipit
                                voluptate eum itaque. Veniam.
                            </p>
                            <p className="col order-detail-card-price">$10</p>
                        </div>
                    </div>
                </div>

                {/* <!-- 訂單細節資訊 --> */}
                <div className="container-fluid order-detail-info">
                    <div className="row flex-row-reverse">
                        {/* <!-- 金額小計 --> */}
                        <div className="col-12 col-lg-6 pe-0 row jsutify-content-between info-price">
                            <div className="col ps-0 info-item">
                                <div className="">商品小計</div>
                                <div className="">折扣</div>
                                <div className="">訂單金額</div>
                                <div className="">付款方式</div>
                            </div>
                            <div className="col-auto info-unit">
                                <div className="">NT$</div>
                                <div className="">NT$</div>
                                <div className="">NT$</div>
                                <div className=""></div>
                            </div>
                            <div className="col-auto pe-0 info-data">
                                <div className="product-subtotal">40</div>
                                <div className="discount-price">5</div>
                                <div className="order-total">35</div>
                                <div className="payment-method">Apple Pay</div>
                            </div>
                        </div>
                        {/* <!-- 訂單資訊 --> */}
                        <div className="col-12 col-lg-6 ps-0 row justify-content-center info-status">
                            <div className="col ps-0 info-item">
                                <div className="">訂單編號</div>
                                <div className="">成立訂單</div>
                                <div className="">付款成功</div>
                                <div className="">已完成</div>
                            </div>
                            <div className="col-auto pe-0 info-data">
                                <div className="number">211112VRUVYNS7K</div>
                                <div className="date">2022-01-18 13:16</div>
                                <div className="date">2022-01-19 19:22</div>
                                <div className="date">2022-01-19 19:45</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 聯絡客服、評論 --> */}
                    <div className="row p-0 order-detail-button">
                        <div className="col-auto p-0">
                            <button className="btn">聯絡客服</button>
                            <button className="btn">評論</button>
                            <LinkContainer to={routes.member.order.self}>
                                <button className="btn">返回</button>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailContent;
