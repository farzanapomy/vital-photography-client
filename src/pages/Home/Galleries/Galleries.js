import React from 'react';
import img1 from '../../../images/image (1).jpg'
import img2 from '../../../images/image (2).jpg'
import img3 from '../../../images/image (3).jpg'
import img5 from '../../../images/image (5).jpg'
import img6 from '../../../images/image (6).jpg'
import img7 from '../../../images/image (7).jpg'
import img10 from '../../../images/image (10).jpg'
import img11 from '../../../images/image (11).jpg'
import img12 from '../../../images/image (12).jpg'
import img13 from '../../../images/image (13).jpg'
import img14 from '../../../images/download.jpg'

import bg from '../../../images/bg.jpg'

import './Galleries.css'
const Galleries = () => {
    const background = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(45, 58, 74, 0.9)',
        backgroundBlendMode: 'darken',
        marginTop: 175
        }
    return (
        <div style={background}>

            <div className='container gallery-container my-5'>
                <h1>
                    WHAT WE DONE
                </h1>
                <p>It can change your mind</p>
                <div className="row g-1">
                    <div className="col-lg-8">

                        <div className="row">
                            <div className="col-lg-4">
                                <img src={img2} alt="" />
                                <img className='img-fluid my-4' src={img6} alt="" />
                                <img className='w-100' src={img11} alt="" />
                            </div>
                            <div className="col-lg-4">
                                <img className='img-fluid my-3' src={img1} alt="" />
                                <img src={img3} alt="" />
                                <img className='img-fluid my-2' src={img13} alt="" />

                            </div>
                            <div className="col-lg-4">
                                <img className='img-fluid my-3' src={img5} alt="" />
                                <img className='w-75' src={img14} alt="" />
                                <img className='img-fluid my-2' src={img12} alt="" />

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">

                        <img className='img-fluid mb-3' src={img10} alt="" />
                        <img className='img-fluid' src={img7} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Galleries;