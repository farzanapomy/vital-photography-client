import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from '../Banner/Banner';
import Galleries from '../Galleries/Galleries';
import Services from '../Services/Services';
import Works from '../Works/Works';
import AboutUs from '../About/AboutUs';

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Galleries></Galleries>
      <Services></Services>
      {/* <Works></Works> */}
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
