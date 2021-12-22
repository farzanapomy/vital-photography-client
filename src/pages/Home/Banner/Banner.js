import React from 'react';
import banner from '../../../images/banner.jpg'
import bgBanner from '../../../images/bg-banner.jpg'
import './Banner.css'
const Banner = () => {
    const background = {
        background: `url(${bgBanner})`,
        backgroundColor: 'rgba(25, 35, 74, 0.9)',
        backgroundBlendMode: 'darken',
        marginTop: 50

    }
    return (
        <div style={background}>
            <div className="row banner-container ">
                <div className="col-lg-6 ">
                    <h1>Hi PhotoLover !! <br /> WE Create something new for you </h1>
                </div>

                <div className="col-lg-6 banner-img">
                    <img className=' ' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;