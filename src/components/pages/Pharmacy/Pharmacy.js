import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Product/Product';

const Pharmacy = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./fakeShop.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="py-5 my-5">
            <h1 className="mb-3">Our <span className="text-info">Pharmacy</span></h1>
            <hr className="mb-5 w-25 mx-auto" />
            <Container>
                <Row className="g-5">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        >

                        </Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Pharmacy;