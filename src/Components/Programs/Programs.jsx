import React from "react";
import "./Programs.css";

const Programs = () => {
  return (
    <div>
      <div className="heading">
        <p className="m-0 stroke">EXPLORE OUR </p>
        <p className="m-0 stroke"> PROGRAMS</p>
        <p className="m-0 stroke">TO SHAPE YOU</p>
      </div>
      <div className="row p-3">
        <div className="col-lg-3 col-xlg-3 col-md-6 col-sm-12 col-12">
          <div className="box">
          <i class="fa-solid fa-fire-flame-curved"></i>
          <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
          <button className="but">Join</button>
          </div>
        </div>
        <div className="col-lg-3 col-xlg-3 col-md-6 col-sm-12 col-12">
          <div className="box">
          <i class="fa-solid fa-person-running"></i>
          <p>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</p>
          <button className="but">Join</button>
          </div>
        </div>
        <div className="col-lg-3 col-xlg-3 col-md-6 col-sm-12 col-12">
          <div className="box">
          <i class="fa-solid fa-dumbbell"></i>
          <p>In this program, you are trained to improve your strength through many exercises.</p>
          <button className="but">Join</button>
          </div>
        </div>
        <div className="col-lg-3 col-xlg-3 col-md-6 col-sm-12 col-12">
          <div className="box">
          <i class="fa-solid fa-heart-pulse"></i>
          <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
          <button className="but">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
