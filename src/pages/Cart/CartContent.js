import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import { routes } from '../../utils/routes';
import { API_GET_PRODUCT_RECOMMEND } from '../../utils/config';
import RecommendCard from '../../components/Product/RecommendCard';

// Context
import { useCartContext } from '../../utils/context/CartContext';

//圖片
import { IMG_URL2 } from '../../utils/config';
import LoginPic from '../../images/film005.jpg';
import product from '../../images/film003.jpg';

//頁面
// API_GET_PRODUCTS
// option { ids, limit, offset }
function CartContent(props) {
    // Context
    const cart = useCartContext();
    // console.log('cart :>> ', cart);

    // 狀態
    const [recommend, setRecommend] = useState([]); // 推薦

    //函數

    // 掛載生命週期
    useEffect(function () {
        (async function () {
            const rank = await axios.get(API_GET_PRODUCT_RECOMMEND);
            setRecommend(rank.data);
        })();
    }, []);

    // 渲染
    return (
        <div className="cart-content">
            <div className="container">
                {/* header 標題 */}
                <div className="row header">
                    <div className="col-12 col-md-4">
                        <h2>購物車</h2>
                    </div>
                    <div className="col-12 col-md-8 process">
                        <span className="bold">查看購物車</span>
                        <span className="light"> &rarr; </span>
                        <span className="light">訂單確認 </span>
                        <span className="light"> &rarr; </span>
                        <span className="light">訂單結算</span>
                    </div>
                </div>
                {/* 商品清單 title */}
                <div className="row cart-list">
                    <div className="col-1">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="all"
                            id=""
                        />
                    </div>
                    <div className="col-8">
                        <h2>商品列表</h2>
                    </div>
                    <div className="col-3">
                        <h2>價格</h2>
                    </div>
                </div>
                {/* 商品列表 */}
                {cart.current &&
                    cart.current.map(function (e) {
                        return (
                            <div className="row cart-body" key={e.id}>
                                <div className="col-1">
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                        name="c"
                                        id=""
                                    />
                                </div>
                                <div className="col-auto  col-md-10 review-card-img me-4">
                                    <div className="ratios">
                                        <img
                                            src={
                                                IMG_URL2 +
                                                '/' +
                                                e.img +
                                                '/a1.jpg'
                                            }
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col row ps-0 align-items-center align-content-center">
                                    <h2>{e.name}</h2>
                                    <p>{e.descp}</p>
                                </div>
                                <div className="col-2 me-auto  d-md-block">
                                    <h3>{e.price}</h3>
                                </div>
                                <div className="col-1">
                                    <i
                                        className="fas fa-trash-alt icon"
                                        onClick={function () {
                                            cart.handleRemove(e);
                                        }}
                                    ></i>
                                    {/* <i
                                        className="far fa-heart icon"
                                        onClick={function () {
                                            cart.handleAdd(e);
                                        }}
                                    ></i> */}
                                </div>
                            </div>
                        );
                    })}

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
                        <h4>1件</h4>
                        <h4>NT99</h4>
                        <h4>NT0</h4>
                        <hr />
                        <h4 className="payment-price">NT99</h4>
                    </div>
                </div>
                <div className="button">
                    <LinkContainer to={routes.checkout}>
                        <button
                            className="checkout"
                            type="button"
                            // data-bs-toggle="modal"
                            // data-bs-target="#staticBackdrop"
                        >
                            前往結帳
                        </button>
                    </LinkContainer>

                    <LinkContainer to={routes.product}>
                        <button className="shopping" type="button">
                            繼續購物
                        </button>
                    </LinkContainer>
                </div>
                {/* 推薦區 */}
                <RecommendCard recommend={recommend} />
            </div>
        </div>
    );
}

export default CartContent;
