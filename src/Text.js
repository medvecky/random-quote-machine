import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Text.css'
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

function Text(props) {
    return (
        <div id="text">
            <Card className="border-none">
                <Card.Body>
                    <h4>
                        <FontAwesomeIcon
                            icon={faQuoteRight}
                        />
                        {" " + props.text + " "}
                        <FontAwesomeIcon
                            icon={faQuoteLeft}
                        />
                    </h4>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Text;