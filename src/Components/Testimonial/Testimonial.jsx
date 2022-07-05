import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from "../../assets/t-image1.png";
import img2 from "../../assets/t-image2.jpg";
import img3 from "../../assets/t-image3.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <span
        style={{ color: "var(--orange)", fontSize: "20px", fontWeight: "bold" }}
      >
        TESTIMONIAL
      </span>
      <p className="mt-4 head m-0 stroke">WHAT THEY SAY</p>
      <p className="stroke head">ABOUT US</p>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper col-12"
      >
        <SwiperSlide className="slide row">
          <div className="mt-4 col-lg-6 col-xlg-6 col-md-6 col-sm-12 col-12">
            <p className="text-justify" style={{fontSize: '16px'}}>
              Lorem ipsum dolor sit amet it is the main the  ad odio tenetur dolor cupiditate nostrum earum
              facere deleniti repellendus magnam
            </p>
            <span>
              JOHN KEVIN - <span style={{color: 'var(--orange)', fontWeight: 'bold'}}>COACH</span>
            </span>
          </div>
          <div className="coach mt-4 col-lg-6 col-xlg-6 col-md-6 col-sm-12 col-12">
            <img src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide row">
          <div className="mt-4 col-lg-6 col-xlg-6 col-md-6 col-sm-12 col-12">
            <p className="text-justify" style={{fontSize: '16px'}}>
              Lorem ipsum dolor sit amet it is the main the  ad odio tenetur dolor cupiditate nostrum earum
              facere deleniti repellendus magnam
            </p>
            <span>
              ANDREW - <span style={{color: 'var(--orange)', fontWeight: 'bold'}}>CUSTOMER</span>
            </span>
          </div>
          <div className="coach mt-4 col-lg-6 col-xlg-6 col-md-6 col-sm-12 col-12">
            <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide row">
          <div className="mt-4 col-lg-6 col-xlg-6 col-md-6 col-sm-12 col-12">
            <p className="text-justify" style={{fontSize: '16px'}}>
              Lorem ipsum dolor sit amet it is the main the  ad odio tenetur dolor cupiditate nostrum earum
              facere deleniti repellendus magnam
            </p>
            <span>
              MATHEW THOMAS - <span style={{color: 'var(--orange)', fontWeight: 'bold'}}>CUSTOMER</span>
            </span>
          </div>
          <div className="coach mt-4 col-lg-6 col-xlg-6 col-md-6 col-sm-12 col-12">
            <img src={img3} alt="" />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
