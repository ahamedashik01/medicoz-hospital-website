import React from 'react';
import { Col } from 'react-bootstrap';

const Product = ({ product }) => {
    const { name, img, price, rating } = product;
    return (

        <Col sm={12} md={3}>
            <div className="p-3 shadow">
                <div className="service-card-img">
                    <img className="img-fluid " src={img} alt="" />
                </div>
                <div className="text-start py-4">
                    <h3>{name}</h3>
                    <p className=" fs-4">$ {price}</p>
                    <p><i className="fas fa-star text-warning"></i> ({rating})</p>
                    <button className="btn btn-info px-3 text-white">Add to cart</button>
                </div>
            </div>
        </Col>

    );
};

export default Product;