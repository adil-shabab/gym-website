import React from "react";
import "./Plans.css";

const Plans = () => {
  return (
    <div className="container">
      <div className="heading m-5">
        <p className="m-0 stroke">READY TO START</p>
        <p className="m-0 stroke">YOUR JOURNEY</p>
        <p className="m-0 stroke">NOW WITHUS</p>
      </div>
      <div className="plans row">
        <div className="p-5 col-lg-4 col-xlg-4 col-md-4 col-sm-12 col-12 plan-div">
          <div className="p-box">
            <i class="fa-solid fa-indian-rupee-sign"></i>
            <h4>BASIC PLAN</h4>
            <span>$ 25</span>
            <div className="d-flex">
              <img src="" alt="" />
              <p>2 hours of excercises</p>
            </div>
            <div className="d-flex">
              <img src="" alt="" />
              <p>Free consulation to coaches</p>
            </div>
            <div className="d-flex">
              <img src="" alt="" />
              <p>Access to the Community</p>
            </div>
            <div className="d-flex">
              <p>See more benefits</p>
            </div>
          </div>
        </div>
        <div className="p-5 col-lg-4 col-xlg-4 col-md-4 col-sm-12 col-12 plan-div">
          <div className="p-box">
            <i class="fa-solid fa-crown"></i>
            <h4>PREMIUM PLAN</h4>
            <span>$ 25</span>
            <div className="d-flex">
              <img src="" alt="" />
              <p>2 hours of excercises</p>
            </div>
            <div className="d-flex">
              <img src="" alt="" />
              <p>Free consulation to coaches</p>
            </div>
            <div className="d-flex">
              <img src="" alt="" />
              <p>Access to the Community</p>
            </div>
            <div className="d-flex">
              <p>See more benefits</p>
            </div>
          </div>
        </div>
        <div className="p-5 col-lg-4 col-xlg-4 col-md-4 col-sm-12 col-12 plan-div">
          <div className="p-box">
            <i class="fa-solid fa-square-dollar"></i>
            <h4>PRO PLAN</h4>
            <span>$ 25</span>
            <div className="d-flex">
              <img src="" alt="" />
              <p>2 hours of excercises</p>
            </div>
            <div className="d-flex">
              <img src="" alt="" />
              <p>Free consulation to coaches</p>
            </div>
            <div className="d-flex">
              <img src="" alt="" />
              <p>Access to the Community</p>
            </div>
            <div className="d-flex">
              <p>See more benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
