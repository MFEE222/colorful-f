import React from 'react';

// 庫
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// 圖
// import Logo from '../images/colorful-logo-h100.png';
// import Logo from '../images/colorful-logo.png';
// import Logo from '../images/colorful-logo-800.png';
import Menu from '../images/dot-menu.svg';
import { routes } from './routes';

function OurNavbar(props) {
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
                            <LinkContainer to={routes.product}>
                                <NavDropdown.Item>Wedding</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product}>
                                <NavDropdown.Item>Food</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product}>
                                <NavDropdown.Item>Sencery</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product}>
                                <NavDropdown.Item>Portrait</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product}>
                                <NavDropdown.Item>Flim</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.product}>
                                <NavDropdown.Item>All</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown
                            title="About us"
                            id="colorful-aboutus-dropdown"
                        >
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>Action</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>
                                    Another action
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>Something</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>
                                    Separated link
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown
                            title="Tutorial"
                            id="colorful-tutorial-dropdown"
                        >
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>Action</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>
                                    Another action
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>Something</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>
                                    Separated link
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown
                            title="Support"
                            id="colorful-support-dropdown"
                        >
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>Action</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>
                                    Another action
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>Something</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={routes.member}>
                                <NavDropdown.Item>
                                    Separated link
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

                        <LinkContainer to={routes.member}>
                            <Nav.Link
                                className="link-item"
                                id="colorful-favorite-link"
                            >
                                <span className="text">Favorite</span>
                                <i className="fas fa-heart"></i>
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={routes.member}>
                            <Nav.Link
                                className="link-item"
                                id="colorful-member-link"
                            >
                                <span className="text">User</span>
                                <i className="fas fa-user"></i>
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={routes.member}>
                            <Nav.Link
                                className="link-item"
                                id="colorful-cart-link"
                            >
                                <span className="text">Cart</span>
                                <i className="fas fa-shopping-cart"></i>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default OurNavbar;
