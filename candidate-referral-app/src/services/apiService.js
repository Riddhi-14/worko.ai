// src/services/apiService.js
import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://any-api.com/clever_com/clever_com/docs/API_Description', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json'
  }
});

apiService.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default apiService;
