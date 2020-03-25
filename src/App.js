import React from 'react';
import './App.css';

import ReactFCCtest from 'react-fcctest';
import Text from "./Text";
import Author from "./Author";
import NewQuoteButton from "./NewQuoteButton";
import TweetButton from "./TweetButton";
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
                    <Col className="align-right">
                        <Author />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TweetButton />
                    </Col>
                    <Col xs={5} className="align-right">
                        <NewQuoteButton />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
