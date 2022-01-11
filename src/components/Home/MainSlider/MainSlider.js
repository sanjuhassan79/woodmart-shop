import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import './MainSlider.css'
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow,Pagination,
     Autoplay
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([EffectCoverflow,Pagination,Autoplay]);
  
const MainSlider = () => {
    return (
        <section>
            <div className="circle"></div>

           <div className="imgBox">
           <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 0,
  "stretch": 0,
  "depth": 200,
  "modifier": 1,
  "slideShadows": true

}} 
loop={'true'} 
autoplay={{
    delay: 2000,
    disableOnInteraction: false,
    }}
  pagination={true}
  className="mySwiper">
  <SwiperSlide><img src="https://i.ibb.co/sFtdxV6/img1.png" alt='' />
  
  <div className="swiper-item">
      <p className='swi-title'>hgjhg</p>
      <span className='swi-amount'>$ 44.99</span>
      
      
      </div>
      </SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/J3pprBQ/skincaremain-1-removebg-preview.png" alt='' />
  
  <div className="swiper-item">
      <p className='swi-title'>hgjhg</p>
      <span className='swi-amount'>$ 44.99</span>
      
      
      </div>
      </SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/MZWFt9M/men-s-body-wash-500x500-removebg-preview.png" alt='' />
  
  <div className="swiper-item">
      <p className='swi-title'>hgjhg</p>
      <span className='swi-amount'>$ 44.99</span>
      
      
      </div>
      </SwiperSlide>

  
  </Swiper>
           </div>
        </section>
    );
};

export default MainSlider;