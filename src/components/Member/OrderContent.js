import React from 'react';

import FilterBar from './FilterBar';
import OrderCard from './OrderCard';

function OrderContent(props) {
    return (
        <div className="col-12 col-md-10 member-order-main">
            <FilterBar />

            {[1, 2, 3].map(function (e) {
                return <OrderCard />;
            })}
        </div>
    );
}

export default OrderContent;
