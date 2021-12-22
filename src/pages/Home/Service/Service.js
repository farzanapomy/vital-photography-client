import React, { useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap'
import './Service.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Service = ({ service }) => {
    const { name, img, description } = service;

    useEffect(() => {
        AOS.init()
    }, [])
    return (

        <div className='single-total ' data-aos='flip-left'>

            <CardGroup className='total-service'>
                <Card className='single-service '>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        
                    </Card.Body>

                    <button className='service-btn border-0'>Order now</button>

                </Card>

            </CardGroup>


        </div>

    );
};

export default Service;