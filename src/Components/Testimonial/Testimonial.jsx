import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination"
import { Pagination } from "swiper"



const Testimonial = () => {
  return (
    <div className='testimonial'>
      <span style={{color: 'var(--orange)', fontSize: '20px', fontWeight: 'bold'}}>TESTIMONIAL</span>
      <p className="head m-0 stroke">WHAT THEY SAY</p>
      <p className='stroke head'>ABOUT US</p>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper col-lg-12 col-xlg-12 col-md-12 col-sm-12 col-12"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial
