import React from 'react';

import Main from '../../components/Member/Main';
import OrderContent from '../../components/Member/OrderContent';
import SideBarLeft from '../../components/Member/SideBarLeft';

function Order(props) {
    return (
        <>
            <Main>
                <SideBarLeft />
                <OrderContent />
            </Main>
        </>
    );
}

export default Order;
