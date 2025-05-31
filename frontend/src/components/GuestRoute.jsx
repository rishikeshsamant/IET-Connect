// components/GuestRoute.js
import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('token'); // adjust based on your auth logic
  return isLoggedIn ? <Navigate to="/profile" replace /> : children;
};

export default GuestRoute;
