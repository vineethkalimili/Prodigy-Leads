import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import '../styles/components/testimonials.css';

const testimonials = [
  {
    quote: "Prodigy Leads transformed our IT infrastructure and provided exceptional mentorship to our team. Their 24/7 support is unmatched.",
    name: "Sarah Johnson",
    position: "CTO, TechSolutions Inc.",
    rating: 5
  },
  {
    quote: "The technical guidance we received helped our junior developers grow exponentially in just a few months. Highly recommend!",
    name: "Michael Chen",
    position: "Development Lead, InnovateCo",
    rating: 5
  },
  {
    quote: "Their response time to critical issues is incredible. They've become an extension of our own IT team.",
    name: "Emily Rodriguez",
    position: "Operations Manager, GlobalSoft",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by businesses across industries</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft size={24} />
              </div>
              <p className="quote">{testimonial.quote}</p>
              
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              
              <div className="author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;