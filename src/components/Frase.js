import React, { Component } from 'react';
import { Card, } from 'react-bootstrap';

const Frase = (props) => {
    return (
        <Card>
            <Card.Body>
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <img src={props.personaje.image} alt={props.personaje.character} />
                    </div>

                    <div className="col-12 col-md-6">
                        <Card.Title>{props.personaje.character}</Card.Title>
                        <Card.Text>  {props.personaje.quote}  </Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Card >
    );
}

export default Frase;