// src/services/authService.js
export class AuthService {
    static isAuthenticated() {
      return !!localStorage.getItem('authToken');
    }
  
    static setToken(token) {
      localStorage.setItem('authToken', token);
    }
  
    static logout() {
      localStorage.removeItem('authToken');
    }
  }
  