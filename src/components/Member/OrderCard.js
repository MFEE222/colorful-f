import React from 'react';
import ImgProduct from '../../images/product-img.jpeg';

function OrderCard(props) {
    return (
        <div class="container order-card">
            {/* <!-- header --> */}
            <div class="row order-card-header">
                <p class="col-auto order-card-time">2020/01/01 00:00</p>
                <p class="col-auto order-card-number">
                    訂單編號 <span>2135276BRUYSBNYK</span>
                </p>
            </div>
            {/* <!-- body --> */}
            <div class="row order-card-body">
                <div class="col-auto order-card-img">
                    <div class="ratio ratio-4x3">
                        <img src={ImgProduct} alt="" />
                    </div>
                </div>
                <div class="col row align-items-center align-content-center">
                    <h5 class="col-6 me-auto order-card-title">Product</h5>
                    <p class="col order-card-price">$10</p>
                    <p class="col-10 col-md-6 me-auto order-card-descp">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae omnis, distinctio deleniti culpa voluptate odio
                        perferendis quisquam ipsam, doloribus ab nulla hic
                        asperiores? Quaerat repellendus suscipit voluptate eum
                        itaque. Veniam.
                    </p>
                    {/* <!-- <p class="col-auto order-card-status">Pending</p> --> */}
                    {/* <!-- <div class="col align-self-end order-card-status">
                <button class="btn ms-auto d-block">
                    <span>Pending</span>
                </button>
            </div> --> */}
                </div>
                <hr />
                <div class="col align-self-end order-card-status">
                    <button class="btn ms-auto d-block">
                        <span>Pending</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
