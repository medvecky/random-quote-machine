import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import './NewQuoteButton.css';

function NewQuoteButton(props) {
    return (
        <div className="margin">
            <Button
                id="new-quote"
                variant="outline-info"
                size="sm"
                 onClick={props.onclick}
            >
                New Quote
            </Button>
        </div>
    );
}

export default NewQuoteButton;