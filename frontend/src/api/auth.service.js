import apiClient from './api.client';

// Authentication services
const authService = {
  // Login user
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  // Register new user
  signup: async (name, rollno, email, password, confirmPassword) => {
    try {
      const response = await apiClient.post('/auth/signup', {
        name,
        rollno,
        email,
        password,
        confirmPassword
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('user');
  },

  // Get current user data
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return localStorage.getItem('user') !== null;
  },

  // Get auth token
  getToken: () => {
    const user = authService.getCurrentUser();
    return user?.token;
  },
};

export default authService; 