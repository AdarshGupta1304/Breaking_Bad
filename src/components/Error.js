import React from 'react';
import './Error.css';
// import err from './images/Error.png';
import err from './images/Error_1.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'animate.css';


const Error = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <img src={err} alt="404 Page Not Found" className="img-fluid error" />
                </Col>
            </Row>
            <Row>
                <Col> 
                    <h1 className="animate__animated animate__pulse text-center text-muted my-5">Page Not Found!</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Error;