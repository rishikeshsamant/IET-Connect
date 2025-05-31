import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from "../App";
import ThemeButton from "./ThemeButton";

export default function Navbar({ setIsSignUpActive }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { theme} = useContext(ThemeContext);

  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const NavOpt = [
    { name: "Download", link: "/download" },
    { name: "Upload", link: "/upload" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <nav className={"flex justify-between items-center border-2 border-gray-300 rounded-xl w-[90vw] mx-auto md:h-20 h-10 px-6 font-medium" + (theme === "dark" ? " bg-gray-900 text-white" : " bg-white text-gray-900")}>
        <div className="text-blue-700 font-bold md:text-2xl text-xl load">
          <Link to="/">IET Connect</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-16 items-center">
          <ul className="flex gap-10">
            {NavOpt.map((opt, index) => (
              <li key={index} className="load">
                <Link to={opt.link}>{opt.name}</Link>
              </li>
            ))}
          </ul>
          <div>
            <ThemeButton />
          </div>
          <div className="flex gap-4 items-center load">
            {isLoggedIn ? (
              <>
                <button className="bg-[#674AFE] px-4 py-2 rounded-full text-white hover:bg-[#a797fa]">
                  <Link to={"/profile"}>Profile</Link>
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="bg-[#674AFE] px-4 py-2 rounded-full text-white hover:bg-[#a797fa]" onClick={() => setIsSignUpActive(false)}>
                  <Link to={"/login"}>Login</Link>
                </button>
                <button className="bg-black px-4 py-2 rounded-full text-white hover:bg-[#383838]" onClick={() => setIsSignUpActive(true)}>
                  <Link to={"/login"}>Register</Link>
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
          <div>
            <ThemeButton />
          </div>

          {isLoggedIn ? (
            <>
              <li>
                <button className="bg-[#674AFE] px-6 py-2 rounded-full text-white hover:bg-[#a797fa] w-40">
                  <Link to={"/profile"} onClick={() => setMobileMenuOpen(false)}>Profile</Link>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-red-600 px-6 py-2 rounded-full text-white hover:bg-red-700 w-40"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button className="bg-[#674AFE] px-6 py-2 rounded-full text-white hover:bg-[#a797fa] w-40" onClick={() => {
                  setIsSignUpActive(false);
                  setMobileMenuOpen(false);
                }}>
                  <Link to={"/login"}>Login</Link>
                </button>
              </li>
              <li>
                <button className="bg-black px-6 py-2 rounded-full text-white hover:bg-[#383838] w-40" onClick={() => {
                  setIsSignUpActive(true);
                  setMobileMenuOpen(false);
                }}>
                  <Link to={"/login"}>Register</Link>
                </button>
              </li>
            </>
          )}

        </ul>
      </div>
    </>
  );
}
