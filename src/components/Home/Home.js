import React from 'react';
import Bar from './Bar/Bar';
import MainSlider from './MainSlider/MainSlider';
import Sideslider from './Sideslider/Sideslider';
import Popularforman from '../Popularforman/Popularforman';

const Home = () => {
    return (
      <>
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <Bar></Bar>
          </div>
          <div class="col-md-7 pt-3">
            <MainSlider/>
          </div>
          <div class="col-md-3 pt-3">
            <Sideslider/>
          </div>
        </div>
        
        
      </div>
      <Popularforman></Popularforman>
      </>
        
    );
};

export default Home;