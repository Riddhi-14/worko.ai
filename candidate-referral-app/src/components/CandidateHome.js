// src/components/CandidateHome.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import SearchComponent from './Common/SearchComponent';
import ListCard from './Common/ListCard';
import apiService from '../services/apiService';
import { AuthService } from '../services/authService';

const CandidateHome = () => {
  const navigate = useNavigate();
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const referrals$ = from(apiService.get('/referrals')).pipe(map(res => res.data));
        const services$ = from(apiService.get('/services')).pipe(map(res => res.data));
        
        referrals$.subscribe(setReferrals);
        services$.subscribe(setServices);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const logout = () => {
    AuthService.logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <button onClick={logout} className="btn btn-danger mt-3 mb-3">Logout</button>
      <SearchComponent />
      <div className="card-deck">
        <ListCard title="Referrals" items={referrals} />
        <ListCard title="Services" items={services} />
      </div>
    </div>
  );
};

export default CandidateHome;
