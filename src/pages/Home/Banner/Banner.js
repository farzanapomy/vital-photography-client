import React from 'react';
import AnimatedText from 'react-animated-text-content';

import './Banner.css';
const Banner = () => {
  const background = {
    // background: `url(${bgBanner})`,
    backgroundColor: 'rgba(45, 58, 74, 0.99)',
    backgroundBlendMode: ' multiply',
    marginTop: 75,
  };
  return (
    // <div style={background}>
    //     <div className="row banner-container ">
    //         <div className="col-lg-6 ">
    //             <h1>Hi PhotoLover !! <br /> WE Create something new for you </h1>
    //         </div>

    //         <div className="col-lg-6 banner-img">
    //             <img className=' ' src={banner} alt="" />
    //         </div>
    //     </div>
    // </div>
    <div style={background}>
      <div className="banner container">
        <div className="row header-container mx-auto">
          <div className=" col-lg-6 container">
            <div className="row rows">
              <div className="box col-md-4 "></div>
              <div className="box2 col-md-4 "></div>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className=" header-name">
              <AnimatedText
                type="throw" // animate words or chars
                animation={{
                  x: '150px',
                  y: '-20px',
                  scale: 1.1,
                  ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph header-name"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                CREATE YOUR IMAGINATION CAREFULLY IN MY UNIVERSE
              </AnimatedText>
            </div>
            {/* <p className="paragraph">
              In the world of photography, you get to share a captured moment
              with other people....
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
