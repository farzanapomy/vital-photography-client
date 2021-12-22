import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import footer1 from '../../../images/footer1.jpg'
import footer2 from '../../../images/footer2.jpg'
import footer3 from '../../../images/footer3.jpg'
import footer4 from '../../../images/footer4.jpg'

const Footer = () => {
    return (
        <div className='footer-container'>
            <Container >
                <Row>
                    <Col sm={4} className='text-right'>
                        <h3 >About Us</h3>
                    </Col>
                    <Col sm={4}>
                        <h3>
                            Latest News
                        </h3>
                    </Col>
                    <Col sm={4}>
                        <h3>
                            Features
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <p>
                            can make a website for your photography business in moments. It comes packed with a variety of ready-made templates how easy website building can be and start setting up your own photography site today..
                        </p>


                        <p><i class="far fa-envelope"></i> {" "} photographer@gmail.com</p>
                        <p><i class="fas fa-phone-square-alt"></i> {" "} +0011221802</p>
                        <div className='footer-input'>
                            <input type="search" name="" id="" /> <br />
                            <button>Subscribe</button>
                        </div>
                    </Col>
                    <Col sm className='latest-section'>

                        <p>
                            help you build a website from scratch, automatically. Watch the video below to learn how easy website building can be and start setting up your own photography site today
                        </p>
                        <i class="fas fa-map-marker-alt"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook"></i>
                    </Col>
                    <Col sm className='feature-img' >
                        <Row className="" sm={4} >
                            <Col >
                                <img  src={footer1} alt="" />
                            </Col>
                            <Col >
                                <img  src={footer2} alt="" />
                            </Col>

                        </Row>
                        <Row className="" sm={4}>

                            <Col >
                                <img  src={footer3} alt="" />
                            </Col>
                            <Col >
                                <img  src={footer4} alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <div className='copyright'>
                <p><i class="fas fa-copyright"></i> Copyright by Farzana Pomy 2022</p>

            </div>
        </div>
    );
};

export default Footer;