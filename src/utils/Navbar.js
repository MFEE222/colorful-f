import React, { useState, useEffect } from 'react';

// 庫
// import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// 圖
// import Logo from '../images/colorful-logo-h100.png';
// import Logo from '../images/colorful-logo.png';
// import Logo from '../images/colorful-logo-800.png';
import Menu from '../images/dot-menu.svg';
import { routes } from './routes';

import { useProductsContext } from '../context/ProductsContext';
import { useAuthContext } from '../context/AuthContext';
import { useLoadingContext } from '../context/LoadingContext';
// import CartCard from '../components/Cart/CartCard';

function OurNavbar(props) {
    // context
    const products = useProductsContext();
    const { user, isAllowed, requestSignOut } = useAuthContext();
    const load = useLoadingContext();
    // state
    const [query, setQuery] = useState({ signout: false });

    // side effect
    useEffect(async () => {
        if (!query.signout) {
            return;
        }

        load.start();
        const result = await requestSignOut();
        load.end();

        setQuery({ ...query, signout: false });
    }, [query.signout]);

    // 渲染
    return (
        <Navbar bg="dark" expand="lg" sticky="top" className="colorful-navbar">
            <Container>
                <LinkContainer to={routes.home}>
                    <Navbar.Brand>COLORFUL</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="colorful-navbar-nav">
                    {/* <i className="fas fa-bars"></i> */}
                    {/* <i className="fas fa-ellipsis"></i> */}
                    {/* <i className="menu-icon"></i> */}
                    <img src={Menu} width="15" height="15" alt="" />
                </Navbar.Toggle>
                <Navbar.Collapse id="colorful-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown
                            title="Product"
                            id="colorful-product-dropdown"
                        >
                            <LinkContainer to={routes.productNewest}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 1)}
                                >
                                    最新
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.productFood}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 2)}
                                >
                                    食物
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.productWedding}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 3)}
                                >
                                    婚禮
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.productFilm}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 4)}
                                >
                                    復古
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.productScenery}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 5)}
                                >
                                    風景
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.productPortrait}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 6)}
                                >
                                    人像
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 0)}
                                >
                                    全系列
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to={routes.team}>
                            <Nav.Link
                                className="link-item"
                                id="colorful-aboutus-link"
                            >
                                About us
                            </Nav.Link>
                        </LinkContainer>
                        <NavDropdown
                            title="Tutorial"
                            id="colorful-tutorial-dropdown"
                        >
                            <LinkContainer to={routes.teach}>
                                <NavDropdown.Item>Teach</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.game}>
                                <NavDropdown.Item>
                                    Psychological test
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to={routes.member}>
                            <Nav.Link
                                className="link-item"
                                id="colorful-mail-link"
                            >
                                <span className="text">Notification</span>
                                <i className="fas fa-bell"></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to={isAllowed() ? routes.member : routes.signin}
                        >
                            <Nav.Link
                                className="link-item"
                                id="colorful-member-link"
                            >
                                <span className="text">User</span>

                                <i className="fas fa-user ">
                                    {isAllowed() &&
                                        `  Hi, ${user.name || 'User'}`}
                                </i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to={isAllowed() ? routes.member : routes.signin}
                        >
                            <Nav.Link
                                className="link-item"
                                id="colorful-favorite-link"
                            >
                                <span className="text">Favorite</span>
                                <i className="fas fa-heart"></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to={isAllowed() ? routes.member : routes.signin}
                        >
                            <Nav.Link
                                className="link-item"
                                id="colorful-cart-link"
                            >
                                <span className="text">Cart</span>
                                <i
                                    className="fas fa-shopping-cart"
                                    onClick={function () {
                                        // FIXME: fix cart handle
                                        // if (!isAllowed()) {
                                        //     setShowLoginModal(true);
                                        // }
                                    }}
                                ></i>
                            </Nav.Link>
                        </LinkContainer>
                        {isAllowed() && (
                            <Nav.Link
                                className="link-item"
                                id="colorful-sign-out"
                            >
                                <span className="text">Sign Out</span>
                                <i
                                    className="fas fa-sign-out-alt"
                                    onClick={eventSignOut}
                                ></i>
                            </Nav.Link>
                        )}
                        {/* <button
                            onClick={function () {
                                setShowLoginModal(true);
                            }}
                        >
                            show modal
                            <i className="fas fa-heart"></i>
                        </button> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {/* <CartCard /> */}
        </Navbar>
    );

    function eventSignOut() {
        setQuery({ ...query, signout: true });
    }
}

export default OurNavbar;
