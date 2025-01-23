import React from 'react';
import './App.css'; // Ensure you have this CSS file in the src directory.

function App() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <header>
        <nav className="navbar">
          <div className="navbar__home">
            <li>
              <a href="#home">Welcome</a>
            </li>
          </div>
          <ul className="navbar__links">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact" className="navbar__contact">
                Get in Touch
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section id="home" className="section home">
          <div className="home__first">
            <h1>Text Box</h1>
            <h3>Empowering innovation with advanced technology</h3>
            <button className="btn">Join the Revolution</button>
            <p>
              Our platform leverages cutting-edge machine learning (ML) techniques to provide solutions that bridge the gap between the physical and digital worlds. We specialize in automating processes, enhancing productivity, and delivering efficient solutions for various industries.
            </p>
          </div>
          <div className="home__second">
            <img src="km.webp" alt="Technology" /> {/* Ensure 'km.webp' exists in the public directory */}
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="section about">
          <div className="section__header">
            <h2>About Our Vision</h2>
          </div>
          <div className="section__content">
            <h3>Empowering Growth with Artificial Intelligence</h3>
            <p>
              We are passionate about using AI and ML technologies to help businesses improve operations, enhance decision-making, and create innovative products. Our team of experts focuses on providing solutions tailored to the needs of each client, ensuring optimal results and growth.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section features">
          <div className="section__header">
            <h2>Our Key Features</h2>
          </div>
          <div className="features__item">
            <h3>Intelligent Data Processing</h3>
            <p>
              Harnessing the power of data analytics and ML algorithms, we turn raw data into actionable insights that drive business growth.
            </p>
          </div>
          <div className="features__item">
            <h3>Automation for Efficiency</h3>
            <p>
              We build systems that automate routine tasks, improving efficiency and reducing human error across various processes.
            </p>
          </div>
          <div className="features__item">
            <h3>Scalable Solutions</h3>
            <p>
              Our solutions are built with scalability in mind, ensuring that they grow with your business and can be easily adapted to future needs.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <h2>Get in Touch</h2>
          <p>
            We are here to assist you. If you have any questions or would like to discuss how our solutions can help your business, feel free to reach out.
          </p>
          <button className="btn">Contact Us</button>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Innovative Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
