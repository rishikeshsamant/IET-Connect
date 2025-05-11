import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import { createContext, useState } from 'react';
import Profile from './pages/profile';
import ForgotPassword from './components/ForgotPassword';

// export const LoginContext = createContext();
export const SignUpContext = createContext();

function App() {
  // const [isLoginActive, setIsLoginActive] = useState(false);
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  return (
    <>
      <SignUpContext.Provider value={{ isSignUpActive, setIsSignUpActive }}>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/forgotpassword' element={<ForgotPassword/>} />
          </Routes>
        </Router>
      </SignUpContext.Provider>
    </>
  )
}

export default App
