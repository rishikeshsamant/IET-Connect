import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState, useReducer, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SignUpContext } from '../App';

export default function Login() {
  const navigate = useNavigate();
  const { isSignUpActive, setIsSignUpActive } = useContext(SignUpContext);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');


  const randomData = [
    { email: "yasir@gmail.com", password: "12345678" },
    { email: "yasir1@gmail.com", password: "123456789" },
  ];

  const initialState = {
    email: '',
    password: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE':
        return { ...state, [action.field]: action.value };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE',
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    setSuccessMessage('');

    const match = randomData.find(
      (user) => user.email === state.email && user.password === state.password
    );

    if (match) {
      setSuccessMessage('🎉 Congratulations! Logged in successfully.');
      setTimeout(() => navigate('/profile'), 1500);
    } else {
      if (!randomData.some((user) => user.email === state.email)) {
        setEmailError(true);
      } else {
        setPasswordError(true);
      }
    }
  };


  return (
    <div className='flex h-screen w-screen justify-center items-center bg-[#674AFE] md:bg-white'>
      {/* Left Panel */}
      <div className="hidden md:flex flex-col justify-center items-center gap-6 bg-[#674AFE] text-white w-1/2 h-full">
        <h1 className='text-5xl font-bold' onClick={() => navigate("/")}>IET Connect</h1>
        <p className='text-lg text-center'>
          Where innovation<br />meets blah blah blah
        </p>
        <div className="flex gap-4 mt-4">
          {[LinkedInIcon, XIcon, InstagramIcon, GitHubIcon].map((Icon, idx) => (
            <div key={idx} className="h-12 w-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#674AFE] transition">
              <Icon style={{ fontSize: '1.5rem' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex justify-center items-center md:w-1/2 h-full w-full">
        {
          isSignUpActive
            ? <SignUp setIsSignUpActive={setIsSignUpActive} />
            : (
              <div className="bg-white rounded-[2rem] border border-gray-300 p-8 md:w-96 relative shadow-lg w-[90vw]">
                {/* Floating Icon */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#674AFE] text-white rounded-full h-20 w-20 flex items-center justify-center shadow-md">
                  <PersonIcon style={{ fontSize: '2.5rem' }} />
                </div>

                <div className="mt-12 text-center">
                  <h2 className="text-2xl font-bold">Login</h2>
                  <p className="text-gray-600 text-sm mt-1">Good To See You Here Again</p>
                </div>

                <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
                  <div>
                    <div className="flex items-center border border-gray-400 rounded px-3 py-2">
                      <EmailIcon className="text-black mr-2" />
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="outline-none w-full"
                        value={state.email}
                        onChange={handleChange}
                      />
                    </div>
                    {emailError && <p className='text-red-500 text-sm'>Email not found.</p>}
                  </div>

                  <div>
                    <div className="flex items-center border border-gray-400 rounded px-3 py-2">
                      <KeyIcon className="text-black mr-2" />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="outline-none w-full"
                        value={state.password}
                        onChange={handleChange}
                      />
                    </div>
                    {passwordError && <p className='text-red-500 text-sm'>Incorrect password.</p>}
                  </div>

                  {successMessage && (
                    <div className="text-green-600 text-sm text-center">{successMessage}</div>
                  )}

                  <div className="text-right text-sm text-gray-500 hover:underline cursor-pointer">
                    <Link to={"/forgotpassword"}>Forgot Password?</Link>
                  </div>

                  <button type="submit" className="bg-[#674AFE] text-white py-2 rounded font-semibold hover:opacity-90 transition">
                    Login
                  </button>

                  <p className="text-sm text-center">
                    Don’t Have an account? <span className="text-[#674AFE] hover:underline cursor-pointer"
                      onClick={() => setIsSignUpActive(true)}>Create One</span>
                  </p>
                </form>
              </div>
            )
        }
      </div>
    </div>
  );
}

function SignUp({ setIsSignUpActive }) {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const initialState = {
    rollNumber: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted:", state);
      dispatch({ type: "RESET" });
      setSubmitted(true);
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
            <input type="text" name="rollNumber" placeholder="Roll Number (e.g. 23CSE123)" className="outline-none w-full"
              value={state.rollNumber} onChange={handleChange} />
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

        <p className="text-sm text-center">
          Already Have an account? <span className="text-[#674AFE] hover:underline cursor-pointer" onClick={() => setIsSignUpActive(false)}>Login</span>
        </p>
      </form>
    </div>
  );
}
