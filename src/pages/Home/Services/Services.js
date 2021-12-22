import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Row } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div className='container my-5 '>

            <div className='my-5 service-title'>


                <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                    <h2>
                        <a href='https://daneden.github.io/animate.css/'>
                            <h1>Our Services</h1>
                        </a>
                    </h2>
                </ScrollAnimation>


                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
                    <p >Professional Photography Services. If you need photographs for your company website or a new printed sales brochure, our professional photographers will..</p>
                </ScrollAnimation>



            </div>

            <Row xs={12} md={3} className="g-4 " >

                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </Row>

        </div >
    );
};

export default Services;