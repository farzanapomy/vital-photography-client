import React from 'react';
import Banner from '../Banner/Banner';
import Galleries from '../Galleries/Galleries';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Galleries></Galleries>
            <Services></Services>
            <Works></Works>
        </div>
    );
};

export default Home;