import React from 'react';
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
            {/* <Profile /> */}
            {/* <Order /> */}
            <OrderDetail />
        </>
    );
}

export default Member;
