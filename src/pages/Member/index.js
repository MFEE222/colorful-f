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
import { useAuth, useGoogleAuth } from '../../context/AuthContext';
import { useLoadingContext } from '../../context/LoadingContext';
import { useEffect } from 'react';

// FIXME: error redirect to home after refresh member page.
// 生命週期：定義每隔階段要做什麼，函式元件的內部作用域代碼則是 render 階段會執行

function Member(props) {
    // context
    const { UILoading } = useLoadingContext();
    // hook
    const auth = useAuth();
    console.log('auth | index.js Member :>> ', auth);
    // render
    const render = () => {
        if (auth.loading) {
            return <UILoading />;
        }

        if (!auth.result) {
            return <Redirect to={routes.home} />;
        }

        return (
            <Main>
                <SideBarLeft />
                <Content>
                    <Switch>
                        <Route path={routes.profile}>
                            <Profile />
                        </Route>
                        {/* <Route path={routes.orderList}>
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
                        </Route> */}

                        <Route path={routes.member}>
                            <Profile />
                        </Route>
                    </Switch>
                </Content>
            </Main>
        );
    };

    return <>{render()}</>;
}

export default Member;
