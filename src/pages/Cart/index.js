import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../utils/routes';

import CartContent from './CartContent';
import CartPayment from './CartPayment';

function Cart(props) {
    return (
        <>
            <Switch>
                {/* 結帳付款頁 */}
                <Route path={routes.checkout}>
                    <CartPayment />
                </Route>
                {/* 購物車主頁 */}
                <Route path={routes.cart}>
                    <CartContent />
                </Route>
            </Switch>
        </>
    );
}

export default Cart;
