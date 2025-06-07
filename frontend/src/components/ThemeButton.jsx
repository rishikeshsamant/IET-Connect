import { useContext } from 'react';
import { ThemeContext } from '../App';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
    setTheme(prevTheme => {
        const newTheme = prevTheme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme); // Save to localStorage
        return newTheme;
    });
};


    return (
        <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-full text-white ${theme === "light" ? "bg-black hover:bg-gray-800" : "bg-gray-500 hover:bg-gray-300"}`}
        >
            {theme === "light" ? <BedtimeIcon /> : <SunnyIcon />}
        </button>
    );
}