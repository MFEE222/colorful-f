import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

import Main from 'components/Member/Main';
import SideBarLeft from 'components/Member/SideBarLeft';

import { routes, route } from 'utils/routes';
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
import Content from 'components/Member/Content';
//
import { useAuth, useGoogleAuth } from 'contexts/AuthContext';
import { useLoadingContext } from 'contexts/LoadingContext';
import { useEffect } from 'react';

// FIXME: error redirect to home after refresh member page.
// 生命週期：定義每隔階段要做什麼，函式元件的內部作用域代碼則是 render 階段會執行

function Member(props) {
    // context
    const { UILoading } = useLoadingContext();
    // hook
    const auth = useAuth();
    // render
    const render = () => {
        if (auth.loading) {
            return <UILoading />;
        }

        if (!auth.result) {
            return <Navigate to={routes.home} />;
        }

        return (
            <Main>
                <SideBarLeft />
                <Content>
                    <Routes>
                        <Route
                            path={route(routes.member.profile).pop()}
                            element={<Profile />}
                        />
                        <Route
                            path={route(routes.member.order.self).pop()}
                            element={<Order />}
                        />
                        <Route
                            path={routes.member.order.id}
                            element={<OrderDetail />}
                        />
                        <Route
                            path={routes.member.download.self}
                            element={<Download />}
                        />
                        <Route
                            path={routes.member.review.self}
                            element={<Review />}
                        />
                        <Route
                            path={routes.member.review.id}
                            element={<ReviewDetail />}
                        />
                        <Route
                            path={routes.member.favorite.self}
                            element={<WishList />}
                        />
                        <Route
                            path={routes.member.mail.self}
                            element={<Mail />}
                        />
                        <Route
                            path={routes.member.mail.id}
                            element={<MailDetail />}
                        />
                        <Route
                            path={routes.member.payment}
                            element={<Payment />}
                        />
                        <Route
                            path={routes.member.favorite.self}
                            element={<Collect />}
                        />

                        <Route index element={<Profile />} />
                    </Routes>
                </Content>
            </Main>
        );
    };

    return <>{render()}</>;
}

export default Member;
