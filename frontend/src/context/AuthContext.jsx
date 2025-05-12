import { createContext, useState, useEffect, useContext } from 'react';
import authService from '../api/auth.service';

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial render
  useEffect(() => {
    const user = authService.getCurrentUser();
    setCurrentUser(user);
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const data = await authService.login(email, password);
      setCurrentUser(data);
      return data;
    } catch (error) {
      throw error;
    }
  };

  // Signup function
  const signup = async (name, rollno, email, password, confirmPassword) => {
    try {
      return await authService.signup(name, rollno, email, password, confirmPassword);
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    authService.logout();
    setCurrentUser(null);
  };

  // Context value
  const value = {
    currentUser,
    isLoggedIn: !!currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 