import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, description, charge } = service;
    return (
        <div className='single-service'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{description}</p>
            <h6>{charge}</h6>
            <button>Order Here</button>
        </div>
    );
};

export default Service;