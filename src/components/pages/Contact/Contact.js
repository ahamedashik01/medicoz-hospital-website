import React from 'react';
import { Col, Container, Form, Row, Stack } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="text-dark py-5 my-5 quality">
            <Container className="py-5">
                <h1 className="text-start">Feel Free To Reach us.</h1>
                <Stack direction="horizontal" gap={5}>
                    <div>
                        <div>
                            <img className="img-fluid" src="https://image.freepik.com/free-photo/hands-unrecognizable-female-doctor-writing-form-typing-laptop-keyboard_1098-20374.jpg" alt="hero" />
                        </div>

                    </div>
                    <div className="text-start mx-auto my-5">

                        <h2 className="mb-5">Have any question?</h2>

                        {/* contract From  */}
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="textarea" placeholder="How can we help you?" rows={3} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Where you from?" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>
                            <button className="btn btn-info text-white px-3">
                                Send
                            </button>
                        </Form>
                    </div>
                </Stack>
            </Container>
        </div >
    );
};

export default Contact;