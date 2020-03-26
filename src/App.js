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

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            quoteText: "",
            quoteAuthor: ""
        };
        this.updateQuote = this.updateQuote.bind(this);
    }

    componentDidMount() {
        this.updateQuote();
    }

    updateQuote() {
        let params = {
            method: 'get',
            headers: {
                'x-rapidapi-host': 'quotes15.p.rapidapi.com',
                'x-rapidapi-key': '1b91d4479emshd53e56360b438b3p147b51jsne710d876fb38'
            }
        };

        fetch('https://quotes15.p.rapidapi.com/quotes/random/', params)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if (this.isResultValid(result)) {

                        this.setState({
                            quoteText: result.content,
                            quoteAuthor: result.originator.name
                        });
                    } else {
                        this.setStubQuote();
                    }
                },
                (error) => {
                    console.log("Error:" + error);
                    this.setStubQuote();
                });
    }

    isResultValid(result) {
        return result.hasOwnProperty('content')
            && result.hasOwnProperty('originator')
            && result.originator.hasOwnProperty('name');
    }

    setStubQuote() {
        this.setState({
            quoteText: "Lorem ipsum dolor sit amet, eum at causae nominati, exerci iriure cu" +
                " eam, per rebum graeci oportere et",
            quoteAuthor: "John Doe"
        });
    }

    render() {
        return (
            <div>
                <Container id='quote-box' className="centered quote">
                    <ReactFCCtest/>
                    <Row>
                        <Col>
                            <Text text={this.state.quoteText}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="align-right">
                            <Author authorName={this.state.quoteAuthor}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TweetButton/>
                        </Col>
                        <Col xs={5} className="align-right">
                            <NewQuoteButton onclick={this.updateQuote} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
