import React from 'react';
import { TrendingUp, Moon, Sun } from 'lucide-react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <TrendingUp size={32} className="logo-icon" />
          <h1 className="logo-text">Market Mosaic</h1>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Markets</a>
          <a href="#" className="nav-link">Portfolio</a>
          <a href="#" className="nav-link">Watchlist</a>
          <a href="#" className="nav-link">News</a>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
