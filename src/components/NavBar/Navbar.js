import React, { useState } from 'react';
import './Navbar.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import logo from '../../assets/resonate_logo_white.svg';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar glass-effect">
      <div className="navbar-container">

        <div className="navbar-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Resonate Logo" className="logo-icon" />
          <span className="logo-text">Resonate</span>
        </div>

       <button
          className={`hamburger ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button> 

        <div className={`navbar-links ${open ? 'open' : ''}`}>
          <a
            href="https://aossie.org"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={handleLinkClick}
          >
            AOSSIE <FaExternalLinkAlt size={12} />
          </a>

          <a
            href="https://github.com/AOSSIE-Org/Resonate"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={handleLinkClick}
          >
            <FaGithub size={20} />
          </a>

          <DarkModeToggle />

          <a
            href="https://play.google.com/store/apps/details?id=com.resonate.resonate"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
            onClick={handleLinkClick}
          >
            Download Now
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;