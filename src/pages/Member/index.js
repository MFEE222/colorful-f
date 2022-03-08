import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect,
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
import Content from '../../components/Member/Content';
//
import { useAuthContext } from '../../utils/context/AuthContext';

// 會員主頁（巢狀路由 or 單純函式解決）
function Member(props) {
    const match = useRouteMatch();
    const auth = useAuthContext();
    //TODO:判斷是否登入 -> madol[需有會員才能使用會中心更多功能 -> 去登入 或 註冊 ]
    return (
        <>
            {/* {auth.current ? (
                <Redirect to={routes.profile} />
            ) : (
                <Redirect to={routes.signin} />
            )} */}
            <Main>
                <SideBarLeft />
                <Content>
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
                        <Route path={routes.favorite}>
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
                            {/* {auth.current ? <Redirect to={routes.profile}/>} */}
                            <Profile />
                            {/* 檢查有沒有登入，有登入直接跳轉到 profile 頁 */}
                        </Route>
                    </Switch>
                </Content>
            </Main>
        </>
    );
}

export default Member;
