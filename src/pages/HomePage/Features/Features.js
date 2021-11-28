import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Features = () => {
    return (
            <section>
                <div className="featuiresSection">
                    <div className="container">
                    <div className="sectionHeading">
                            <h1 className="heading">Our Features</h1>
                        </div>
                        <Row xs={1} md={4} className="g-4">
                                <Col>
                                <Card className="cardBox">
                                    <Card.Img className="featureImg" variant="top" src="https://i.ibb.co/r3cwwJN/3247114-1.png" />
                                    <Card.Body>
                                    <Card.Title>24/7 Support</Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col>
                                <Card className="cardBox">
                                    <Card.Img className="featureImg" variant="top" src="https://i.ibb.co/XXV9gHh/3757891.png" />
                                    <Card.Body>
                                    <Card.Title>Quick Delivery</Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col>
                                <Card className="cardBox">
                                    <Card.Img className="featureImg" variant="top" src="https://i.ibb.co/YPwZGGH/3967544.png" />
                                    <Card.Body>
                                    <Card.Title>Secure Payment</Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col>
                                <Card className="cardBox">
                                    <Card.Img className="featureImg" variant="top" src="https://i.ibb.co/f2Q5tvM/3585031.png" />
                                    <Card.Body>
                                    <Card.Title>Easy Refund</Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                    </div>
                </div>
            </section>
    );
};

export default Features;