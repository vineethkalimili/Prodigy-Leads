import React from 'react';
import '../styles/components/hero.css';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Expert IT Support & Technical Mentorship</h1>
          <p>
            Prodigy Leads provides real-time assistance and troubleshooting for all your IT needs, 
            from software to hardware and network solutions with 24/7 availability.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="primary-button">Get Support Now</a>
            <a href="#services" className="secondary-button">Our Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Availability</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Clients Served</p>
            </div>
            <div className="stat-item">
              <h3>15min</h3>
              <p>Average Response Time</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="IT Support Team" />
        </div>
      </div>
    </section>
  );
};

export default Hero;