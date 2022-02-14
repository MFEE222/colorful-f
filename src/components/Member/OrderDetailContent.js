import React from 'react';
import ImgProduct from '../../images/product-img.jpeg';

import FilterBar from './FilterBar';
import StepProgressBar from './StepProgressBar';

function OrderDetailContent(props) {
    return (
        <div class="col-12 col-md-10 member-order-detail-main">
            {/* <!-- filter bar --> */}
            <FilterBar />

            <div class="order-detail-wall">
                {/* <!-- step progress bar --> */}
                <StepProgressBar />
                {/* <!-- 訂購商品卡片 --> */}
                <div class="order-detail-card">
                    <div class="row order-detail-card-body">
                        <div class="col-auto order-detail-card-img">
                            <div class="ratios">
                                <img src={ImgProduct} alt="" />
                            </div>
                        </div>
                        <div class="col row align-items-center align-content-center">
                            <h5 class="col-12 me-auto order-detail-card-title">
                                Product
                            </h5>
                            <p class="col-9 col-md-6 me-auto order-detail-card-descp">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae omnis, distinctio
                                deleniti culpa voluptate odio perferendis
                                quisquam ipsam, doloribus ab nulla hic
                                asperiores? Quaerat repellendus suscipit
                                voluptate eum itaque. Veniam.
                            </p>
                            <p class="col order-detail-card-price">$10</p>
                        </div>
                    </div>
                </div>
                <div class="order-detail-card">
                    <div class="row order-detail-card-body">
                        <div class="col-auto order-detail-card-img">
                            <div class="ratios">
                                <img src={ImgProduct} alt="" />
                            </div>
                        </div>
                        <div class="col row align-items-center align-content-center">
                            <h5 class="col-12 me-auto order-detail-card-title">
                                Product
                            </h5>
                            <p class="col-9 col-md-6 me-auto order-detail-card-descp">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae omnis, distinctio
                                deleniti culpa voluptate odio perferendis
                                quisquam ipsam, doloribus ab nulla hic
                                asperiores? Quaerat repellendus suscipit
                                voluptate eum itaque. Veniam.
                            </p>
                            <p class="col order-detail-card-price">$10</p>
                        </div>
                    </div>
                </div>

                {/* <!-- 訂單細節資訊 --> */}
                <div class="container-fluid order-detail-info">
                    <div class="row flex-row-reverse">
                        {/* <!-- 金額小計 --> */}
                        <div class="col-12 col-lg-6 pe-0 row jsutify-content-between info-price">
                            <div class="col ps-0 info-item">
                                <div class="">商品小計</div>
                                <div class="">折扣</div>
                                <div class="">訂單金額</div>
                                <div class="">付款方式</div>
                            </div>
                            <div class="col-auto info-unit">
                                <div class="">NT$</div>
                                <div class="">NT$</div>
                                <div class="">NT$</div>
                                <div class=""></div>
                            </div>
                            <div class="col-auto pe-0 info-data">
                                <div class="product-subtotal">40</div>
                                <div class="discount-price">5</div>
                                <div class="order-total">35</div>
                                <div class="payment-method">Apple Pay</div>
                            </div>
                        </div>
                        {/* <!-- 訂單資訊 --> */}
                        <div class="col-12 col-lg-6 ps-0 row justify-content-center info-status">
                            <div class="col ps-0 info-item">
                                <div class="">訂單編號</div>
                                <div class="">成立訂單</div>
                                <div class="">付款成功</div>
                                <div class="">已完成</div>
                            </div>
                            <div class="col-auto pe-0 info-data">
                                <div class="number">211112VRUVYNS7K</div>
                                <div class="date">2022-01-18 13:16</div>
                                <div class="date">2022-01-19 19:22</div>
                                <div class="date">2022-01-19 19:45</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 聯絡客服、評論 --> */}
                    <div class="row p-0 order-detail-button">
                        <div class="col-auto p-0">
                            <button class="btn">聯絡客服</button>
                            <button class="btn">評論</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailContent;
