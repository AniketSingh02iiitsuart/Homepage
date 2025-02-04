import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
<header>
  <nav className="navbar">
    <ul className="home">  
      <li><Link to="/">HOME</Link></li>  
    </ul>

    <ul className="nav-links">
      <li><Link to="/About">ABOUT</Link></li>
      <li><Link to="/Resources">RESOURCES</Link></li>
      <li><Link to="/Join-us" className='join-us-nav'>JOIN US</Link></li>
    </ul>
  </nav>
</header>
        </>
    );
}

export default Navbar;
