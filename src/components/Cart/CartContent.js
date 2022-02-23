import React from 'react';

import CartCard from './CartCard';
import CartSummaryCard from './CartSummaryCard';

function CartContent(props) {
    return (
        <>
            <div className="container-fluid">
                {/* <!-- navbar --> */}
                <p className="text-style">SHOPPING CART</p>
                <div className="row">
                    <div className="col-md-7">
                        {/* <!-- member sidebar left / xs: col-12 / md: col-2 --> */}
                        <CartCard />
                    </div>

                    <div className="col-md-1"></div>
                    <div className="col-md-1">
                        {/* <!-- member main / xs: col-12 / md: col-10 or col-8 --> */}
                        <CartSummaryCard />
                    </div>
                    <div>
                        <p className="text-center">Total Price :</p>
                    </div>
                    <div>
                        <p className="text-center">$30</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartContent;
