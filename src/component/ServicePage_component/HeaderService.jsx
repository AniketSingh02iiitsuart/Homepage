import './HeaderService.css';

import React from 'react';
import { Link } from 'react-router-dom';

function HeaderService() {
    return (
        <>
<header className='header2'>
  <nav className="navbar">
     
     <ul className="home">
   <li> <Link to="/"  >HOME</Link>  </li>
     </ul>
     
   

    <ul className="nav-links">
      
        <li><Link to="/Aboutuspage">ABOUT</Link></li>
        <li><Link to="/Servicepage">RESOURCES</Link></li>
      
      
      <li><Link to="/Join-us" className='join'>JOIN US</Link></li>
    </ul>
  </nav>
   


  <div className="service-container" >
     
     <div className="service-content">
       <h1>Text Box</h1>
       <p className="italic-text">Text Box</p>
     </div>
   </div>


     



</header>
        </>
    );
}

export default HeaderService;
