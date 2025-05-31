import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Profile() {
    const navigate = useNavigate();

    // Simulate getting user data (you could fetch it from backend too)
    const user = JSON.parse(localStorage.getItem("user"));

    // Redirect if not logged in
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
        <>
            <div className="m-4">
                <Navbar />
            </div>
            <div className="max-w-md mx-auto mt-16 p-6 border rounded-xl shadow-lg text-center">
                <h1 className="text-2xl font-bold text-blue-700">Welcome, {user?.name || "User"}!</h1>
                <p className="mt-2 text-gray-700">Email: {user?.email || "Not available"}</p>
                <button
                    onClick={handleLogout}
                    className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
                >
                    Logout
                </button>
            </div>
        </>
    );
}
