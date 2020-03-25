import React from 'react';
import 'bootstrap/dist/css/bootstrap.css.map';

import './NewQuoteButton.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons'


function TweetButton() {
    return (
        <div className="margin">
            <a
                id="tweet-quote"
                href="https://www.w3schools.com"
            >
                <FontAwesomeIcon
                    icon={faTwitterSquare}
                    size="2x"
                    color="lightseagreen"
                />
            </a>
        </div>
    );

}

export default TweetButton;