import React from 'react';
import { Link } from 'react-router-dom';
import CartPic from '../../images/navbar-ex.jpg';

function CartCard(props) {
    return (
        // 首頁購物車彈跳視窗

        <div className="shopping-cart">
            <div className="container">
                <div className="cart-header">
                    <div className="title">
                        <h5 className="total">共有2件商品</h5>
                    </div>
                </div>
                <div className="cart-body">
                    <div className="row cart-item">
                        <div className="col-4">
                            <img className="cart-img" src={CartPic} alt="" />
                        </div>
                        <div className="col-8">
                            <h3 className="item-name">瑪莉蓬蓬裙</h3>
                            <p className="item-price">$76</p>
                        </div>
                    </div>
                    <div className="row cart-item">
                        <div className="col-4">
                            <img className="cart-img" src={CartPic} alt="" />
                        </div>
                        <div className="col-8">
                            <h3 className="item-name">瑪莉蓬蓬裙</h3>
                            <p className="item-price">$76</p>
                        </div>
                    </div>
                    <div className="row cart-item">
                        <div className="col-4">
                            <img className="cart-img" src={CartPic} alt="" />
                        </div>
                        <div className="col-8">
                            <h3 className="item-name">瑪莉蓬蓬裙</h3>
                            <p className="item-price">$76</p>
                        </div>
                    </div>
                </div>
                <div className="cart-btn">
                    <button>查看購物車</button>
                </div>
            </div>
        </div>
    );
}

export default CartCard;
