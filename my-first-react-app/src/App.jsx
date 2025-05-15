import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Seminar1 from './pages/Seminar1';
import Seminar2 from './pages/Seminar2';
import Seminar3 from './pages/Seminar3';
import Seminar4 from './pages/Seminar4';
import Seminar5 from './pages/Seminar5';
import Seminar6 from './pages/Seminar6';

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Seminar1">Seminar1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Seminar2">Seminar2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Seminar3">Seminar3</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Seminar4">Seminar4</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Seminar5">Seminar5</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Seminar6">Seminar6</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Seminar1" element={<Seminar1 />} />
        <Route path="/Seminar2" element={<Seminar2 />} />
        <Route path="/Seminar3" element={<Seminar3 />} />
        <Route path="/Seminar4" element={<Seminar4 />} />
        <Route path="/Seminar5" element={<Seminar5 />} />
        <Route path="/Seminar6" element={<Seminar6 />} />
      </Routes>
    </Router>
  );
};

export default App;