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
                {/* <div className="row cart-body">
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
                {/* </div>
                </div>  */}
                <div className="row  my-1 card-house">
                    {display.map((v, i) => {
                        const img = `${IMG_URL2}/${v.products_img}/a1.jpg`;
                        // console.log('img :>> ', img);
                        return (
                            <div
                                className="col-6 col-md-4 mt-2 px-3 mb-2"
                                key={v.id}
                            >
                                <div className="card-border ">
                                    <div className="card-img position-relative">
                                        <div className="ratios">
                                            <img
                                                className="img-fluid"
                                                src={img}
                                                alt=""
                                            />
                                        </div>
                                        {v.status == 2 ? (
                                            <span className="position-absolute top-0  translate-middle p-2  border-light rounded-circle download-badge">
                                                <span className="badge bg-secondary">
                                                    已下載
                                                </span>
                                            </span>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="card-body text-start p-0 my-2 my-md-4">
                                        <label
                                            htmlFor={v.id}
                                            className="d-flex justify-content-between align-items-center"
                                        >
                                            <input
                                                className="form-check-input m-0"
                                                type="checkbox"
                                                value={v.id}
                                                id={v.id}
                                                checked={v.check}
                                                onChange={function (e) {
                                                    handleCheck(e, i);
                                                }}
                                            />
                                            <p className="card-title fw-bold">
                                                {v.name}
                                            </p>
                                        </label>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                ;{/* 選擇付款方式 */}
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
