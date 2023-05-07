import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './pages/Navbar';
import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;