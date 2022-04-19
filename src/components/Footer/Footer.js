import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div  style={{backgroundColor: "#1c2331"}}>
            <div class="container-fluid containerpass">


<footer
        class="text-center text-lg-start text-white"
       
        >
  


  
  <section class="">
    <div class="text-center text-md-start pt-5">
      
      <div class="row">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 col-xmxmb-4">
          
        <Link class="footer-brand" to="#"><img src="https://i.ibb.co/SPWQ0kt/Group-3.png" alt="logo"/></Link>

        
          <p className='foo_title'>
            Here you can use rows and columns to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.
          </p>
          <ul class="social-icons">
    <li><a href="http://www.facebook.com"><img src="https://i.ibb.co/9YxgJLT/Facebook.png" width="30" class="rounded-circle"/>
            </a></li>
    <li><a href="http://www.facebook.com"><img src="https://i.ibb.co/JQPZcPD/instagram.png" width="30" class="rounded-circle"/>
            </a></li>
    <li><a href="http://www.facebook.com"><img src="https://i.ibb.co/sWvcGR0/twitter.png" width="30" class="rounded-circle"/>
            </a></li>
    <li><a href="http://www.facebook.com"><img src="https://i.ibb.co/ctLhP6Z/linkedin.png" width="30" class="rounded-circle"/>
            </a></li>
   
</ul>
        </div>
        

        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 col-xmxmb-4">
          
          <h6 class="textybold">Products</h6>
         
          <p>
            <a href="#!" class="texthite">Try free trial</a>
          </p>
          <p>
            <a href="#!" class="texthite">Pricing plan</a>
          </p>
          <p>
            <a href="#!" class="texthite">Features updates</a>
          </p>
          <p>
            <a href="#!" class="texthite">Chrome extentions</a>
          </p>


    




        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 col-xmxmb-4">
          
          <h6 class="textybold">Our product</h6>
         
          <p>
            <a href="#!" class="texthite">Task management</a>
          </p>
          <p>
            <a href="#!" class="texthite">Document management</a>
          </p>
          <p>
            <a href="#!" class="texthite">Client management</a>
          </p>
          <p>
            <a href="#!" class="texthite">Integration apps</a>
          </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 col-xmxmb-4">
          
          <h6 class="textybold">About us</h6>
         
          <p>
            <a href="#!" class="texthite">What is Tazkily</a>
          </p>
          <p>
            <a href="#!" class="texthite">Contact us</a>
          </p>
          <p>
            <a href="#!" class="texthite">Work with us</a>
          </p>
          
        </div>
       

        
    
        
      </div>
      
    </div>
  </section>
  
  
  <div class="row">
    <div class="col-12 col-md-4 col-lg-4 col-xl-4">
      <h4 className='love text-start ms-5'>Made with ❤ by Tazkily Team</h4>
    </div>
    <div class="col-12 col-md-4 col-lg-4 col-xl-4">
    <div
       class="textcent3 "
       
       >
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/"
       >MDBootstrap.com</a
      >
  </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4 col-xl-4">
      <p className='love '>Help center</p>
    </div>
 
</div>
 
  

</footer>


</div>

        </div>
    );
};

export default Footer;