import React, { useState } from 'react';
import './ThemeToggle.scss'; // Optional for styling (SCSS)

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}

export default ThemeToggle;
