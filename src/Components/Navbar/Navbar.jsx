import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navbar = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <div className="sticky-top nav pt-5 pb-2 px-3 d-flex justify-content-between">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="nav-ul d-flex text-white">
        <a href="#home"><li>Home</li></a>
        <a href="#programs"><li>Programs</li></a>
        <a href="#why"><li>Why us</li></a>
        <a href="#plans"><li>Plans</li></a>
        <a href="#testimonial"><li>Testimonials</li></a>
      </ul>
      <div className="buttons">
        <button className="button">Join</button>
      </div>
      <div className="hidden">
        {menu ? (
          <i onClick={navbar} class="fa-solid fa-xmark"></i>
        ) : (
          <i onClick={navbar} class="fa-solid fa-bars"></i>
        )}
      </div>
      {menu ? (
        <div className="show-nav mt-3">
          <ul>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonial</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
