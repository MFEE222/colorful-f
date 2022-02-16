import React from 'react';

function SideBarLeft(props) {
    return (
        <aside className="col-12 col-md-2 collapse sidebar-left member-sidebar-left">
            {/* <!-- flex container --> */}
            <ul className="nav">
                <li className="col-6 col-md-12 nav-item">
                    <a href="" className="nav-link">
                        <i className="fas fa-caret-right"></i>
                        個人資料
                    </a>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <a href="" className="nav-link">
                        <i className="fas fa-caret-right"></i>
                        訂單管理
                    </a>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <a href="" className="nav-link">
                        <i className="fas fa-caret-right"></i>
                        我的最愛
                    </a>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <a href="" className="nav-link">
                        <i className="fas fa-caret-right"></i>
                        付款資訊
                    </a>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <a href="" className="nav-link">
                        <i className="fas fa-caret-right"></i>
                        下載區
                    </a>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <a href="" className="nav-link">
                        <i className="fas fa-caret-right"></i>
                        評論區
                    </a>
                </li>
                <li className="col-6 col-md-12 nav-item">
                    <a href="" className="nav-link">
                        <i className="fas fa-caret-right"></i>
                        登出
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default SideBarLeft;
