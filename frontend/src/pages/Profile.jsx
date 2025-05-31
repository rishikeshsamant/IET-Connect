import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../App";

export default function Profile() {
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className={"h-[100vh]" + (theme === "dark" ? " bg-gray-900 text-white" : " bg-gray-100 text-gray-900")}>
            <div className="p-4">
                <Navbar />
            </div>
            <div className={"max-w-md mx-auto mt-16 p-6 border rounded-xl shadow-lg text-center" + (theme === "dark" ? " bg-gray-800 text-white" : " bg-white text-gray-900")}>
                <h1 className="text-2xl font-bold text-blue-700">Welcome, {user?.name || "User"}!</h1>
                <p className="mt-2 text-gray-700">Email: {user?.email || "Not available"}</p>
                <button
                    onClick={handleLogout}
                    className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
