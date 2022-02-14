import React from 'react';

import Main from '../../components/Member/Main';
import SideBarLeft from '../../components/Member/SideBarLeft';
import OrderDetailContent from '../../components/Member/OrderDetailContent';

function OrderDetail(props) {
    return (
        <Main>
            <SideBarLeft />
            <OrderDetailContent />
        </Main>
    );
}

export default OrderDetail;
