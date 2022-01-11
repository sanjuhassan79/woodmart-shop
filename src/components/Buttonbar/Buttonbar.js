import React from 'react';
import { Link } from 'react-router-dom';
import './Buttonbar.css'
const Buttonbar = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                <div class="dropdown">
  <button class="btn btn-secondary-item dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
 
</div>
                </div>
                <div class="col-md-7">
                <div class="search"> <i class="fa fa-search"></i> <input type="text" class="form-control" placeholder="Have a question? Ask Now"/> <button class="btn btn-primary">Search</button> </div>
        
                </div>
                <div class="col-md-3">
                <div className="item__all">
                <ul>
                    <li className='itemicon'>
                        <Link to="#"> <i className="fas fa-phone-alt fass"></i>  +73 099 321 312</Link>
                    </li>
                    <li className='itemicon'>
                        <Link to="#"> <i class="fas fa-shopping-cart fass"></i>  3 items</Link>
                    </li>
                    
                    
                </ul>
            </div>
           
            </div>
        </div>
  
 
</div>
    );
};

export default Buttonbar;