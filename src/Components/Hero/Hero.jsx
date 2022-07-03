import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/hero_image.png";
import HeroBack from "../../assets/hero_image_back.png";

const Hero = () => {
  return (
    <div className="row m-0 text-white pl-5">
      <div className="mt-5 col-lg-9 col-xlg-9 col-md-12 col-sm-12 col-12">
        <div className="best-ad">
          <div className="circle"></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        <div className="title mt-5">
          <span className="header">
            <span className="stroke">SHAPE </span> YOUR
          </span>
          <br />
          <span className="header">IDEAL BODY</span>
        </div>
        <p className="mt-3">
          In here we will help you to shape and build your ideal body and live
          up your life to fullest
        </p>
        <div className="count mt-5 d-flex">
          <div className="mr-5 d-flex flex-column justify-content-center align-items-center">
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div className="mr-5 d-flex flex-column justify-content-center align-items-center">
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div className="mr-5 d-flex flex-column justify-content-center align-items-center">
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="buttons mt-3 d-flex">
          <button className="mr-4 but">Get Started</button>
          <button className="but">Learn More</button>
        </div>
      </div>
      <div className="right-h mt-5 col-lg-3 col-xlg-3 col-md-12 col-sm-12 col-12">
        <img className="hero-img" src={HeroImg} alt="" />
        <img className="hero-back" src={HeroBack} alt="" />
      </div>
      
    </div>
  );
};

export default Hero;
