// src/components/LandingPage.js
import React from 'react';
import SearchComponent from './Common/SearchComponent';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container">
      <h1>Welcome to Our Service</h1>
      <SearchComponent />
      <Link to="/login" className="btn btn-primary mt-3">Login</Link>
    </div>
  );
};

export default LandingPage;
