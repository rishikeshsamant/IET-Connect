import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { DownloadContext, UploadContext } from "../App";
import SubjectCard from "../components/SubjectCard";
import Footer from "../components/Footer";
import ViewPaper from "../components/ViewPaper";

export default function Download() {
    const { isDownloadActive, setIsDownloadActive } = useContext(DownloadContext);
    const { isUploadActive, setIsUploadActive } = useContext(UploadContext);

    const handleDownloadClick = () => {
        setIsDownloadActive(true);
        setIsUploadActive(false);
    };

    const handleUploadClick = () => {
        setIsUploadActive(true);
        setIsDownloadActive(false);
    };

    return (
        <>
            <div className="mt-4">
                <Navbar />
            </div>
            <div className="w-full flex items-center justify-center mt-6">
                <div className="flex justify-evenly items-center bg-gray-100 rounded-2xl md:rounded-full gap-4 p-2 shadow-xl shadow-gray-400 flex-col md:flex-row">
                    <button
                        className={`transition-all duration-300 ease-in-out font-bold rounded-full w-fit px-6 py-2 ${isDownloadActive ? 'bg-[#674AFE] text-white' : 'bg-[#D9D9D9] text-[#858A8E]'
                            }`}
                        onClick={handleDownloadClick}>
                        Download
                    </button>
                    <button
                        className={`transition-all duration-300 ease-in-out font-bold rounded-full w-fit px-6 py-2 ${isUploadActive ? 'bg-[#674AFE] text-white' : 'bg-[#D9D9D9] text-[#858A8E]'
                            }`}
                        onClick={handleUploadClick}>
                        Upload
                    </button>
                </div>
            </div>
            <div className="main">
                {isDownloadActive && <DownloadActive />}
                {isUploadActive && "Hi I am Upload"}
            </div>
            <Footer />
        </>
    );
}

function DownloadActive() {
    const [subject, setSubject] = useState("Subject");
    const [branch, setBranch] = useState("Branch");
    const [semester, setSemester] = useState("Semester");
    const [year, setYear] = useState("Year");
    const [viewPaper, setViewPaper] = useState(false);
    const [currentPaperLink, setCurrentPaperLink] = useState("");

    const Subjects = [
        "Subject", "Software Engineering", "Data Structures", "Database Management System",
        "Digital Electronics", "OOPs Using Java"
    ];
    const Branches = ["Branch", "CSE", "ECE", "EE", "ME"];
    const Semesters = ["Semester", 1, 2, 3, 4, 5, 6];
    const Years = ["Year", 2024, 2023, 2022, 2021];

    const dummyData = [
        { subject: "Software Engineering", branch: "CSE", semester: 5, year: 2023, link: "/DummyPdf/try.pdf" },
        { subject: "Data Structures", branch: "CSE", semester: 3, year: 2022, link: "/DummyPdf/try.pdf" },
        { subject: "Database Management System", branch: "CSE", semester: 4, year: 2024, link: "/DummyPdf/try.pdf" },
        { subject: "Digital Electronics", branch: "ECE", semester: 3, year: 2023, link: "/DummyPdf/try.pdf" },
        { subject: "OOPs Using Java", branch: "CSE", semester: 2, year: 2021, link: "/DummyPdf/try.pdf" },
    ];

    // Filtering based on dropdowns
    const filteredData = dummyData.filter(item =>
        (subject === "Subject" || item.subject === subject) &&
        (branch === "Branch" || item.branch === branch) &&
        (semester === "Semester" || item.semester === parseInt(semester)) &&
        (year === "Year" || item.year === parseInt(year))
    );

    const handleView = (link) => {
        // Make sure the link is properly formatted for viewing
        const viewLink = link.startsWith('/') ? link : `/${link}`;
        setCurrentPaperLink(viewLink);
        setViewPaper(true);
    };

    const handleCloseView = () => {
        setViewPaper(false);
        setCurrentPaperLink("");
    };

    return (
        <div className="mt-16 flex items-center justify-center flex-col gap-12 px-4 text-center mb-6">
            {viewPaper && (
                <ViewPaper 
                    paperLink={currentPaperLink} 
                    onClose={handleCloseView} 
                />
            )}
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-3xl md:text-5xl">Download PYQ Papers</h1>
                <p className="text-sm md:text-xl text-gray-600">
                    Download your previous years' question papers
                </p>
            </div>

            <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4">
                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-[260px] md:w-[200px] bg-white border border-gray-300 text-gray-700 text-sm md:text-base rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#674AFE] shadow-sm transition-all"
                >
                    {Subjects.map((val, index) => (
                        <option value={val} key={index}>{val}</option>
                    ))}
                </select>

                <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-[260px] md:w-[200px] bg-white border border-gray-300 text-gray-700 text-sm md:text-base rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#674AFE] shadow-sm transition-all"
                >
                    {Branches.map((val, index) => (
                        <option value={val} key={index}>{val}</option>
                    ))}
                </select>

                <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-[260px] md:w-[200px] bg-white border border-gray-300 text-gray-700 text-sm md:text-base rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#674AFE] shadow-sm transition-all"
                >
                    {Semesters.map((val, index) => (
                        <option value={val} key={index}>{val}</option>
                    ))}
                </select>

                <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-[260px] md:w-[200px] bg-white border border-gray-300 text-gray-700 text-sm md:text-base rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#674AFE] shadow-sm transition-all"
                >
                    {Years.map((val, index) => (
                        <option value={val} key={index}>{val}</option>
                    ))}
                </select>

            </div>

            <div className="flex flex-wrap gap-6 justify-center">
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <SubjectCard
                            key={index}
                            subject={item.subject}
                            semester={item.semester}
                            year={item.year}
                            link={item.link}
                            handleView={() => handleView(item.link)}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 font-medium">No results found.</p>
                )}
            </div>
        </div>
    );
}

