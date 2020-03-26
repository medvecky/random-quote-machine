import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';

function Author(props) {
    return (
        <div id="author">
            <h5>
                <FontAwesomeIcon
                    icon={faPencilAlt}
                />
                {props.authorName}
            </h5>
        </div>
    );
}

export default Author;