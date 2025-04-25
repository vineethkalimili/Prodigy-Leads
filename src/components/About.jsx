import React from 'react';
import aboutImage from '../assets/about-image.jpg';
import '../styles/components/about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-image">
          <img src={aboutImage} alt="Prodigy Leads Team" />
        </div>
        <div className="about-content">
          <h2>About Prodigy Leads</h2>
          <p>
            Founded in 2023, Prodigy Leads has been at the forefront of providing exceptional 
            IT support and technical mentorship to businesses of all sizes.
          </p>
          <p>
            Our team of certified professionals brings together decades of combined experience 
            in solving complex IT challenges while fostering growth through mentorship.
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <h3>Our Mission</h3>
              <p>
                To empower businesses through reliable IT solutions and cultivate 
                technical excellence through personalized mentorship.
              </p>
            </div>
            <div className="feature-item">
              <h3>Our Approach</h3>
              <p>
                We combine cutting-edge technology with human expertise to deliver 
                solutions that are both effective and easy to understand.
              </p>
            </div>
          </div>
          
          <a href="#contact" className="primary-button">Learn More About Us</a>
        </div>
      </div>
    </section>
  );
};

export default About;