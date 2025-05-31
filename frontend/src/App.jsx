import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Profile from './pages/profile';
import ForgotPassword from './components/ForgotPassword';
import Download from './pages/Download';
import GuestRoute from './components/GuestRoute';

import { createContext, useState } from 'react';

export const SignUpContext = createContext();
export const UploadContext = createContext();
export const DownloadContext = createContext();
export const ThemeContext = createContext();

function App() {
  const [isUploadActive, setIsUploadActive] = useState(false);
  const [isDownloadActive, setIsDownloadActive] = useState(true);
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");


  return (
    <SignUpContext.Provider value={{ isSignUpActive, setIsSignUpActive }}>
      <DownloadContext.Provider value={{ isDownloadActive, setIsDownloadActive }}>
        <UploadContext.Provider value={{ isUploadActive, setIsUploadActive }}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <Router>
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route
                  path='/login'
                  element={
                    <GuestRoute>
                      <Login />
                    </GuestRoute>
                  }
                />
                <Route path='/profile' element={<Profile />} />
                <Route path='/forgotpassword' element={<ForgotPassword />} />
                <Route path='/download' element={<Download />} />
              </Routes>
            </Router>
          </ThemeContext.Provider>
        </UploadContext.Provider>
      </DownloadContext.Provider>
    </SignUpContext.Provider>
  );
}

export default App;
