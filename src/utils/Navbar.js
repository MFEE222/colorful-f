import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../images/colorful-logo-h100.png';
// import Logo from '../images/colorful-logo.png';
// import Logo from '../images/colorful-logo-800.png';

function OurNavbar(props) {
    return (
        <Navbar bg="dark" expand="lg" sticky="top" className="colorful-navbar">
            <Container>
                <Navbar.Brand href="#">
                    {/* <div className="logo-group">
                        {/* <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <span className="text">Text</span>
                    </div> */}
                    <img src={Logo} alt="" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="colorful-navbar-nav">
                    <i className="fas fa-bars"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="colorful-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown
                            title="Product"
                            id="colorful-product-dropdown"
                        >
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Separated link
                            </NavDropdown.Item>
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
                            <NavDropdown.Divider />
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
                            <NavDropdown.Divider />
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
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" className="link-item">
                            <i className="fas fa-envelope"></i>
                            Mail
                        </Nav.Link>
                        <Nav.Link href="#" className="link-item">
                            <i className="fas fa-heart"></i>
                            Favorite
                        </Nav.Link>
                        <Nav.Link href="#" className="link-item">
                            <i className="fas fa-user"></i>
                            User
                        </Nav.Link>
                        <Nav.Link href="#" className="link-item">
                            <i className="fas fa-shopping-cart"></i>
                            Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default OurNavbar;
