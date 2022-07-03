import React from "react";
import "./Navbar.css";
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="sticky-top nav pt-5 pb-2 px-3 d-flex justify-content-between">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="d-flex text-white">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonial</li>
      </ul>
      <div className="buttons">
        <button className="button">Join</button>
      </div>
      <div className="hidden">
      <i class="fa-solid fa-bars"></i>
      </div>
    </div>
    
  );
};

export default Navbar;
