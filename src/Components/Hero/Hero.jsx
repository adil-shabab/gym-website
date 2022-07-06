import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/hero_image.png";
import HeroBack from "../../assets/hero_image_back.png";
import NumberCounter from 'number-counter'

const Hero = () => {
  return (
    <div id='home' className="row m-0 text-white pl-1">
      <div className="left-h mt-5 col-lg-9 col-xlg-9 col-md-12 col-sm-12 col-12">
        <div className="bp">
        <i class="fa-solid fa-heart-pulse"></i>
          <span>Calories burned</span>
          <p>220 kcal</p>
        </div>
        <div className="best-ad">
          <div className="circle"></div>
          <span className="fitness-text">
            THE BEST FITNESS CLUB IN THE TOWN
          </span>
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
            <span className="number">
            <NumberCounter end={140} start={50} delay='4' preFix='+' />
            </span>
            <span className="span">COACHES</span>
          </div>
          <div className="mr-5 d-flex flex-column justify-content-center align-items-center">
            <span className="number">
            <NumberCounter end={978} start={150} delay='4' preFix='+' />
            </span>
            <span className="span">MEMBERS</span>
          </div>
          <div className="mr-5 d-flex flex-column justify-content-center align-items-center">
            <span className="number">
            <NumberCounter end={50} start={0} delay='5' preFix='+' />
            </span>
            <span className="span">PROGRAMS</span>
          </div>
        </div>
        <div className="buttons mt-3 d-flex">
          <button data-aos='slide-right' className="mr-4 but">Get Started</button>
          <button data-aos='slide-right' className="but">Learn More</button>
        </div>
      </div>
      <div className="right-h mt-5 col-lg-3 col-xlg-3 col-md-12 col-sm-12 col-12">
        <img className="hero-img" src={HeroImg} alt="" />
        <img data-aos='slide-left' className="hero-back" src={HeroBack} alt="" />
        <div data-aos='slide-right' className="heart">
          <i class="fa-solid fa-heart-crack"></i>
          <span>Heart Rate</span>
          <p>116 bpm</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
