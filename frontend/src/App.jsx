import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import { createContext, useState } from 'react';
import Profile from './pages/profile';
import ForgotPassword from './components/ForgotPassword';
import Download from './pages/Download';

export const SignUpContext = createContext();
export const UploadContext = createContext();
export const DownloadContext = createContext();

function App() {
  const [isUploadActive, setIsUploadActive] = useState(false);
  const [isDownloadActive, setIsDownloadActive] = useState(true);
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  return (
    <>
      <SignUpContext.Provider value={{ isSignUpActive, setIsSignUpActive }}>
        <DownloadContext.Provider value={{ isDownloadActive, setIsDownloadActive }}>
          <UploadContext.Provider value={{ isUploadActive, setIsUploadActive }}>
            <Router>
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/forgotpassword' element={<ForgotPassword />} />
                <Route path='/download' element={<Download />} />
              </Routes>
            </Router>
          </UploadContext.Provider>
        </DownloadContext.Provider>
      </SignUpContext.Provider>
    </>
  )
}

export default App
