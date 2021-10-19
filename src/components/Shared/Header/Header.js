import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="secondary-color">
            <div>
                <div className="container py-2 border-top border-5 d-flex border-info ">
                    <div className="d-flex justify-content-center align-items-center me-5">
                        <i className="block secondary-color fs-1 me-3 fas fa-map-marker-alt"></i>
                        <div className="block">
                            <small className="text-color">234 Islampur, <br /> Dhamrai,
                                Dhaka, Bd</small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <i className="block secondary-color far fa-clock fs-1 me-3"></i>
                        <div className="block">
                            <small className="text-color">Mon - Sat 8.00 - 18.00.<br />
                                Sunday CLOSED</small>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar className="py-3 primary-color-bg" sticky="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Link className="text-decoration-none" to="/home">
                        <Navbar.Brand className="fs-3 fw-bold" href="#home"><i className="fas fa-clinic-medical"></i> Medicoz</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="text-white text-uppercase" href="#features">Home</Nav.Link>
                            <Nav.Link className="text-white text-uppercase" href="#pricing">Services</Nav.Link>
                            <Nav.Link className="text-white text-uppercase" href="#pricing">About us</Nav.Link>
                            <Nav.Link className="text-white text-uppercase" href="#pricing">Pharmacy</Nav.Link>
                            <Nav.Link className="text-white text-uppercase" href="#pricing">Contract</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;