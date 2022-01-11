import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './sideslider.css'
const sideslider = () => {

    const settings = {
        
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
    return (
        <div>
       
        <Slider {...settings}>
          <div>
          <div class="card-item">

            <div class="imgBox">
            <img src="https://i.ibb.co/PNgfPMt/5d286eaace7a9c107e4296ad-removebg-preview.png" alt="mouse corsair" class="mouse"/>
            </div>

            <div class="contentBox">
            <h3>Mouse Corsair M65</h3>
            <h2 class="price">$ 61.<small>98</small></h2>
            <Link to="#" class="buy">Buy Now</Link>
            </div>

            </div>
          </div>
          <div>
          <div class="card-item">

            <div class="imgBox">
            <img src="https://i.ibb.co/hXF6PM8/71-Ae-Xda-9-FL-AC-UX385-removebg-preview.png" alt="mouse corsair" class="mouse"/>
            </div>

            <div class="contentBox">
            <h3>Mouse Corsair M65</h3>
            <h2 class="price">$ 61.<small>98</small></h2>
            <Link to="#" class="buy">Buy Now</Link>
            </div>

            </div>
          </div>
          <div>
          <div class="card-item">

            <div class="imgBox">
            <img src="https://i.ibb.co/HFXHYb3/Fitness-Goal-Men1-1-600x-removebg-preview.png" alt="mouse corsair" class="mouse"/>
            </div>

            <div class="contentBox">
            <h3>Mouse Corsair M65</h3>
            <h2 class="price">$ 61.<small>98</small></h2>
            <Link to="#" class="buy">Buy Now</Link>
            </div>

            </div>
          </div>
         
          
        </Slider>
      </div>
    );
};

export default sideslider;