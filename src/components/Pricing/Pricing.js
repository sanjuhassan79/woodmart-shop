import React from 'react';
import './Pricing.css'
const Pricing = () => {
    return (
        <div className='packaage_item'>
          
          
  <div class="container-fluid containerpass my-5">

  
  
    <div class="text-center mb-5 text-white">
      <div class="row">
        <div class="col-lg-7 mx-auto packaage_title">
          <h1>Your Suitable packaage <br></br> for your needs</h1>
          <p>Our powerful free plan gives you access to core Tazkily features.</p>
        <div className='packaage'>
            <p>Monthly</p>
            <label class="switch">
                <input type="checkbox" checked/>
                <span class="slider round"></span>
            </label>
            <p>Annualy</p>

        </div>
        
        
        </div>
      </div>
    </div>
    
    



    <div class="row text-center align-items-end">
      

      
     


      <div class="col-lg-4 mb-5 mb-lg-0 col-lg-mblg-0">
        <div class=" text-start allitem">
        

          <div class=" bd_pricing_img1 p-5">

          <h1 class="hwhite">Basic plan</h1>
          <h2 class="hte">$10<span class="tex0">   / month</span></h2>
          </div>

          <ul class="list-unstyled my-5 text-small text-left font-weight-normal px-5">
            <li class="mb-3 text-muted">
              <i class="fa fa-check mr-2 text-primary fa-check-primary1"></i> Everything in Free amet</li>
            <li class="mb-3 text-muted">
              <i class="fa fa-check mr-2 text-primary fa-check-primary1"></i> Checklist templates</li>
            <li class="mb-3 text-muted">
              <i class="fa fa-check mr-2 text-primary fa-check-primary1"></i> Premium integration</li>
            <li class="mb-3 text-muted">
              <i class="fa fa-check mr-2 text-primary fa-check-primary1"></i>30-day trial</li>
           
            
          </ul>
          <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill pric-button-item px-5 mx-5 mb-3">Get started</a>
        </div>
      </div>
    
      <div class="col-lg-4 mb-5 mb-lg-0 col-lg-mblg-0">
        <div class="bg-white p-5 rounded-lg shadow text-start bd_pricing_img">
          <h1 class="hwhite">Basic plan</h1>
          <h2 class="hte">$10<span class="tex0">   / month</span></h2>

          {/* <div class="custom-separator my-4 mx-auto bg-primary"></div> */}

          <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
            <li class="mb-3 text-white-50">
              <i class="fa fa-check mr-2 text-primary fa-check-primary"></i> Everything in Free amet</li>
            <li class="mb-3 text-white-50">
              <i class="fa fa-check mr-2 text-primary fa-check-primary"></i> Checklist templates</li>
            <li class="mb-3 text-white-50">
              <i class="fa fa-check mr-2 text-primary fa-check-primary"></i> Premium integration</li>
            <li class="mb-3 text-white-50">
              <i class="fa fa-check mr-2 text-primary fa-check-primary"></i>30-day trial</li>
           
            
          </ul>
          <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill pric-button-item px-5  mb-3">Get started</a>
        </div>
      </div>
    
      <div class="col-lg-4 mb-5 mb-lg-0 col-lg-mblg-0">
        <div class=" text-start">
        

          <div class=" bd_pricing_img1 p-5">

          <h1 class="hwhite">Basic plan</h1>
          <h2 class="hte">$10<span class="tex0">   / month</span></h2>
          </div>

          <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
            <li class="mb-3 text-muted">
              <i class="fa fa-check mr-2 text-primary fa-check-primary1"></i> Everything in Free amet</li>
            <li class="mb-3 text-muted">
              <i class="fa fa-check mr-2 text-primary fa-check-primary1"></i> Checklist templates</li>
            <li class="mb-3 text-muted">
              <i class="fa fa-check mr-2 text-primary fa-check-primary1"></i> Premium integration</li>
            <li class="mb-3 text-muted">
              <i class="fa fa-check mr-2 text-primary fa-check-primary1"></i>30-day trial</li>
           
            
          </ul>
          <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill pric-button-item px-5 mx-5 mb-3">Get started</a>
        </div>
      </div>



      
   

    </div>
  </div>

        </div>
    );
};

export default Pricing;