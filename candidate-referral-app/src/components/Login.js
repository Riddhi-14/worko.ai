// src/components/Login.js
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/authService';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      const response = await axios.post('/api/login', data); // Replace with your login API
      AuthService.setToken(response.data.token);
      navigate('/candidate/home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            {...register('username', { required: true })}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          {errors.username && <span className="invalid-feedback">This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: true })}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && <span className="invalid-feedback">This field is required</span>}
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
