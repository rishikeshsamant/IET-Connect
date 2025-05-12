import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
export default function Profile() {
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (currentUser && currentUser.student) {
            setUserData(currentUser.student);
        }
    }, [currentUser]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!userData) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <>
            <div className="mt-4">
                <Navbar />
            </div>
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="p-8 w-full">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                >
                                    Logout
                                </button>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">User Information</h2>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <span className="text-gray-500 w-24">Name:</span>
                                        <span className="font-medium">{userData.name}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-500 w-24">Roll No:</span>
                                        <span className="font-medium">{userData.rollno}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-500 w-24">Email:</span>
                                        <span className="font-medium">{userData.email}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => navigate('/')}
                                    className="text-[#674AFE] hover:underline"
                                >
                                    Go to Home
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}