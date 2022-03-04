import React from 'react';
import CartPaymentCard from './CartPaymentCard';
import Product from '../../images/film001.jpg';

function CartPayment(props) {
    return (
        <div className="cart-payment">
            <div className="container">
                {/* header 標題 */}
                <div className="row header">
                    <div className="col-4">
                        <h2>訂單確認</h2>
                    </div>
                    <div className="col-8 process">
                        <span className="bold">查看購物車</span>
                        <span className="bold"> &rarr; </span>
                        <span className="bold">訂單確認 </span>
                        <span className="light"> &rarr; </span>
                        <span className="light">訂單結算</span>
                    </div>
                </div>
                {/* 商品清單 title */}
                <div className="row cart-list">
                    <div className="col-1"></div>
                    <div className="col-8">
                        <h2>商品詳情</h2>
                    </div>

                    <div className="col-3">
                        <h2>價格</h2>
                    </div>
                </div>
                {/* 商品列表 */}
                <div className="row cart-body">
                    <div className="col-1"></div>
                    <div className="col-3  col-md-2">
                        <img src={Product} alt="" />
                    </div>
                    <div className="col-5 col-md-6">
                        <h2>米其林五星級</h2>
                        <p>Duis aliquam convallis nunc.</p>
                    </div>
                    <div className="col-2">
                        <h3>$99</h3>
                    </div>
                    <div className="col-1">
                        {/* <i className="fas fa-trash-alt icon"></i>
                        <i className="far fa-heart icon"></i> */}
                    </div>
                </div>
                {/* 商品列表 */}
                <div className="row cart-body">
                    <div className="col-1"></div>
                    <div className="col-3  col-md-2">
                        <img src={Product} alt="" />
                    </div>
                    <div className="col-5 col-md-6">
                        <h2>米其林五星級</h2>
                        <p>Duis aliquam convallis nunc.</p>
                    </div>
                    <div className="col-2">
                        <h3>$99</h3>
                    </div>
                    <div className="col-1">
                        {/* <i className="fas fa-trash-alt icon"></i>
                        <i className="far fa-heart icon"></i> */}
                    </div>
                </div>

                {/* 選擇付款方式 */}
                <div className="row cart-payment">
                    <div className="title">
                        <h2>付款方式</h2>
                    </div>
                    <div className="col-3 payment-left">
                        <div className="payment-card">
                            <i className="icon fab fa-cc-mastercard"></i>
                            <span>**** 1234</span>
                        </div>
                        <div className="payment-card">
                            <i className="icon fab fa-cc-visa"></i>
                            <span>**** 1234</span>
                        </div>
                        <div className="payment-card">
                            <i className="icon fab fa-cc-jcb"></i>
                            <span>**** 1234</span>
                        </div>
                    </div>
                    <div className="col-9 payment-right">
                        <CartPaymentCard />
                    </div>
                </div>

                {/* 總共 */}
                <div className="row cart-total justify-content-end">
                    <div className="col-4 price">
                        <h4>商品總共件數：</h4>
                        <h4>金額：</h4>
                        <h4>折扣：</h4>
                        <hr />
                        <h4>總金額：</h4>
                    </div>
                    <div className="col-3 price">
                        <h4>2件</h4>
                        <h4>NT198</h4>
                        <h4>NT0</h4>
                        <hr />
                        <h4>NT198</h4>
                    </div>
                </div>
                <div className="button">
                    <button
                        className="checkout"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        提交訂單
                    </button>
                    <button className="shopping" type="button">
                        返回購物車
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPayment;
