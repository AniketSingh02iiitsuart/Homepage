import '../App.css';
import React from 'react';

function Navbar(){
    return (
        <>

<header>
  <nav className="navbar">
    <ul className="home">  
      <li><a href="#home">Home</a></li>  
    </ul>

    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#resources">Resources</a></li>
      <li><a href="#join-us" className='joinus'>Join us</a></li>
    </ul>
  </nav>
</header>

        </>
    );
}

export  default  Navbar