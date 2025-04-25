import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/components/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">We're ready to help with your IT challenges</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Fill out the form or reach out directly through these channels:</p>
            
            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>support@prodigyleads.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4>Office</h4>
                  <p>123 Tech Street, Silicon Valley, CA 94000</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="primary-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;