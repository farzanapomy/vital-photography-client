import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css/effect-fade';

import 'swiper/css';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const element1 = (
    <FontAwesomeIcon icon={faStar} style={{ color: '#FF9529' }} />
  );
  const element2 = (
    <FontAwesomeIcon icon={faStar} style={{ color: '#FFDF00' }} />
  );

  useEffect(() => {
    fetch('https://vital-server.onrender.com/AddReviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container my-5 review-container">
      <h1>Happy Client Testimonials: {reviews.length}</h1>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {reviews.map((review) => (
          <SwiperSlide
            effect="fade"
            key={review._id}
            className="swiper-container"
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          >
            <div className="review-item">
              <img className="img-fluid" src={review.image} alt="" />
              <h6>{review.text}</h6>
              <p>{review.name}</p>
              <p>{review.description}</p>

              <Rating
                readonly
                initialRating={review.ratting}
                fullSymbol={element1}
                emptySymbol={element2}
              ></Rating>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
