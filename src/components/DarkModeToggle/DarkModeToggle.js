import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      <div className="toggle-container">
        <div className="toggle-icon">
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </div>
        <div className="toggle-slider"></div>
      </div>
    </button>
  );
};

export default DarkModeToggle;