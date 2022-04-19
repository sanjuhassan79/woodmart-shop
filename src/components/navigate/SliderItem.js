import React from 'react';
import './SliderItem.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
const SliderItem = () => {
    return (
        <>
         <div class="container-fluid pskjdf">
         <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
              <div class="card float-right">
      <div class="rowa">
        <div class="coltt">
          <img class="sliimg" src="https://i.ibb.co/h1W7Kff/Rectangle-47.png" alt=""/>
          <p className='Posted1'>Posted</p>
          <p className='Posted2'>on October 26, 2021</p>
        </div>
        <div class="colyy">
          <div class="card-block">
          
            <p className='Posted3'>What’s growth hacking? 8 great books to learn more about it</p>
            <p className='Posted4'>How you can set personal boundaries to reduce stress and burnout</p>
            
          </div>
        </div>
 
      </div>
    </div></SwiperSlide>
          <SwiperSlide>
              <div class="card float-right">
      <div class="rowa">
        <div class="coltt">
          <img class="sliimg" src="https://i.ibb.co/h1W7Kff/Rectangle-47.png" alt=""/>
          <p className='Posted1'>Posted</p>
          <p className='Posted2'>on October 26, 2021</p>
        </div>
        <div class="colyy">
          <div class="card-block">
          
            <p className='Posted3'>What’s growth hacking? 8 great books to learn more about it</p>
            <p className='Posted4'>How you can set personal boundaries to reduce stress and burnout</p>
            
          </div>
        </div>
 
      </div>
    </div></SwiperSlide>
          <SwiperSlide>
              <div class="card float-right">
      <div class="rowa">
        <div class="coltt">
          <img class="sliimg" src="https://i.ibb.co/h1W7Kff/Rectangle-47.png" alt=""/>
          <p className='Posted1'>Posted</p>
          <p className='Posted2'>on October 26, 2021</p>
        </div>
        <div class="colyy">
          <div class="card-block">
          
            <p className='Posted3'>What’s growth hacking? 8 great books to learn more about it</p>
            <p className='Posted4'>How you can set personal boundaries to reduce stress and burnout</p>
            
          </div>
        </div>
 
      </div>
    </div></SwiperSlide>

          
        </Swiper>

         </div>
        
      </>
    );
};

export default SliderItem;