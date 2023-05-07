import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Welcome to the Water Tracker</h1>
          <p className="lead mb-4">Log your daily water intake and to help stay hydrated throughout your day.</p>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="list-group-item">
              <Link to="/log-water">Log Water</Link>
            </li>
            <li className="list-group-item">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;