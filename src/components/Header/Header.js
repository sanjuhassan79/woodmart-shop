import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './ghjg.css'
const Header = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    
	 <>
   	<nav class="navbar navbar-expand-lg p-0 navbar-light">
  <div class="container">


    <Link class="navbar-brand" to="#">Navbar</Link>


   


    <button type="button" onClick={showSidebar} class="navbar-toggler" data-toggle="drawer" data-target="#drawer-1">
    <span class="navbar-toggler-icon"></span>
</button>




    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="exo-menu">
			<li><Link className="active" to="#"> Home</Link></li>
			<li className="drop-down"><Link to="#"> Flyout</Link>
			
				<ul className="drop-down-ul animated fadeIn">
				<li className="flyout-right"><Link to="#">Flyout Right</Link>
					<ul className="animated fadeIn">
						<li><Link to="#">Mobile</Link></li>
						<li><Link to="#">Computer</Link></li>
						<li><Link to="#">Watch</Link></li>
					</ul>
				</li>
				
				<li className="flyout-left"><Link to="#">Flyout Left</Link>
					<ul className="animated fadeIn">
						<li><Link to="#">Mobile</Link></li>
						<li><Link to="#">Computer</Link></li>
						<li><Link to="#">Watch</Link></li>
					</ul>			
				</li>
				
				<li><Link to="#">No Flyout</Link></li>
				 
				</ul>
			
			
			</li>
			<li><Link to="#"> Services</Link></li>
			<li><Link to="#">Portfolio</Link></li>
			<li className="mega-drop-down"><Link to="#"> Mega Menu</Link>
				<div className="animated fadeIn mega-menu">
					<div className="mega-menu-wrap">
						<div className="row">
						<div className="col-md-4">
							<h4 className="row mega-title">Feature</h4>
								<img className="img-responsive" src="https://3.bp.blogspot.com/-rUk36pd-LbM/VcLb48X4f-I/AAAAAAAAGCI/Y_UxBAgEqwA/s1600/Magento_themes.jpg"alt=''/>
							</div>
							<div className="col-md-2">
									<h4 className="row mega-title">Standers</h4>
								<ul className="stander">
									<li><Link to="#">Mobile</Link></li>
									<li><Link to="#">Computer</Link></li>
									<li><Link to="#">Watch</Link></li>
									<li><Link to="#">laptop</Link></li>
									<li><Link to="#">Camera</Link></li>
									<li><Link to="#">I pad</Link></li>
									<li><Link className="view-more btn- btn-sm" to="#">View more</Link></li>
								</ul>
							</div>
							<div className="col-md-3">
								<h4 className="row mega-title">Description</h4>
								<ul className="description">
									<li><Link to="#">Women</Link>
										<span>Description of Women</span>
									</li>
									<li><Link to="#">Men</Link>
											<span>Description of men Cloths</span>
									</li>
									<li><Link to="#">Kids</Link>
											<span>Description of Kids Cloths</span>
									</li>
									<li><Link to="#">Others</Link>
											<span>Description of Others Cloths</span>
									</li>
									<li>
									<Link className="view-more btn btn-sm " to="#">View more</Link>
											 
									</li>
								</ul>
							</div>
							<div className="col-md-3">
							<h4 className="row mega-title">Icon + Description</h4>
								<ul className="icon-des">
									<li><Link to="#"><i className="fa fa-globe"></i>Web</Link></li>
									<li><Link to="#"><i className="fa fa-mobile"></i>Mobile</Link></li>
									<li><Link to="#"><i className="fa fa-arrows-h"></i>Responsive</Link></li>
									<li><Link to="#"><i className="fa fa-desktop"></i>Desktop</Link></li>
									<li><Link to="#"><i className="fa fa-paint-brush"></i>UI/UX</Link></li>
								</ul>
							</div>
							
						</div>
					</div>	
				</div>
			</li>

	
	</ul>






  <div className='topItemheader'>
            <div className="item__all">
                <ul>
                  
                    <li>
                        <Link to="#">SPECIAL OFFER</Link>
                    </li>
                    <li>
                        <Link to="#">PURCHASE THEME</Link>
                    </li>
                   
                </ul>
            </div>
            <div className="item__all">
            <ul class="social-share d-flex liststyle">
				<li class="facebook"><Link to="#"><i class="fab fa-facebook-f"></i></Link></li>
				<li class="facebook"><Link to="#"><i class="fab fa-linkedin-in"></i></Link></li>
				<li class="facebook"><Link to="#"><i class="fab fa-github"></i></Link></li></ul>
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