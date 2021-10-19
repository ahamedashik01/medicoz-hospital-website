import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Pricing = () => {
    return (
        <div className="pricing my-5 py-5">
            <h6 >Our Pricing</h6>
            <h1>Pricing Plan</h1>
            <i className="text-info fs-1 fas fa-heartbeat my-5 py-3"></i>
            <Container>
                <Row className="g-5">
                    <Col sm={12} md={3}>
                        <div className="Price-card px-4 shadow">
                            <div className="price py-3 mb-4">
                                <h1>$299</h1>
                                <h5>Per Month</h5>
                            </div>
                            <div className="price-detail">
                                <Table>
                                    <thead>
                                        <tr >
                                            <th ><span className="fs-4 fw-light">Cardiology</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-start">
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Functional Diagnotics</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Allergens Drugs</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Pollen Allergens</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Food Allergens</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-info text-white px-4 mb-4">Get Offer</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="Price-card px-4 shadow">
                            <div className="price py-3 mb-4">
                                <h1>$120</h1>
                                <h5>Per Month</h5>
                            </div>
                            <div className="price-detail">
                                <Table>
                                    <thead>
                                        <tr >
                                            <th ><span className="fs-4 fw-light">Detal Care</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-start">
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Tooth implantation</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Lase Dentistry</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Tests and Treatmen</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Medical Consultation</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-info text-white px-4 mb-4">Get Offer</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="Price-card px-4 shadow">
                            <div className="price py-3 mb-4">
                                <h1>$150</h1>
                                <h5>Per Month</h5>
                            </div>
                            <div className="price-detail">
                                <Table>
                                    <thead>
                                        <tr >
                                            <th ><span className="fs-4 fw-light">Body Checkup</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-start">
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Tests and Treatment</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Tests and Treatment</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Laboratory Services</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Food Allergens</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-info text-white px-4 mb-4">Get Offer</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="Price-card px-4 shadow">
                            <div className="price py-3 mb-4">
                                <h1>$100</h1>
                                <h5>Per Month</h5>
                            </div>
                            <div className="price-detail">
                                <Table>
                                    <thead>
                                        <tr >
                                            <th ><span className="fs-4 fw-light">Blood Test</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-start">
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Blood Test Service</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Safety Training Tips</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Tests and Treatment</td>
                                        </tr>
                                        <tr>
                                            <td><i className="text-info fas fa-check my-3 me-3"></i> Food Allergens</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-info text-white px-4 mb-4">Get Offer</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Pricing;