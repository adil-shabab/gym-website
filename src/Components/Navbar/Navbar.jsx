import React from "react";
import "./Navbar.css";
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="sticky-top nav py-5 px-3 d-flex justify-content-between">
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
    // <div className="py-4 px-4 row">
    //   <div className="col-lg-12 col-xlg-12 col-md-12 col-sm-12 col-12">
    //   <nav className="navbar navbar-expand-lg">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">
    //         <img src={Logo} alt="" />
    //       </a>
    //       <div id="navbarSupportedContent">
    //         <ul className="text-white navbar-nav me-auto mb-2 mb-lg-0 mr-5 pr-5">
    //           <li className="nav-item">
    //             <a className="nav-link">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link">
    //               Programs
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link">
    //               Why us
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link">
    //               Plans
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link">
    //               Testimonials
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       {/* <button className="button">Join</button> */}
    //     </div>
    //   <div className="d-flex justify-content-end align-items-center">
    //     <button className="button">Join</button>
    //   </div>
    //   </nav>
    //   </div>
    // </div>
  );
};

export default Navbar;
