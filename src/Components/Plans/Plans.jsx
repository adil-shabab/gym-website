import React from "react";
import "./Plans.css";
import whitetick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="mt-5 mb-5 container">
      <div className="heading m-5">
        <p className="m-0 stroke">READY TO START</p>
        <p className="m-0 stroke">YOUR JOURNEY</p>
        <p className="m-0 stroke">NOW WITHUS</p>
      </div>
      <div className="plans row">
        <div className="p-3 col-lg-4 col-xlg-4 col-md-12 col-sm-12 col-12 plan-div">
          <div className="p-box">
            <i class="fa-solid fa-indian-rupee-sign"></i>
            <h3 className="font-weight-bold">BASIC PLAN</h3>
            <span>$ 25</span>
            <div className="d-flex">
              <img src={whitetick} alt="" />
              <p>2 hours of excercises</p>
            </div>
            <div className="d-flex">
              <img src={whitetick} alt="" />
              <p>Free consulation to coaches</p>
            </div>
            <div className="d-flex">
              <img src={whitetick} alt="" />
              <p>Access to the Community</p>
            </div>
            <div className="d-flex">
              <button className="but">See more benefits</button>
            </div>
          </div>
        </div>
        <div className="p-3 col-lg-4 col-xlg-4 col-md-12 col-sm-12 col-12 plan-div">
          <div className="p-box premium">
            <i class="fa-solid fa-crown"></i>
            <h3 className="font-weight-bold">PREMIUM PLAN</h3>
            <span>$ 35</span>
            <div className="d-flex">
              <img src={whitetick} alt="" />
              <p>5 hours of excercises</p>
            </div>
            <div className="d-flex">
              <img src={whitetick} alt="" />
              <p>Free consulation to coaches</p>
            </div>
            <div className="d-flex">
              <img src={whitetick} alt="" />
              <p>Access to minibar</p>
            </div>
            <div className="d-flex">
              <button className="but">See more benefits</button>
            </div>
          </div>
        </div>
        <div className="p-3 col-lg-4 col-xlg-4 col-md-12 col-sm-12 col-12 plan-div">
          <div className="p-box">
            <i class="fa-solid fa-sack-dollar"></i>
            <h3 className="font-weight-bold">PRO PLAN</h3>
            <span>$ 50</span>
            <div className="d-flex">
              <img src={whitetick} alt="" />
              <p>8 hours of excercises</p>
            </div>
            <div className="d-flex">
              <img src={whitetick} alt="" />
              <p>Consultation of Private Coach</p>
            </div>
            <div className="d-flex">
              <img src={whitetick} alt="" />
              <p>Free Fitness Merchandises</p>
            </div>
            <div className="d-flex">
              <button className="but">See more benefits</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
