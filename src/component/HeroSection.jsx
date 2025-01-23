import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Text Box</h1>
        <h3>text box</h3>
        <button className="btn">Join Us</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis metus at tortor pulvinar varius.
        </p>
      </div>
      <div className="hero-image">
        <div className="placeholder"></div>
      </div>
    </section>
  );
};

export default HeroSection;
