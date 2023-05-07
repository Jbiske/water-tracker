import React from 'react';
import './Navbar.css';

function Navigation() {
  return (
<div className='box'> 
    <nav className="navbar">
      <div className="brand"><a href="/">Water Tracker</a></div>
      <ul className="menu">
        <li><a href="dashboard">Dashboard</a></li>
        <li><a href="log-water">Log Water</a></li>
        <li><a href="settings">Settings</a></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navigation;