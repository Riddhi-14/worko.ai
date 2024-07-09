// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import CandidateHome from './components/CandidateHome';
import { AuthService } from './services/authService';

const App = () => {
  const isAuthenticated = AuthService.isAuthenticated();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/candidate/home" element={isAuthenticated ? <CandidateHome /> : <Navigate to="/login" />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
