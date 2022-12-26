import React from 'react';
import './AboutUs.css';
import AnimatedText from 'react-animated-text-content';

const AboutUs = () => {
  return (
    <div className="md-mx-auto ">
      <div className="header-line"></div>
      <div className="about-us ">
        <div className="about-us-container">
          <div className="about-us-header">
            <h1>
              {' '}
              <AnimatedText
                type="chars" // animate words or chars
                animation={{
                  x: '200px',
                  y: '-20px',
                  scale: 1.1,
                  ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                WELCOME
              </AnimatedText>
            </h1>
            <p className="">
              You’re about to save yourself hours of time, frustrating moments
              of writer’s block, and improve your client relationships. Our
              All-Purpose Prewritten Photographer Scripts cover so much ground
              and can be used in countless formats ranging from client emails,
              social media posts, blog posts, welcome packets, brochures, and
              more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
