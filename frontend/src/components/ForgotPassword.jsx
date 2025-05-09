import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyIcon from '@mui/icons-material/Key';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);
    const [email, setEmail] = useState("");
    const [otpPage, setOtpPage] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const DummyData = [
        { email: "yasir@gmail.com", otp: "1234" },
        { email: "yasir1@gmail.com", otp: "4321" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError(false);
        const match = DummyData.find((user) => user.email === email);
        if (match) {
            setSuccessMessage('🎉 Email Validated');
            setTimeout(() => setOtpPage(true), 1500);
        } else {
            setEmailError(true);
        }
    };

    return (
        <div className='flex h-screen w-screen justify-center items-center bg-[#674AFE] md:bg-white'>
            <div className="hidden md:flex flex-col justify-center items-center gap-6 bg-[#674AFE] text-white w-1/2 h-full">
                <h1 className='text-5xl font-bold' onClick={() => navigate("/")}>IET Connect</h1>
                <p className='text-lg text-center'>Where innovation<br />meets blah blah blah</p>
                <div className="flex gap-4 mt-4">
                    {[LinkedInIcon, XIcon, InstagramIcon, GitHubIcon].map((Icon, idx) => (
                        <div key={idx} className="h-12 w-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#674AFE] transition">
                            <Icon style={{ fontSize: '1.5rem' }} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center md:w-1/2 h-full w-full">
                <div className="bg-white rounded-[2rem] border border-gray-300 p-8 md:w-96 relative shadow-lg w-[90vw]">
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#674AFE] text-white rounded-full h-20 w-20 flex items-center justify-center shadow-md">
                        <PersonIcon style={{ fontSize: '2.5rem' }} />
                    </div>

                    <div className="mt-12 text-center">
                        <h2 className="text-2xl font-bold">Forgot Password</h2>
                        <p className="text-gray-600 text-sm mt-1">Sad to hear that. Let’s try our best!</p>
                    </div>

                    {
                        otpPage ? <OTPForm DummyData={DummyData} /> : (
                            <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
                                <div className="flex items-center border border-gray-400 rounded px-3 py-2">
                                    <EmailIcon className="text-black mr-2" />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        className="outline-none w-full"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                {emailError && <p className='text-red-500 text-sm'>Email not found.</p>}
                                {successMessage && <p className='text-green-500 text-sm'>{successMessage}</p>}
                                <button type="submit" className="bg-[#674AFE] text-white py-2 rounded font-semibold hover:opacity-90 transition w-full mt-4">
                                    Get Code
                                </button>
                            </form>
                        )
                    }
                </div>
            </div>
        </div>
    );
}


function OTPForm({ DummyData }) {
    const [otpError, setOTPError] = useState(false);
    const [otp, setOtp] = useState("");
    const [showResetForm, setShowResetForm] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setOTPError(false);
        const match = DummyData.find(user => user.otp === otp);
        if (match) {
            setSuccessMessage('🎉 OTP Verified');
            setTimeout(() => setShowResetForm(true), 1500);
        } else {
            setOTPError(true);
        }
    };

    return showResetForm ? <ForgotPasswordForm /> : (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center border border-gray-400 rounded px-3 py-2">
                <EmailIcon className="text-black mr-2" />
                <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    className="outline-none w-full"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
            </div>
            {otpError && <p className='text-red-500 text-sm'>Invalid OTP</p>}
            {successMessage && <p className='text-green-500 text-sm'>{successMessage}</p>}
            <button type="submit" className="bg-[#674AFE] text-white py-2 rounded font-semibold hover:opacity-90 transition w-full mt-4">
                Verify
            </button>
        </form>
    );
}


function ForgotPasswordForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [matchPasswordError, setMatchPasswordError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordError(false);
        setMatchPasswordError(false);

        if (password.length < 6 || !/[!@#$%^&*]/.test(password)) {
            setPasswordError(true);
            return;
        }

        if (password !== confirmPassword) {
            setMatchPasswordError(true);
            return;
        }

        setSuccessMessage('🎉 Password reset successful!');
        setTimeout(() => navigate('/'), 1500);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center border border-gray-400 rounded px-3 py-2">
                <KeyIcon className="text-black mr-2" />
                <input
                    type="password"
                    name="password"
                    placeholder="New password"
                    className="outline-none w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {passwordError && <p className='text-red-500 text-sm'>Password must be at least 6 characters and include a symbol.</p>}

            <div className="flex items-center border border-gray-400 rounded px-3 py-2 mt-4">
                <KeyIcon className="text-black mr-2" />
                <input
                    type="password"
                    name="confirm-password"
                    placeholder="Confirm Password"
                    className="outline-none w-full"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            {matchPasswordError && <p className='text-red-500 text-sm'>Passwords do not match</p>}
            {successMessage && <p className='text-green-500 text-sm'>{successMessage}</p>}

            <button type="submit" className="bg-[#674AFE] text-white py-2 rounded font-semibold hover:opacity-90 transition w-full mt-4">
                Confirm
            </button>
        </form>
    );
}
