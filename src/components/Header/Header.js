import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    
	 <>
   	<nav class="navbar navbar-expand-lg p-0 navbar-light fixed-top">
			<div class="container-fluid containerpass">


				<Link class="navbar-brand" to="#"><img src="https://i.ibb.co/SPWQ0kt/Group-3.png" class="img-thumbnail" alt="logo"/></Link>


				


				<button type="button" onClick={showSidebar} class="navbar-toggler" data-toggle="drawer" data-target="#drawer-1">
					<span class="navbar-toggler-icon"></span>
				</button>




				<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="exo-menu">
						<li><Link className="active" to="#"> Home</Link></li>
						
						<li><Link to="#"> About</Link></li>
						<li><Link to="#">Contact</Link></li>
						<li><Link to="#">Pricing</Link></li>
						<li><Link to="#">Blog</Link></li>
						

				
				</ul>






			<div className='topItemheader'>
						<div className="item__all">
							<ul className='d-flex'>
							
								<li>
									<Link to="#" className='custom-log'>Login</Link>
								</li>
								<li>
									<Link to="#" type="button" class="custom-but">Get started</Link>
								</li>
							
							</ul>
						</div>
						
					
					</div>
				</div>
			</div>
    </nav>
















    <div class={sidebar ? 'drawer drawer-left slide nav-menu active' : 'nav-menu'} tabindex="-1" role="dialog" aria-labelledby="drawer-1-title" aria-hidden="true" id="drawer-1">
    <div class="drawer-content drawer-content-scrollable" role="document">
        <div class="drawer-header">
            <h4 class="drawer-title" id="drawer-1-title">Drawer Title</h4>
        </div>
        <div class="drawer-body">
            <p>Drawer body</p>
            <button type="button" class="btn btn-secondary btn-block" data-dismiss="drawer" aria-label="Close">
                Close
            </button>
        </div>
        <div class="drawer-footer">Drawer footer</div>
    </div>
</div>
   </>
	
	 
	 
	 
	 


  );
};

export default Header;