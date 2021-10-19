import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, title, thumbNail, shortDes } = props.service;
    return (
        <Col sm={12} md={4}>
            <div className="p-4 shadow">
                <div className="service-card-img">
                    <img src={thumbNail} alt="" />
                </div>
                <div className="des text-start mt-4">
                    <h4 className="mb-3">{title}</h4>
                    <p>{shortDes}</p>
                    <Link to={`/service/${id}`}>
                        <button className="btn btn-info text-white px-4">Details</button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;