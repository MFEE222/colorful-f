import React from 'react';

import Main from '../../components/Member/Main';
import ProfileContent from '../../components/Member/ProfileContent';
import SideBarLeft from '../../components/Member/SideBarLeft';

function Profile(props) {
    return (
        <>
            <Main>
                <SideBarLeft />
                <ProfileContent />
            </Main>
        </>
    );
}

export default Profile;
