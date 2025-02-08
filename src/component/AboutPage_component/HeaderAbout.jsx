import './HeaderAbout.css';
import React from 'react';
import { Link } from 'react-router-dom';

function HeaderAbout() {
    return (
        <>
<header className='header3'>
  <nav className="navbar">
     
     <ul className="home">
   <li> <Link to="/"  >HOME</Link>  </li>
     </ul>
     
   

    <ul className="nav-links">
      
        <li><Link to="/Aboutuspage">ABOUT</Link></li>
        <li><Link to="/Servicepage">RESOURCES</Link></li>
      
      
      <li><Link to="/Join-us" className='join-us-nav'>JOIN US</Link></li>
    </ul>
  </nav>

</header>

  
  








        </>
    );
}

export default HeaderAbout;
