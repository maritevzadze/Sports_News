import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // Optional

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/news" className="nav-link">News</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
      <ThemeToggle /> {/* Optional for theme toggling */}
    </header>
  );
}

export default Header;
