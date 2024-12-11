import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false); // state to track the theme

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // toggle between dark and light mode
  };

  return (
    <div className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className="logo">Clock</h1>
      <div className="linkPart">
        <Link to="/home">Home</Link>
        <Link to="/alarm">Alarm</Link>
        <Link to="/stopwatch">Stopwatch</Link>
      </div>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}
