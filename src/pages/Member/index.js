import React from 'react';
// utils
import Navbar from '../../utils/Navbar';
import Breadcrumb from '../../utils/Breadcrumb';
import Footer from '../../utils/Footer';
// main
import Profile from './Profile';
import Order from './Order';
import OrderDetail from './OrderDetail';
// import Download from './Download';
// import Review from './Review';
// import Wishlist from './Wishlist';

// 會員主頁（巢狀路由 or 單純函式解決）
function Member(props) {
    return (
        <>
            <Navbar />
            <Breadcrumb />

            {/* <Profile /> */}
            {/* <Order /> */}
            <OrderDetail />

            <Footer />
        </>
    );
}

export default Member;
