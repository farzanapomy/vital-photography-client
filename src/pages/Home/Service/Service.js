import React from 'react';
import {Card, CardGroup, Button } from 'react-bootstrap'
import './Service.css'
const Service = ({ service }) => {
    const { name, img, description, charge } = service;
    return (

        <div className='single-total'>

            <CardGroup >
                <Card className='single-service'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            $ {charge}
                        </Card.Text>
                    </Card.Body>

                    <Button>Order now</Button>

                </Card>

            </CardGroup>


        </div>

    );
};

export default Service;