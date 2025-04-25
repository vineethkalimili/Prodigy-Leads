import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/components/header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">Prodigy Leads</a>
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" className="cta-button" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;