import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#join" className="joinus">Join Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
