import React from 'react';
import './Navigate.css'
import SliderItem from './SliderItem';
const Navigate = () => {
    return (
        <>
            <div class="container-fluid containerpass">
            <div class="row">

            <div class="col-lg-4 mb-5 mb-lg-0 ">
                    <div class=" Navi_title">
                        <h1>Ideas to help you <br></br> navigate work</h1>
                    </div>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0 ">
            <p className='Navi_title_p'>We regularly share resources on startups,<br></br> productivity, and the future of work</p>
        
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0 ">
            <a href="#" class="btn bnt-nag  btn-block p-2 shadow rounded-pill  px-5  mb-3">Get started</a>
            </div>
            </div>
           
            
          
        
        
            </div>



            <SliderItem></SliderItem>
           



        </>
    );
};

export default Navigate;