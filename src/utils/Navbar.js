import React from 'react';
import Logo from '../images/colorful-logo.png';

// FIXME: Navbar 改用 react-bootstrap

function Navbar(props) {
    return (
        <header className="navbar">
            <div className="container">
                {/* <!-- company brand --> */}
                <figure className="m-0 me-md-auto company-brand">
                    <img src={Logo} alt="" />
                </figure>
                {/* <!-- menu --> */}
                <div className="menu">
                    <button
                        className="btn"
                        data-bs-toggle="collapse"
                        data-bs-target=".nav"
                        aria-expand="false"
                        aria-controls=".nav"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- links --> */}
                <ul className="col-12 col-md-auto nav text-center collapse d-md-flex links">
                    <li className="col-12 col-md-auto nav-item">
                        <a href="#" className="nav-link">
                            Product
                        </a>
                    </li>
                    <li className="col-12 col-md-auto nav-item">
                        <a href="#" className="nav-link">
                            Tutorial
                        </a>
                    </li>
                    <li className="col-12 col-md-auto nav-item">
                        <a href="#" className="nav-link">
                            About us
                        </a>
                    </li>
                    <li className="col-12 col-md-auto nav-item">
                        <a href="#" className="nav-link">
                            Support
                        </a>
                    </li>
                </ul>
                {/* <!-- icons --> */}
                <ul className="col-12 col-md-auto nav text-center collapse d-md-flex icons">
                    <li className="col col-md-auto nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </li>
                    <li className="col col-md-auto nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-heart"></i>
                        </a>
                    </li>
                    <li className="col col-md-auto nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-user"></i>
                        </a>
                    </li>
                    <li className="col col-md-auto nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
