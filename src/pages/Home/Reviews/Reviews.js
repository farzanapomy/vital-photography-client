import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons'
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';

import 'swiper/css';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    const element1 = <FontAwesomeIcon icon={faStar} style={{ color: "#FF9529" }} />
    const element2 = <FontAwesomeIcon icon={faStar} style={{ color: "#FFDF00" }} />
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    useEffect(() => {
        fetch('https://whispering-crag-95185.herokuapp.com/AddReviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (

        <div className='container my-5'>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}

                onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    reviews.map(review =>
                        <SwiperSlide effect="fade"
                            key={review._id}
                        >
                            <div className='review-item'>
                                <img className='img-fluid' src={review.image} alt="" />
                                <h6>
                                    {review.text}
                                </h6>
                                <p>
                                    {review.name}
                                </p>
                                <p>{review.description}</p>

                                <Rating readonly
                                    initialRating={review.ratting}
                                    fullSymbol={element1}
                                    emptySymbol={element2}
                                ></Rating>


                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
};

export default Reviews;