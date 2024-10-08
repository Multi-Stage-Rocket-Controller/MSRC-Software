import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './views/splash.jsx';
import SimulationScreen from './views/simulation.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/main_window" element={<SplashScreen />} />
        <Route path="/simulation" element={<SimulationScreen />} />
      </Routes>
    </Router>
  </React.StrictMode>
);