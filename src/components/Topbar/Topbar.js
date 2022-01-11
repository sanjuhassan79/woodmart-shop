import React from 'react';
import { Link } from 'react-router-dom';
import './topItem.css'
const Topbar = () => {
    return (

        <div class="container">
 <div className='topItem'>
            <div className="item__all">
                <ul>
                    <li>
                        <Link to="#"> <i className="far fa-envelope-open"></i> NEWSLETTER</Link>
                    </li>
                    <li>
                        <Link to="#">CONTACT US</Link>
                    </li>
                    <li>
                        <Link to="#">FAQS</Link>
                    </li>
                    <li>
                        <Link to="#">FREE SHIPPING FOR ALL ORDERS OF $150</Link>
                    </li>
                </ul>
            </div>
            <div className="item__all">
                <ul>
                    <li>
                        <Link to="#"> <i className="fas fa-compress-alt"></i> COMPARE</Link>
                    </li>
                    <li>
                        <Link to="#"> <i class="far fa-heart"></i> WISHLIST</Link>
                    </li>
                    <li>
                        <Link to="#">LOGIN / REGISTER</Link>
                    </li>
                    
                </ul>
            </div>
           
        </div>
</div>
        
    );
};

export default Topbar;