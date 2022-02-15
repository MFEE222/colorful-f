import React from 'react';
// https://www.sailpoint.com/identity-library/difference-between-authentication-and-authorization/

import Navbar from '../../utils/Navbar';
import Footer from '../../utils/Footer';

import Signin from './Signin';
import Signup from './Signup';
import Forgot from './Forgot';

function Authentication(props) {
    return (
        <>
            <Navbar />

            {/* <Signin /> */}
            {/* <Signup /> */}
            <Forgot />

            <Footer />
        </>
    );
}

export default Authentication;
