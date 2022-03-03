import React from 'react';
import { Link } from 'react-router-dom';
import CartPic from '../../images/navbar-ex.jpg';
import { routes } from '../../utils/routes';
import CartContent from './CartContent';

function CartCard(props) {
    return (
        // 首頁購物車彈跳視窗

        <div className="shopping-cart">
            <div className="container">
                <div className="row cart-header">
                    <div className="col-6">
                        <h5 className="title">購物車</h5>
                    </div>
                    <div className="col-6">
                        <p className="total-porduct">3件商品</p>
                    </div>
                </div>

                <div className="row cart-card">
                    <div className="col-4">
                        <img className="card-img" src={CartPic} alt="" />
                    </div>
                    <div className="col-6">
                        <h3 className="card-name">瑪莉蓬蓬裙</h3>
                        <p className="card-price">$76</p>
                    </div>
                </div>
                <div className="row cart-card">
                    <div className="col-4">
                        <img className="card-img" src={CartPic} alt="" />
                    </div>
                    <div className="col-6">
                        <h3 className="card-name">瑪莉蓬蓬裙</h3>
                        <p className="card-price">$76</p>
                    </div>
                </div>
                <div className="row cart-card">
                    <div className="col-4">
                        <img className="card-img" src={CartPic} alt="" />
                    </div>
                    <div className="col-6">
                        <h3 className="card-name">瑪莉蓬蓬裙</h3>
                        <p className="card-price">$76</p>
                    </div>
                </div>
                <div className="row total-price">
                    <div className="col-6 text">
                        Total
                    </div>
                    <div className="col-6 price">
                        $228
                    </div>
                </div>

                <Link to={CartContent} type="submit" className="cart-btn">
                    查看購物車
                </Link>
            </div>
        </div>
    );
}

export default CartCard;
