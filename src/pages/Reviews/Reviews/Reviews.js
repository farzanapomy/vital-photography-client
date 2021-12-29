// import React from 'react';
// import 'swiper/css/swiper.css';
// import Swiper from 'react-id-swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';

// const HeroSliderConfig = {
//     containerClass: "swiper-container hero-slider",
//     parallax: true,
//     centeredSlider: true,
//     speed: 500,
//     spaceBetween: 0,
//     effect: 'slider'
// }
// const Reviews = () => {
//     const [reviews, setReviews] = useState([])
//     const [parallaxSwiper, setParallaxSwiper] = useState(null)
//     const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 8;
//     const parallaxOpacity = 0.5

//     useEffect(() => {
//         fetch('https://whispering-crag-95185.herokuapp.com/AddReviews')
//             .then(res => res.json())
//             .then(data => console.log(data));
//     }, [])

//     return (
//         <Swiper {...HeroSliderConfig} getSwiper={setParallaxSwiper}>


//             <div className="hero-slider">
//                 {
//                     reviews.map(review =>
//                      <div className="slider-img" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity={parallaxOpacity}>
//                             <h2>{review.name}</h2>
//                     </div>)
//                 }
//             </div>
//             <div>Slide #1</div>
//             <div>Slide #2</div>
//             <div>Slide #3</div>
//             <div>Slide #4</div>
//             <div>Slide #5</div>

//         </Swiper>
//     );
// };

// export default Reviews;