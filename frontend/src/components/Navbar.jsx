import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SignUpContext } from "../App";
import authService from "../api/auth.service";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setIsSignUpActive } = useContext(SignUpContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(authService.isLoggedIn());
  }, []);

  const NavOpt = [
    { name: "Download", link: "/download" },
    { name: "Upload", link: "/upload" },
    { name: "Contact", link: "/contact" },
  ];

  const handleLoginClick = () => {
    setIsSignUpActive(false);
    navigate('/login');
  };

  const handleRegisterClick = () => {
    setIsSignUpActive(true);
    navigate('/login');
  };

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center border-2 border-gray-300 rounded-xl w-[90vw] mx-auto md:h-20 h-10 px-6 font-medium">
        <div className="text-blue-700 font-bold md:text-2xl text-xl">
          <Link to="/">IET Connect</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-16 items-center">
          <ul className="flex gap-10">
            {NavOpt.map((opt, index) => (
              <li key={index}>
                <Link to={opt.link}>{opt.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            {isLoggedIn ? (
              <>
                <button 
                  className="bg-[#674AFE] px-4 py-2 rounded-full text-white hover:bg-[#a797fa]" 
                  onClick={handleProfile}
                >
                  Profile
                </button>
                <button 
                  className="bg-red-500 px-4 py-2 rounded-full text-white hover:bg-[#383838]" 
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  className="bg-[#674AFE] px-4 py-2 rounded-full text-white hover:bg-[#a797fa]" 
                  onClick={handleLoginClick}
                >
                  Login
                </button>
                <button 
                  className="bg-black px-4 py-2 rounded-full text-white hover:bg-[#383838]" 
                  onClick={handleRegisterClick}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="block md:hidden cursor-pointer">
          <MenuIcon fontSize="large" onClick={() => setMobileMenuOpen(true)} />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <CloseIcon fontSize="large" onClick={() => setMobileMenuOpen(false)} className="cursor-pointer" />
        </div>
        <ul className="flex flex-col items-center gap-8 mt-10 text-xl">
          {NavOpt.map((opt, index) => (
            <li key={index}>
              <Link to={opt.link} onClick={() => setMobileMenuOpen(false)}>
                {opt.name}
              </Link>
            </li>
          ))}
          {isLoggedIn ? (
            <>
              <li>
                <button 
                  className="bg-[#674AFE] px-6 py-2 rounded-full text-white hover:bg-[#a797fa] w-40" 
                  onClick={() => {
                    handleProfile();
                    setMobileMenuOpen(false);
                  }}
                >
                  Profile
                </button>
              </li>
              <li>
                <button 
                  className="bg-red-500 px-6 py-2 rounded-full text-white hover:bg-[#383838] w-40" 
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button 
                  className="bg-[#674AFE] px-6 py-2 rounded-full text-white hover:bg-[#a797fa] w-40" 
                  onClick={() => {
                    setIsSignUpActive(false);
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                >
                  Login
                </button>
              </li>
              <li>
                <button 
                  className="bg-black px-6 py-2 rounded-full text-white hover:bg-[#383838] w-40" 
                  onClick={() => {
                    setIsSignUpActive(true);
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                >
                  Register
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
