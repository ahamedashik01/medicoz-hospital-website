import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    const { id } = useParams();

    const found = services.find(e => e.id === id)

    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);



    return (
        <div className="my-5 py-5 ">
            <Container>
                <Row>
                    <Col sm={12} md={3} className="mb-5">
                        <div className="text-start shadow p-4">
                            <h6 className="pt-4">Quick Contact</h6>
                            <h3 className="mt-3">Get Soluiton</h3>
                            <p>Contact us at the Medicoz office nearest to you or submit a business inquiry online. </p>
                            <Link to="/contact"><button className="btn btn-info text-white px-4">Contact</button></Link>
                        </div>
                    </Col>
                    <Col sm={12} md={9}>
                        <div className="text-start">
                            <img className="img-fluid" src={found ? found.detailImg : ''} alt="" />
                            <h1 className="mt-4">{found ? found.title : ''}</h1>
                            <h3 className="mt-4">Department of {found ? found.title : ''}</h3>
                            <p>{found ? found.detailDes : ''}</p>
                            <h3 className="mt-4">Condition Treated</h3>
                            <p>{found ? found.conditions : ''}</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default ServiceDetails;