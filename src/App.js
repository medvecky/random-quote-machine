import React from 'react';
import './App.css';

import ReactFCCtest from 'react-fcctest';
import Text from "./Text";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
    return (
        <div>
            <Container id='quote-box' className="centered quote">
                <ReactFCCtest/>
                <Row>
                    <Col>
                        <Text/>
                    </Col>
                </Row>
                <Row>
                    <Col className="align-right">Author</Col>
                </Row>
                <Row>
                    <Col>Link1</Col>
                    <Col>link2 </Col>
                    <Col xs={10} className="align-right">Button</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
