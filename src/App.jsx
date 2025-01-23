import React from 'react';
import './App.css'; // Ensure you have this CSS file in the src directory.

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="home">
            <li>
              <a href="#home">Home</a>
            </li>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <a href="#join-us" className="joinus">
                Join us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="home-section">
          <div className="home-first">
            <h1>Text Box</h1>
            <h3>Text Box</h3>
            <button className="btn">Join us</button>
            <p>
              The proposed idea involves machine learning (ML) techniques for OCR to accurately convert handwritten
              equations into digital format. Once the handwritten input is converted into digital format, the system
              will perform various mathematical operations such as finding roots, integration, and differentiation.
            </p>
          </div>
          <div className="home-second">
            <img src="km.webp" alt="Sample" /> {/* Ensure 'km.webp' exists in the public directory */}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="aboutus">
            <h2>About Us</h2>
          </div>
          <div className="aboutpart">
            <h3>The proposed idea involves machine learning (ML) techniques for OCR</h3>
          </div>
          <div>
            <p>
              The proposed idea involves machine learning (ML) techniques for OCR to accurately convert handwritten
              equations into digital format. Once the handwritten input is converted into digital format, the system
              will perform various mathematical operations such as finding roots, integration, and differentiation. This
              integrated approach aims to provide accurate solutions for handwritten mathematical content.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="aboutus">
            <h2>Services</h2>
          </div>
          <div className="services1">
            <p>
              The proposed idea involves machine learning (ML) techniques for OCR to accurately convert handwritten
              equations into digital format.
            </p>
          </div>
          <div className="services1">
            <p>
              Once the handwritten input is converted into digital format, the system will perform various mathematical
              operations such as finding roots, integration, and differentiation.
            </p>
          </div>
          <div className="services1">
            <p>
              This integrated approach aims to provide accurate solutions for handwritten mathematical content and make
              it ready for mathematical operations.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <p>We would love to hear from you. Get in touch!</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
