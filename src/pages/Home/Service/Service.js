import React from 'react';
import { Card, CardGroup } from 'react-bootstrap'
import './Service.css'
const Service = ({ service }) => {
    const { name, img, description, charge } = service;
    return (

        <div className='single-total '>

            <CardGroup className='total-service'>
                <Card className='single-service '>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                          Charge: ${charge}
                        </Card.Text>
                    </Card.Body>

                    <button className='service-btn border-0'>Order now</button>

                </Card>

            </CardGroup>


        </div>

    );
};

export default Service;