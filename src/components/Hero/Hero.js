import React from 'react';
import './Hero.css';
import { FaGithub, FaArrowRight, FaChevronRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Effects */}
      <div className="retro-grid">
        <div className="retro-grid-lines">
          <div className="retro-grid-animate"></div>
        </div>
        <div className="retro-grid-fade"></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="hero-container">
        <div className="hero-content">
          
          {/* Badge */}
          <div className="hero-badge animate-fade-in delay-100">
            <span>Build for everyone</span>
            <FaChevronRight size={12} />
          </div>

          <h1 className="hero-title animate-fade-in delay-200">
            <span>Clubhouse, but</span>
            <span className="text-gradient">Open Source</span>
          </h1>
          
          <h2 className="hero-subtitle animate-fade-in delay-300">
            Resonate is a social voice platform that allows you to create and join rooms to chat with people from all over the world.
          </h2>

          <div className="hero-buttons animate-fade-in delay-400">
            <a 
              href="https://play.google.com/store/apps/details?id=com.resonate.resonate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <span className="btn-text">Get Started</span>
              <FaArrowRight className="btn-icon" />
            </a>
            <a 
              href="https://github.com/AOSSIE-Org/Resonate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <span className="btn-text">Watch Demo</span>
              <FaPlay className="btn-icon" size={12} style={{ marginLeft: '8px' }}/>
            </a>
          </div>

          <div className="trust-indicators animate-fade-in delay-500">
            <p className="trust-text">Trusted by Open Source Community</p>
            <div className="trust-badges">
              <span>⭐ 4.9/5 Rating</span>
              <span>🔒 Secure</span>
              <span>📱 Mobile First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
