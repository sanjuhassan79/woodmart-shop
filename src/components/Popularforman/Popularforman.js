import React from 'react';
import './Popularforman.css'
import PopularProductItem from './PopularProductItem/PopularProductItem';
const Popularforman = () => {
    return (
        <div>
            <div class="container my-5">
  
                <div class="row">
                    <h3 className='heading__item'>MOST POPULAR FOR MAN</h3>
                    <div class="col-md-4 dis__tiem">

                        <div className="disoffer_img">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/11/retail-black-friday-large-banner-1-opt-520x619.jpg" alt="" />
                        
                            
                        </div>
                        <div className="disoffer-context">
                            <h2>All Jackets <br /> Discount- 30%</h2>
                            <p>READ MORE</p>
                        </div>

                       
                        





                    </div>
                    <div class="col-md-8">

                        <PopularProductItem></PopularProductItem>

           





                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Popularforman;