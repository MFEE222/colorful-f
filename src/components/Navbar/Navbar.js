import React from 'react';
import Logo from '../../images/colorful-logo.png';

function Navbar(props) {
    return (
        <>
            {/* // <!-- 頁頭 --> */}
            <header className="navbar sticky-top">
                {/* <!-- container 只是一個有 RWD 和預設 margin, padding 的容器 --> */}
                <div className="container-lg">
                    {/* <!-- Menu Bar --> */}
                    <div
                        className="position-absolute d-lg-none ms-2 sticky-top"
                        id="menu-bar"
                    >
                        <a
                            href=".multi-link"
                            data-bs-toggle="collapse"
                            type="button"
                            aria-expand="false"
                            aria-controls="link-group"
                        >
                            <i className="fas fa-bars"></i>
                        </a>
                    </div>
                    {/* <!-- Logo --> */}
                    <div className="m-auto ms-lg-0" id="logo">
                        <img src={Logo} alt="" />
                    </div>

                    {/* <!-- fixed icon --> */}
                    <ul className="nav d-lg-none" id="d-none-icon">
                        <li className="me-2">
                            <a
                                className="nav-icon fs-6"
                                href="#"
                                id="link-icon-heart"
                            >
                                <i className="fas fa-search"></i>
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="nav-icon fs-6"
                                href="#"
                                id="link-icon-cart"
                            >
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                    </ul>

                    {/* <!-- Link Group --> */}
                    <ul
                        className="nav collapse text-center multi-link list-unstyled"
                        id="link-group"
                    >
                        <li className="col-12 col-lg-auto col-lg-auto nav-item mx-lg-3">
                            <a className="nav-link fs-6" id="link-product">
                                Product
                            </a>
                            <div className="sm-link d-lg-none">
                                <div className="container">
                                    <ul>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                Wedding
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                Portrait
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                Food
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                Scenery
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                Negative
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="col-12 col-lg-auto nav-item mx-lg-3">
                            <a className="nav-link fs-6" id="link-tutorial">
                                Tutorial
                            </a>
                            <div className="sm-link d-lg-none">
                                <div className="container">
                                    <ul>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                Tutorials
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                FQA
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="col-12 col-lg-auto nav-item mx-lg-3">
                            <a className="nav-link fs-6" id="link-about">
                                About us
                            </a>
                            <div className="sm-link d-lg-none">
                                <div className="container">
                                    <ul>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                Design concept
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="col-12 col-lg-auto nav-item mx-lg-3">
                            <a className="nav-link fs-6" id="link-support">
                                Support
                            </a>
                            <div className="sm-link d-lg-none">
                                <div className="container">
                                    <ul>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                Customer service
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="nav-link d-inline-block"
                                                href=""
                                            >
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>

                    {/* <!-- link icons --> */}
                    <ul
                        className="nav flex-nowrap text-center collapse d-lg-flex multi-link"
                        id="icon-group"
                    >
                        <li className="col nav-item mx-md-1 mx-lg-2">
                            <a
                                className="nav-icon fs-6"
                                href="#"
                                id="link-icon-envelope"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </li>
                        <li className="col nav-item mx-md-1 mx-lg-2">
                            <a
                                className="nav-icon fs-6"
                                href="#"
                                id="link-icon-heart"
                            >
                                <i className="fas fa-heart"></i>
                            </a>
                        </li>
                        <li className="col nav-item mx-md-1 mx-lg-2">
                            <a
                                className="nav-icon fs-6"
                                href="#"
                                id="link-icon-user"
                            >
                                <i className="fas fa-user"></i>
                                {/* <!-- 登入 --> */}
                                <i className="fas fa-sign-in-alt"></i>
                                {/* <!-- 登出 --> */}
                                <i className="fas fa-sign-out-alt"></i>
                            </a>
                        </li>
                        <li className="col nav-item mx-md-1 mx-lg-2">
                            <a
                                className="nav-icon fs-6"
                                href="#"
                                id="link-icon-cart"
                            >
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div>
                <div
                    className="container-lg  d-lg-block bg-color"
                    id="tmp-hide"
                >
                    <div className="row">
                        <ul className="showbox-link">
                            <li>
                                <a className="nav-link" href="#">
                                    婚禮 / Wedding
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">
                                    人像 / Portrait
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">
                                    食物 / Food
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">
                                    風景 / Scenery
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">
                                    底片 / Negative
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
