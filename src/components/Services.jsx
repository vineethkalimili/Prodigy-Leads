import React from 'react';
import { FaDesktop, FaUserGraduate, FaChalkboardTeacher, FaNetworkWired } from 'react-icons/fa';
import '../styles/components/services.css';

const Services = () => {
  const services = [
    {
      title: "Technical Support",
      description: "24/7 real-time assistance for software, hardware, network, and system issues.",
      icon: <FaDesktop size={40} />,
      features: [
        "Remote and on-site support",
        "Hardware troubleshooting",
        "Software installation",
        "Network configuration"
      ]
    },
    {
      title: "Guidance & Mentorship",
      description: "One-on-one support and mentoring to help your team overcome technical challenges.",
      icon: <FaUserGraduate size={40} />,
      features: [
        "Personalized coaching",
        "Career development",
        "Technical skill building",
        "Problem-solving strategies"
      ]
    },
    {
      title: "IT Training",
      description: "Customized training sessions to develop your team's IT skills and knowledge.",
      icon: <FaChalkboardTeacher size={40} />,
      features: [
        "Custom training programs",
        "Workshops & seminars",
        "Certification preparation",
        "Ongoing learning resources"
      ]
    },
    {
      title: "Managed IT Services",
      description: "Comprehensive IT management to keep your systems running smoothly.",
      icon: <FaNetworkWired size={40} />,
      features: [
        "Proactive monitoring",
        "Regular maintenance",
        "Security management",
        "Performance optimization"
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p className="section-subtitle">Comprehensive IT solutions tailored to your needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;