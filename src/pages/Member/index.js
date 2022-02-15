import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import { routes } from '../../utils/routes';
import Profile from './Profile';
import Order from './Order';
import OrderDetail from './OrderDetail';
import Download from './Download';
import Review from './Review';
import WishList from './WishList';
import Mail from './Mail';
import Payment from './Payment';

// 會員主頁（巢狀路由 or 單純函式解決）
function Member(props) {
    const match = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={match.path + routes.profile}>
                    <Profile />
                </Route>
                <Route path={match.path + routes.orderList}>
                    <Order />
                </Route>
                <Route path={match.path + routes.orderDetail}>
                    <OrderDetail />
                </Route>
                <Route path={match.path + routes.download}>
                    <Download />
                </Route>
                <Route path={match.path + routes.review}>
                    <Review />
                </Route>
                <Route path={match.path + routes.wishList}>
                    <WishList />
                </Route>
                <Route path={match.path + routes.mail}>
                    <Mail />
                </Route>
                <Route path={match.path + routes.payment}>
                    <Payment />
                </Route>
                <Route path={match.path}>
                    <div className="box">
                        <h1>Member</h1>
                        <p>Welcome to member page</p>
                        <ul>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={match.path + routes.profile}
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={match.path + routes.orderList}
                                >
                                    Order List
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={match.path + routes.orderDetail}
                                >
                                    Order Detail
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={match.path + routes.download}
                                >
                                    Download
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={match.path + routes.review}
                                >
                                    Review
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={match.path + routes.mail}
                                >
                                    Mail
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-primary text-light"
                                    to={match.path + routes.payment}
                                >
                                    Payment
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default Member;
