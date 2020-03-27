import React from 'react';
import 'bootstrap/dist/css/bootstrap.css.map';
import './NewQuoteButton.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons';


function TweetButton(props) {
    return (
        <div className="margin">
            <a
                id="tweet-quote"
                href={
                    'https://twitter.com/intent/tweet?text='
                    + '"' + props.text + '" ' + props.author
                }
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