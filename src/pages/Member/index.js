import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import Main from '../../components/Member/Main';
import SideBarLeft from '../../components/Member/SideBarLeft';

import { routes } from '../../utils/routes';
import Profile from './Profile';
import Order from './Order';
import OrderDetail from './OrderDetail';
import Download from './Download';
import Review from './Review';
import ReviewDetail from './ReviewDetail';
import WishList from './WishList';
import Mail from './Mail';
import MailDetail from './MailDetail';
import Payment from './Payment';
import Collect from './Collect';

// 會員主頁（巢狀路由 or 單純函式解決）
function Member(props) {
    const match = useRouteMatch();

    return (
        <>
            <Main>
                <SideBarLeft />
                <Switch>
                    <Route path={routes.profile}>
                        <Profile />
                    </Route>
                    <Route path={routes.orderList}>
                        <Order />
                    </Route>
                    <Route path={routes.orderDetail}>
                        <OrderDetail />
                    </Route>
                    <Route path={routes.download}>
                        <Download />
                    </Route>
                    <Route path={routes.review}>
                        <Review />
                    </Route>
                    <Route path={routes.reviewDetail}>
                        <ReviewDetail />
                    </Route>
                    <Route path={routes.wishList}>
                        <WishList />
                    </Route>
                    <Route path={routes.mail}>
                        <Mail />
                    </Route>
                    <Route path={routes.mailDetail}>
                        <MailDetail />
                    </Route>
                    <Route path={routes.payment}>
                        <Payment />
                    </Route>
                    <Route path={routes.collect}>
                        <Collect />
                    </Route>

                    <Route path={routes.member}>
                        <div className="col-12 col-md-10 member">
                            <h1>Member</h1>
                            <p>Welcome to member page</p>
                            <ul>
                                <li>
                                    <Link
                                        className="btn btn-primary text-light"
                                        to={routes.profile}
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="btn btn-primary text-light"
                                        to={routes.orderList}
                                    >
                                        Order List
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="btn btn-primary text-light"
                                        to={routes.orderDetail}
                                    >
                                        Order Detail
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="btn btn-primary text-light"
                                        to={routes.download}
                                    >
                                        Download
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="btn btn-primary text-light"
                                        to={routes.review}
                                    >
                                        Review
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="btn btn-primary text-light"
                                        to={routes.reviewDetail}
                                    >
                                        Review Detail
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="btn btn-primary text-light"
                                        to={routes.mail}
                                    >
                                        Mail
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="btn btn-primary text-light"
                                        to={routes.mailDetail}
                                    >
                                        Mail Detail
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="btn btn-primary text-light"
                                        to={routes.payment}
                                    >
                                        Payment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="btn btn-primary text-light"
                                        to={routes.collect}
                                    >
                                        Collect
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Route>
                </Switch>
            </Main>
        </>
    );
}

export default Member;
