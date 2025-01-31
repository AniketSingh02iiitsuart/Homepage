import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
<header>
  <nav className="navbar">
    <ul className="home">  
      <li><Link to="/">Home</Link></li>  
    </ul>

    <ul className="nav-links">
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Resources">Resources</Link></li>
      <li><Link to="/Join-us" className='joinus'>Join us</Link></li>
    </ul>
  </nav>
</header>
        </>
    );
}

export default Navbar;
