import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  )
}

export default App
