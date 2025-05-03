import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavOpt = [
    { name: "Download", link: "/download" },
    { name: "Upload", link: "/upload" },
    { name: "Contact", link: "/contact" },
  ];

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
            <button className="bg-[#674AFE] px-4 py-2 rounded-full text-white hover:bg-[#a797fa]">
              Login
            </button>
            <button className="bg-black px-4 py-2 rounded-full text-white hover:bg-[#383838]">
              Register
            </button>
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
          <li>
            <button className="bg-[#674AFE] px-6 py-2 rounded-full text-white hover:bg-[#a797fa] w-40">
              Login
            </button>
          </li>
          <li>
            <button className="bg-black px-6 py-2 rounded-full text-white hover:bg-[#383838] w-40">
              Register
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
