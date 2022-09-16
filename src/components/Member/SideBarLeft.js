import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'utils/routes';
//
import { useAuthContext } from 'contexts/AuthContext';

function SideBarLeft(props) {
    const auth = useAuthContext();
    //active
    const [active, setActive] = useState(1);
    return (
        // <aside className="col-12 col-md-2 collapse sidebar-left member-sidebar-left">
        <aside className="col-12 col-md-2 order-2 order-md-1 sidebar-left member-sidebar-left">
            {/* <!-- flex container --> */}
            <ul className="nav">
                <li className="col-6 col-md-9 nav-item">
                    <Link
                        to={routes.member.profile}
                        onClick={() => {
                            setActive(1);
                        }}
                        className={
                            active == 1 ? 'nav-link active' : 'nav-link '
                        }
                    >
                        {/* <i className="fas fa-caret-right"></i> */}
                        個人資料
                    </Link>
                </li>
                <li className="col-6 col-md-9 nav-item">
                    <Link
                        to={routes.member.order.self}
                        onClick={() => {
                            setActive(2);
                        }}
                        className={
                            active == 2 ? 'nav-link active' : 'nav-link '
                        }
                    >
                        {/* <i className="fas fa-caret-right"></i> */}
                        訂單管理
                    </Link>
                </li>
                <li className="col-6 col-md-9 nav-item">
                    <Link
                        to={routes.member.favorite.self}
                        onClick={() => {
                            setActive(3);
                        }}
                        className={
                            active == 3 ? 'nav-link active' : 'nav-link '
                        }
                    >
                        {/* <i className="fas fa-caret-right"></i> */}
                        我的最愛
                    </Link>
                </li>
                <li className="col-6 col-md-9 nav-item">
                    <Link
                        to={routes.member.mail.self}
                        onClick={() => {
                            setActive(4);
                        }}
                        className={
                            active == 4 ? 'nav-link active' : 'nav-link '
                        }
                    >
                        {/* <i className="fas fa-caret-right"></i> */}
                        我的信箱
                    </Link>
                </li>
                <li className="col-6 col-md-9 nav-item">
                    <Link
                        to={routes.member.payment}
                        onClick={() => {
                            setActive(5);
                        }}
                        className={
                            active == 5 ? 'nav-link active' : 'nav-link '
                        }
                    >
                        {/* <i className="fas fa-caret-right"></i> */}
                        付款資訊
                    </Link>
                </li>
                <li className="col-6 col-md-9 nav-item">
                    <Link
                        to={routes.member.download.self}
                        onClick={() => {
                            setActive(6);
                        }}
                        className={
                            active == 6 ? 'nav-link active' : 'nav-link '
                        }
                    >
                        {/* <i className="fas fa-caret-right"></i> */}
                        下載區
                    </Link>
                </li>
                <li className="col-6 col-md-9 nav-item">
                    <Link
                        to={routes.member.review.self}
                        onClick={() => {
                            setActive(7);
                        }}
                        className={
                            active == 7 ? 'nav-link active' : 'nav-link '
                        }
                    >
                        {/* <i className="fas fa-caret-right"></i> */}
                        評論區
                    </Link>
                </li>

                <li className="col-6 col-md-9 nav-item">
                    <Link to="" className="nav-link" onClick={auth.clear}>
                        登出
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default SideBarLeft;
