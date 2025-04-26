import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/components/header.css';
import logo from '../assets/Logo.jpg'; 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.nav') && !event.target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="/" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src={logo} 
              alt="Prodigy Leads Logo" 
              width="180"
              height="auto"
              loading="lazy" // Optimized loading
            />
          </a>
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a></li>
            <li>
              <a 
                href="#contact" 
                className="cta-button" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;