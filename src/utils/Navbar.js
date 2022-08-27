import React, { useState, useEffect } from 'react';

// 庫
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// 圖
// import Logo from '../images/colorful-logo-h100.png';
// import Logo from '../images/colorful-logo.png';
// import Logo from '../images/colorful-logo-800.png';
import Menu from '../images/dot-menu.svg';
import routes from './routes';

import { useProductsContext } from '../context/ProductsContext';
import { useAuthContext, useAuth, useSignOut } from '../context/AuthContext';
// import CartCard from '../components/Cart/CartCard';

function OurNavbar(props) {
    // context
    const { user, isSignIn } = useAuthContext();
    const products = useProductsContext();
    // hook
    const [query, setQuery] = useState({ submit: false });
    const signout = useSignOut(query, setQuery);
    // event
    function eventSignOut() {
        setQuery({ ...query, submit: true });
    }
    // render
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
                            <LinkContainer to={routes.product.newest}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 1)}
                                >
                                    {/* 最新 */}
                                    New
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product.food}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 2)}
                                >
                                    {/* 食物 */}
                                    Food
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product.wedding}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 3)}
                                >
                                    {/* 婚禮 */}
                                    Wedding
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product.film}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 4)}
                                >
                                    {/* 復古 */}
                                    Film
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product.scenery}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 5)}
                                >
                                    {/* 風景 */}
                                    Scenery
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product.portrait}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 6)}
                                >
                                    {/* 人像 */}
                                    Portrait
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product.self}>
                                <NavDropdown.Item
                                    onClick={(e) => products.optionSeries(e, 0)}
                                >
                                    {/* 全系列 */}
                                    All
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
                        <LinkContainer to={routes.member.self}>
                            <Nav.Link
                                className="link-item"
                                id="colorful-mail-link"
                            >
                                <span className="text">Notification</span>
                                <i className="fas fa-bell"></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to={
                                isSignIn
                                    ? routes.member.self
                                    : routes.auth.signin
                            }
                        >
                            <Nav.Link
                                className="link-item"
                                id="colorful-member-link"
                            >
                                <span className="text">User</span>

                                <i className="fas fa-user ">
                                    {isSignIn && `  Hi, ${user.name || 'User'}`}
                                </i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to={
                                isSignIn
                                    ? routes.member.self
                                    : routes.auth.signin
                            }
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
                            to={
                                isSignIn
                                    ? routes.member.self
                                    : routes.auth.signin
                            }
                        >
                            <Nav.Link
                                className="link-item"
                                id="colorful-cart-link"
                            >
                                <span className="text">Cart</span>
                                <i className="fas fa-shopping-cart"></i>
                            </Nav.Link>
                        </LinkContainer>
                        {isSignIn && (
                            <Nav.Link
                                className="link-item"
                                id="colorful-sign-out"
                                onClick={eventSignOut}
                            >
                                <span className="text">Sign Out</span>
                                <i className="fas fa-sign-out-alt"></i>
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
}

export default OurNavbar;
