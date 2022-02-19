import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
// import Logo from '../images/colorful-logo-h100.png';
// import Logo from '../images/colorful-logo.png';
// import Logo from '../images/colorful-logo-800.png';
import Menu from '../images/dot-menu.svg';
import { routes } from './routes';

function OurNavbar(props) {
    console.log(props);
    return (
        <Navbar bg="dark" expand="lg" sticky="top" className="colorful-navbar">
            <Container>
                <Navbar.Brand>
                    <Link to={routes.home}>COLORFUL</Link>
                    {/* <div className="logo-group">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <span className="text">Colorful</span>
                    </div> */}
                    {/* <img src={Logo} alt="" className="logo" /> */}
                    {/* COLORFUL */}
                </Navbar.Brand>
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
                            <NavDropdown.Item href={routes.product}>
                                Wedding
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">Food</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Sencery
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Portrait
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">Flim</NavDropdown.Item>
                            <NavDropdown.Item href="#">All</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="About us"
                            id="colorful-aboutus-dropdown"
                        >
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Tutorial"
                            id="colorful-tutorial-dropdown"
                        >
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Support"
                            id="colorful-support-dropdown"
                        >
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="link-item" id="colorful-mail-link">
                            <Link to={routes.member} className="link">
                                <span className="text">Notification</span>
                                <i className="fas fa-bell"></i>
                            </Link>
                        </Nav.Link>
                        <Nav.Link
                            className="link-item"
                            id="colorful-favorite-link"
                        >
                            <Link to={routes.member} className="link">
                                <span className="text">Favorite</span>
                                <i className="fas fa-heart"></i>
                            </Link>
                        </Nav.Link>
                        <Nav.Link
                            className="link-item"
                            id="colorful-member-link"
                        >
                            <Link to={routes.member} className="link">
                                <span className="text">User</span>
                                <i className="fas fa-user"></i>
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="link-item" id="colorful-cart-link">
                            <Link to={routes.member} className="link">
                                <span className="text">Cart</span>
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default OurNavbar;
