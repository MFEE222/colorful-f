import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import CartPaymentCard from '../../components/Cart/CartPaymentCard';
import Product from '../../images/film001.jpg';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { routes } from '../../utils/routes';
import axios from 'axios';
import { API_GET_MEMBER_REVIEW, IMG_URL2 } from '../../utils/config';
import { Button, Modal } from 'react-bootstrap';
import ImgProduct from '../../images/product-img.jpeg';

function CartPayment(props) {
    const [display, setDisplay] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <div className="cart-payment">
            <div className="container">
                {/* header 標題 */}
                <div className="row header">
                    <div className="col-12 col-md-4">
                        <h2>訂單確認</h2>
                    </div>
                    <div className="col-12 col-md-8 process">
                        <span className="bold">查看購物車</span>
                        <span className="bold"> &rarr; </span>
                        <span className="bold">訂單確認 </span>
                        <span className="light"> &rarr; </span>
                        <span className="light">訂單結算</span>
                    </div>
                </div>
                {/* 商品清單 title */}
                <div className="row cart-list">
                    <div className="col-8">
                        <h2>商品詳情</h2>
                    </div>

                    <div className="col-4 price">
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
                        <i className="fas fa-trash-alt icon"></i>
                        <i className="far fa-heart icon"></i>
                </div>
                </div>  */}
                {/* {display.map((oneReview) => {
                    const goTo = `${routes.reviewDetail}/${oneReview.id}`;
                    const img = `${IMG_URL2}/${oneReview.products_img}/a1.jpg`;
                    return (
                        <> */}
                <div className="d-flex review-card">
                    <div className="col-auto  col-md-10 review-card-img me-4">
                        <div className="ratios">
                            <img src={ImgProduct} alt="" />
                        </div>
                    </div>
                    <div className="col row ps-0 align-items-center align-content-center">
                        <h5 className="col-8 col-md-8 title mt-3 mt-md-0">
                            商品名
                        </h5>
                        <h3 className="col-2 me-auto  d-md-block">$99</h3>
                        {/* <p className="col-4 col-md-4 review-card-text ">
                            2件商品
                        </p> */}
                        <p className="col-md-6 me-auto  d-md-block content">
                            商品描述
                        </p>

                        <p className="d-md-none "></p>
                    </div>
                </div>
                {/* </>
                    );
                })} */}
                {/* 選擇付款方式 */}
                <div className="row cart-payment">
                    <div className="title">
                        <h2>付款方式</h2>
                    </div>
                    <div className="col-12 col-lg-3 payment-left">
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
                    <div className="col-12 col-lg-9 payment-right">
                        <CartPaymentCard />
                    </div>
                </div>
                {/* 總共 */}
                <div className="row cart-total justify-content-end">
                    <div className="col-6 col-lg-4 price">
                        <h4>商品總共件數：</h4>
                        <h4>金額：</h4>
                        <h4>折扣：</h4>
                        <hr />
                        <h4>總金額：</h4>
                    </div>
                    <div className="col-6 col-lg-3 price">
                        <h4>2件</h4>
                        <h4>NT198</h4>
                        <h4>NT0</h4>
                        <hr />
                        <h4 className="payment-price">NT198</h4>
                    </div>
                </div>
                <div className="button">
                    <button
                        className="checkout"
                        type="button"
                        // data-bs-toggle="modal"
                        // data-bs-target="#staticBackdrop"
                        // onClick={() => setModalShow(true)}
                    >
                        提交訂單
                    </button>

                    <LinkContainer to={routes.cart}>
                        <button className="shopping" type="button">
                            返回購物車
                        </button>
                    </LinkContainer>
                </div>
            </div>
        </div>
    );
}

export default CartPayment;
