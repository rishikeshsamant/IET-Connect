import Navbar from "../components/Navbar";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import Footer from "../components/Footer";
import { useContext } from "react";
import { SignUpContext } from "../App";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const { isSignUpActive, setIsSignUpActive } = useContext(SignUpContext);
  return (
    <>
      <div className="flex justify-center items-center p-4 flex-col">
        <Navbar setIsSignUpActive={setIsSignUpActive}/>
        <div className="flex h-[auto] md:h-[80vh] w-full mt-12 md:mt-0.5 items-center justify-center md:justify-evenly flex-col md:flex-row gap-10 md:gap-0">
          <div className="w-full md:w-[40vw] flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 load">
              Access previous year question papers with ease
            </h1>
            <p className="text-lg text-gray-600 load">
              Upload, browse, and download past semester exam papers for IET Agra students.
            </p>
            <div className="flex gap-4 w-full justify-center md:justify-start load">
              <button className="bg-[#674AFE] text-white w-full sm:w-auto px-6 py-3 rounded-[5px] font-semibold">
                <Link to={"/download"}>Get Started</Link>
              </button>
              <button className="text-gray-600 border border-gray-400 w-full sm:w-auto px-6 py-3 rounded-[5px] font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-[80vw] md:w-[60vh] h-[40vh] md:h-[60vh] object-cover load">
            <img
              src="Images/boyImage.png"
              alt="Boy Image"
              className="h-full w-full object-contain md:object-cover"
            />
          </div>
        </div>
      </div>
      <Discover />
      <MoreInfo />
      <Footer />
    </>
  );
}

function Discover() {
  const cardData = [
    {
      icon: <FileUploadIcon className="bg-[#674AFE] text-white" />,
      title: "Upload & Share",
      data: "Easily upload your semester exam papers to share with peers.",
    },
    {
      icon: <SearchIcon className="bg-[#674AFE] text-white" />,
      title: "Search & Filter",
      data: "Quickly find papers by branch, semester, subject, and year.",
    },
    {
      icon: <LockIcon className="bg-[#674AFE] text-white" />,
      title: "Secure Access",
      data: "Protect your uploads with a student-only authentication system.",
    },
  ];

  return (
    <div className="py-10 px-4 md:px-20 text-center">
      <h1 className="text-3xl font-bold mb-8">Discover Our Benefits & Features</h1>
      <div className="flex flex-col gap-4 md:flex-row">
        {cardData.map((elem, index) => (
          <div key={index} className="bg-white p-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-[#674AFE] hover:shadow-2xl border-2 border-gray-200">
            <div className="text-4xl mb-4 flex items-center justify-center ">
              <div className="bg-[#674AFE] h-12 w-12 flex items-center justify-center rounded">
                {elem.icon}
              </div>

            </div>
            <h2 className="text-xl font-semibold mb-2">{elem.title}</h2>
            <p className="text-gray-600">{elem.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


function MoreInfo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 px-6 md:px-20 py-10">
      <div className="w-full md:w-1/2 rounded-3xl overflow-hidden">
        <img
          src="Images/paper.png"
          alt="paper image"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Students can upload, browse, and download question papers effortlessly
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          Join a network of IET students to collaborate and access valuable academic resources.
        </p>
      </div>
    </div>
  );
}

