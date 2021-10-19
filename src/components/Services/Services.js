import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-5 py-5" id="services" >
            <h6>OUR SERVICES</h6>
            <h1>Our Medial Department</h1>
            <i className="text-info fs-1 fas fa-heartbeat my-5 py-2"></i>
            <Container>
                <Row className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;