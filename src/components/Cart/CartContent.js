import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { routes } from '../../utils/routes';
import { API_GET_PRODUCT_RECOMMEND } from '../../utils/config';
import RecommendCard from '../Product/RecommendCard';

//圖片
import LoginPic from '../../images/film005.jpg';
import product from '../../images/film003.jpg';

//頁面

function CartContent(props) {
    // 狀態
    const [recommend, setRecommend] = useState([]); // 推薦
    // const [loading, setLoading] = useState(false); //載入顯示 ok

    //函數

    // const body = document.querySelector('body');
    // const modal = document.querySelector('.modal');
    // const modalButton = document.querySelector('.modal-button');
    // const closeButton = document.querySelector('.close-button');
    // const scrollDown = document.querySelector('.scroll-down');
    // let isOpened = false;

    // const openModal = () => {
    //     modal.classList.add('is-open');
    //     body.style.overflow = 'hidden';
    // };

    // const closeModal = () => {
    //     modal.classList.remove('is-open');
    //     body.style.overflow = 'initial';
    // };

    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > window.innerHeight / 3 && !isOpened) {
    //         isOpened = true;
    //         scrollDown.style.display = 'none';
    //         openModal();
    //     }
    // });

    // modalButton.addEventListener('click', openModal);
    // closeButton.addEventListener('click', closeModal);

    // document.onkeydown = (evt) => {
    //     evt = evt || window.event;

    //     //不知道是甚麼??
    //     // evt.keyCode === 27 ? closeModal() : false;
    // };

    // 掛載生命週期
    useEffect(function () {
        (async function () {
            const rank = await axios.get(API_GET_PRODUCT_RECOMMEND);
            setRecommend(rank.data);
        })();
    }, []);
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
                <div className="row cart-body">
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
                            <img src={product} alt="" />
                        </div>
                    </div>
                    <div className="col row ps-0 align-items-center align-content-center">
                        <h2>米其林五星級</h2>
                        <p>
                            Duis aliquam convallis nunc.
                        </p>
                    </div>
                    <div className="col-2 me-auto  d-md-block">
                        <h3>$99</h3>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-trash-alt icon"></i>
                        <i className="far fa-heart icon"></i>
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
                        <h4>1件</h4>
                        <h4>NT99</h4>
                        <h4>NT0</h4>
                        <hr />
                        <h4 className="payment-price">NT99</h4>
                    </div>
                </div>
                <div className="button">
                    <button
                        className="checkout"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        前往結帳
                    </button>
                    
                    <button className="shopping" type="button">
                        繼續購物
                    </button>
                </div>
                {/* 推薦區 */}
                <RecommendCard recommend={recommend} />
            </div>

            
            {/* 引入login */}
            {/* <div className="scroll-down">
                SCROLL DOWN
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M16 3C8.832031 3 3 8.832031 3 16s5.832031 13 13 13 13-5.832031 13-13S23.167969 3 16 3zm0 2c6.085938 0 11 4.914063 11 11 0 6.085938-4.914062 11-11 11-6.085937 0-11-4.914062-11-11C5 9.914063 9.914063 5 16 5zm-1 4v10.28125l-4-4-1.40625 1.4375L16 23.125l6.40625-6.40625L21 15.28125l-4 4V9z" />
                </svg>
            </div>
            <div className="container"></div>
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-left">
                        <h1 className="modal-title">Welcome!</h1>
                        <p className="modal-desc">
                            Fanny pack hexagon food truck, street art waistcoat
                            kitsch.
                        </p>
                        <div className="input-block">
                            <label for="email" className="input-label">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="input-block">
                            <label for="password" className="input-label">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="modal-buttons">
                            <Link to="" className="">
                                Forgot your password?
                            </Link>
                            <button className="input-button">Login</button>
                        </div>
                        <p className="sign-up">
                            Don't have an account? <Link to="#">Sign up now</Link>
                        </p>
                    </div>
                    <div className="modal-right">
                        <img
                            src={LoginPic}
                            alt=""
                        />
                    </div>
                    <button className="icon-button close-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                        >
                            <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
                        </svg>
                    </button>
                </div>
                <button className="modal-button">Click here to login</button>
            </div> */}
        </div>
    );
}

export default CartContent;
