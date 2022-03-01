import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';

function SideBarLeft(props) {
    return (
        <aside className="col-12 col-md-2 collapse sidebar-left member-sidebar-left">
            {/* <!-- flex container --> */}
            <ul className="nav">
                <li className="col-6 col-md-12 nav-item">
                    <Link to={routes.profile} className="nav-link">
                        {/* <i className="fas fa-caret-right"></i> */}
                        個人資料
                    </Link>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <Link to={routes.orderList} className="nav-link">
                        {/* <i className="fas fa-caret-right"></i> */}
                        訂單管理
                    </Link>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <Link to={routes.collect} className="nav-link">
                        {/* <i className="fas fa-caret-right"></i> */}
                        我的最愛
                    </Link>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <Link to={routes.mail} className="nav-link">
                        {/* <i className="fas fa-caret-right"></i> */}
                        我的信箱
                    </Link>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <Link to={routes.payment} className="nav-link">
                        {/* <i className="fas fa-caret-right"></i> */}
                        付款資訊
                    </Link>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <Link to={routes.download} className="nav-link">
                        {/* <i className="fas fa-caret-right"></i> */}
                        下載區
                    </Link>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <Link to={routes.review} className="nav-link">
                        {/* <i className="fas fa-caret-right"></i> */}
                        評論區
                    </Link>
                </li>

                <li className="col-6 col-md-12 nav-item">
                    <Link to="" className="nav-link">
                        {/* <i className="fas fa-caret-right"></i> */}
                        登出
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default SideBarLeft;
