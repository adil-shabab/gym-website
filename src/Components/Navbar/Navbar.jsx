import React from "react";
import "./Navbar.css";
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="py-4 px-4 row">
      <div className="col-lg-8 col-xlg-8 col-md-12 col-sm-12 col-12">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <div id="navbarSupportedContent">
            <ul className="text-white navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Programs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Why us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Plans
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          {/* <button className="button">Join</button> */}
        </div>
      </nav>
      </div>
      <div className="mt-2 col-lg-4 col-xlg-4 col-md-12 col-sm-12 col-12 d-flex justify-content-end align-items-center">
        <button className="button">Join</button>
      </div>
    </div>
  );
};

export default Navbar;
