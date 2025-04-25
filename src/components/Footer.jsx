import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Prodigy Leads</h3>
            <p>
              Providing exceptional IT support and technical mentorship 
              to help businesses thrive in the digital age.
            </p>
            <div className="social-links">
              <a href="#"><FaLinkedin size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="#"><FaFacebook size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Technical Support</a></li>
              <li><a href="#">IT Mentorship</a></li>
              <li><a href="#">Training Programs</a></li>
              <li><a href="#">Managed Services</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form>
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Prodigy Leads. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;