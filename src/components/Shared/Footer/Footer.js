import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer py-5 text-start">
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <h1 className="text-white mb-4"><i className="text-white fas fa-clinic-medical"></i> Medicoz</h1>
                        <p className="text-white">Our Clinic has grown to provide a world class facility for the clinic advanced restorative.</p><br />
                        <p className="text-white">We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                        <div className="mt-5 d-flex justify-content-evenly align-items-center">
                            <i className="fs-2 fab fa-facebook"></i>
                            <i className="fs-2 fab fa-google-plus"></i>
                            <i className="fs-2 fab fa-linkedin-in"></i>
                            <i className="fs-2 fab fa-twitter"></i>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="text-center">
                            <h3 className="text-white">Departments</h3>
                            <ul className="list-unstyled mt-3 text-white">
                                <li className="mb-2">Surgery & Radiology</li>
                                <li className="mb-2">Family Medicine</li>
                                <li className="mb-2">Womens's Health</li>
                                <li className="mb-2">Optician</li>
                                <li className="mb-2">Pediatries</li>
                                <li className="mb-2">Dermatology</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="text-center text-white">
                            <div className="d-flex justify-content-center align-items-center">
                                <i className="secondary-color fs-1 me-3 fas fa-map-marker-alt"></i>
                                <div>
                                    <p>Islampur,Dharami,Dhaka</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <i className="secondary-color fs-1 me-3 fas fa-phone-alt"></i>
                                <div>
                                    <p>Mon to Fri : 08:30 - 18:00 <br />
                                        +89654 2586 5748</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <i className="secondary-color fs-1 me-3 fas fa-envelope"></i>
                                <div>
                                    <p>Do you have any Questions?<br />
                                        Info@gmail.com</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <i className=" secondary-color far fa-clock fs-1 me-3"></i>
                                <div className="">
                                    <small className="text-white">Mon - Sat 8.00 - 18.00.<br />
                                        Sunday CLOSED</small>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <p className="mt-5 text-center">Copyright © 2020 medicoz All Rights Reserved.</p>
            </Container>
        </div >
    );
};

export default Footer;