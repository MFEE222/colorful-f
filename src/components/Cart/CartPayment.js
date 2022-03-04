import React from 'react';
import CartPaymentCard from './CartPaymentCard';

function CartPayment(props) {
    return (
        <div className="cart-payment">
            <div className="container">
                <div className="title">
                    <h2>訂單明細</h2>
                </div>
                <div className="row cart-haeder">
                    <h2>Shopping Addres</h2>

                    <input
                        className="col-6 shopping"
                        type="text"
                        name="name"
                        placeholder="Name"
                    />

                    <div>
                        <input
                            className="col-6 shopping"
                            type="text"
                            name="name"
                            placeholder="E-mail"
                        />
                    </div>
                </div>
                <div className="row cart-body">
                    <div className="col-8 body-left">
                        <CartPaymentCard />
                    </div>
                    <div className="col-4 body-right"></div>
                </div>
            </div>
        </div>
    );
}

export default CartPayment;
