import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes, route } from 'utils/routes';

import CartContent from './CartContent';
import CartPayment from './CartPayment';

function Cart(props) {
    return (
        <>
            <Routes>
                {/* 結帳付款頁 */}
                <Route
                    path={route(routes.cart.checkout).pop()}
                    element={<CartPayment />}
                ></Route>
                {/* 購物車主頁 */}
                <Route index element={<CartContent />}></Route>
            </Routes>
        </>
    );
}

export default Cart;
