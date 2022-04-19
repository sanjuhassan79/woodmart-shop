import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner_item'>
            <div class="container-fluid ">

                    <div class="row">
                        <div class="col-12 col-sm-12 col-mg-6 col-lg-6 banner-text">

                          
                                <div className='banner-text_item'>
                                <h1>One place to organise, <br></br> communicate and <br></br>store work</h1>
                                <p>For businesses who need clarity, productive <br></br>communication, prioritisation and accountability.</p>
                                <button type="button" class="banner-but">Get started</button>
                            <button type="button" class="banner-but2">Try free trial</button>
                                </div>
                            





                        </div>
                        <div class="col-12 col-sm-12 col-mg-6 col-lg-6 p-0 row_flexw">

                        <img src="https://i.ibb.co/hswxW64/Group-124.png" class="row_flex" alt="banner-img"/>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;