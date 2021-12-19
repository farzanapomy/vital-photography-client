import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Row } from 'react-bootstrap'
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container my-5 '>

            <div className='my-5 service-title'>
                <h1>Our Services</h1>
                <p >Professional Photography Services. If you need photographs for your company website or a new printed sales brochure, our professional photographers will..</p>

            </div>

            <Row xs={12} md={3} className="g-4 ">

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