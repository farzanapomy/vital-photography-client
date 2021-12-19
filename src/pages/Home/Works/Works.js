import React from 'react';
import img1 from '../../../images/work/amazon.png'
import img2 from '../../../images/work/DC.jpg'
import img3 from '../../../images/work/disney.png'
import img4 from '../../../images/work/HBO.png'
import img5 from '../../../images/work/marvel.png'
import img6 from '../../../images/work/world.gif'
import ScrollAnimation from 'react-animate-on-scroll';

import './Works.css'
const Works = () => {
    return (
        <div className='container works-div '>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <h1>We Works With</h1>
            </ScrollAnimation>


            <div className="row g-5 work-img">
                <div className="col-lg-4">
                    <img className='img-fluid' src={img1} alt="" />
                </div>
                <div className="col-lg-4">
                    <img className='img-fluid' src={img2} alt="" />
                </div>
                <div className="col-lg-4">
                    <img className='img-fluid' src={img3} alt="" />
                </div>
                <div className="col-lg-4">
                    <img className='img-fluid' src={img4} alt="" />
                </div>
                <div className="col-lg-4">
                    <img className='img-fluid' src={img5} alt="" />
                </div>
                <div className="col-lg-4">
                    <img className='img-fluid' src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Works;