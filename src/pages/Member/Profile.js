import React from 'react';

import Main from '../../components/Member/Main';
import OrderContent from '../../components/Member/ProfileContent';
import SideBarLeft from '../../components/Member/SideBarLeft';

function Profile(props) {
    return (
        <>
            <Main>
                <SideBarLeft />
                <OrderContent />
            </Main>
        </>
    );
}

export default Profile;
