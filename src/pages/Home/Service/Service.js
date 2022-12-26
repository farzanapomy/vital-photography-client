import React, { useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Service.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
  const { name, img, description, charge } = service;

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="single-total " data-aos="flip-left">
      <CardGroup className="total-service">
        <Card className="single-service ">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Charge :${charge}</Card.Text>
          </Card.Body>

          <Link
            to={`/services/${service._id}`}
            className="service-btn border-0"
          >
            {/* <input type="Order Now" /> */}
            <button>Order now</button>
          </Link>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
