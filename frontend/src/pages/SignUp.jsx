import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { useState, useReducer } from 'react';
import axios from 'axios';

export default function SignUp({ setIsSignUpActive }) {
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [studentExist, setStudentExist] = useState(false);

    const initialState = {
        rollno: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "UPDATE":
                return { ...state, [action.field]: action.value };
            case "RESET":
                return initialState;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type: "UPDATE",
            field: e.target.name,
            value: e.target.value
        });
    };

    const validate = () => {
        let isValid = true;

        if (state.email.includes("@gmail")) {
            setEmailError(false);
        } else {
            setEmailError(true);
            isValid = false;
        }

        if (state.password.length < 8) {
            setPasswordError(true);
            isValid = false;
        } else {
            setPasswordError(false);
        }

        if (state.password !== state.confirmPassword) {
            setPasswordMatchError(true);
            isValid = false;
        } else {
            setPasswordMatchError(false);
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (validate()) {
                const response = await axios.post('http://localhost:3000/api/auth/signup', state);
                console.log('Signup successful:', response.data);
                console.log("Submitted:", state);
                dispatch({ type: "RESET" });
                setSubmitted(true);
                setTimeout(() => {
                    setIsSignUpActive(false);
                }, 3000);
            }
        } catch (error) {
                setStudentExist(true);
            console.error('Signup failed:', error.response?.data || error.message);
        }
    };

    return (
        <div className="bg-white rounded-[2rem] border border-gray-300 p-8 md:w-96 relative shadow-lg w-[90vw]">
            {/* Floating Icon */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#674AFE] text-white rounded-full h-20 w-20 flex items-center justify-center shadow-md">
                <PersonIcon style={{ fontSize: '2.5rem' }} />
            </div>

            <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold">Sign Up</h2>
                <p className="text-gray-600 text-sm mt-1">Join Our Family</p>
            </div>

            <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
                <div>
                    <div className="flex items-center border border-gray-400 rounded px-3 py-2">
                        <PersonIcon className="text-black mr-2" />
                        <input type="text" name="rollno" placeholder="Roll Number (e.g. 23CSE123)" className="outline-none w-full"
                            value={state.rollno} onChange={handleChange} />
                    </div>
                </div>

                <div>
                    <div className="flex items-center border border-gray-400 rounded px-3 py-2">
                        <EmailIcon className="text-black mr-2" />
                        <input type="email" name="email" placeholder="Email" className="outline-none w-full"
                            value={state.email} onChange={handleChange} />
                    </div>
                    {emailError && <div className="text-red-500 text-sm">Email must be a valid Gmail address</div>}
                </div>

                <div>
                    <div className="flex items-center border border-gray-400 rounded px-3 py-2">
                        <KeyIcon className="text-black mr-2" />
                        <input type="password" name="password" placeholder="Password" className="outline-none w-full"
                            value={state.password} onChange={handleChange} />
                    </div>
                    {passwordError && <div className="text-red-500 text-sm">Password should be at least 8 characters</div>}
                </div>

                <div>
                    <div className="flex items-center border border-gray-400 rounded px-3 py-2">
                        <KeyIcon className="text-black mr-2" />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="outline-none w-full"
                            value={state.confirmPassword} onChange={handleChange} />
                    </div>
                    {passwordMatchError && <div className="text-red-500 text-sm">Passwords do not match</div>}
                </div>

                <button className="bg-[#674AFE] text-white py-2 rounded font-semibold hover:opacity-90 transition" type="submit">
                    Sign Up
                </button>

                {submitted && <p className="text-green-600 text-center text-sm">Account created successfully!</p>}
                {studentExist && <p className="text-red-500 text-sm text-center">Student already exists with this Roll Number or Email.</p>}
                <p className="text-sm text-center">
                    Already Have an account? <span className="text-[#674AFE] hover:underline cursor-pointer" onClick={() => setIsSignUpActive(false)}>Login</span>
                </p>
            </form>
        </div>
    );
}
