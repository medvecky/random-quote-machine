import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Text.css'
import {Card} from "react-bootstrap";

function Text() {
    return (
        <div id="text">
            <Card className="border-none">
                <Card.Body>
                    Sample quote text. Sample quote text. Sample quote text.
                    Sample quote text. Sample quote text. Sample quote text.
                    Sample quote text. Sample quote text. Sample quote text.
                    Sample quote text. Sample quote text. Sample quote text.
                    Sample quote text. Sample quote text. Sample quote text.
                    Sample quote text. Sample quote text. Sample quote text.
                    Sample quote text. Sample quote text. Sample quote text.
                    Sample quote text. Sample quote text. Sample quote text.
                    Sample quote text. Sample quote text. Sample quote text.
                </Card.Body>
            </Card>
        </div>
    );
}

export default Text;