import { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Papers({ theme }) {
    const papersData = [
        { subject: "Mathematics(I)", year: "2023", semester: "1" },
        { subject: "Software Engineering", year: "2020", semester: "3" },
        { subject: "Database Management System", year: "2021", semester: "3" },
        { subject: "Data Structures", year: "2023", semester: "3" },
        { subject: "Mathematics(II)", year: "2021", semester: "2" },
        { subject: "Computer Networks", year: "2022", semester: "4" },
        { subject: "Operating Systems", year: "2022", semester: "4" },
        { subject: "Web Development", year: "2023", semester: "5" },
        { subject: "Machine Learning", year: "2023", semester: "6" },
        { subject: "Computer Graphics", year: "2022", semester: "5" },
        { subject: "Artificial Intelligence", year: "2023", semester: "7" },
        { subject: "Mobile App Development", year: "2022", semester: "6" },
        { subject: "Cybersecurity", year: "2023", semester: "7" },
        { subject: "Cloud Computing", year: "2022", semester: "8" },
        { subject: "Data Mining", year: "2023", semester: "8" },
        { subject: "Digital Image Processing", year: "2021", semester: "6" },
        { subject: "Compiler Design", year: "2022", semester: "7" },
        { subject: "Human Computer Interaction", year: "2023", semester: "5" },
        { subject: "Software Testing", year: "2021", semester: "7" },
        { subject: "Blockchain Technology", year: "2023", semester: "8" }
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    
    // Calculate total pages
    const totalPages = Math.ceil(papersData.length / itemsPerPage);
    
    // Get current page data
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = papersData.slice(startIndex, endIndex);
    
    // Navigation functions
    const goToPrevious = () => {
        setCurrentPage(prev => Math.max(0, prev - 1));
    };
    
    const goToNext = () => {
        setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
    };

    return (
        <>
            <div className={"overflow-x-auto" + (theme === "dark" ? " dark:bg-gray-900 text-white" : " bg-white text-gray-900")}>
                <table className={"min-w-full divide-y" + (theme === "dark" ? " dark:divide-gray-700" : "")}>
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Options</th>
                        </tr>
                    </thead>
                    <tbody className={"divide-y" + (theme === "dark" ? " dark:divide-gray-700 text-gray-500" : "")}>
                        {currentData.map((paper, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{paper.subject}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.year}</td>
                                <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">{paper.semester}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <div className="flex items-center justify-center space-x-2">
                                        <button className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                                            <DownloadIcon fontSize="medium" />
                                        </button>
                                        <button className="p-3 rounded-full bg-red-100 text-red-600 hover:bg-red-200">
                                            <DeleteIcon fontSize="medium" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                {/* Pagination Controls */}
                <div className={"flex items-center justify-between px-6 py-4 border-t" + (theme === "dark" ? " dark:border-gray-700" : " border-gray-200")}>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={goToPrevious}
                            disabled={currentPage === 0}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                currentPage === 0
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : theme === "dark"
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
                                    : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
                            }`}
                        >
                            <ChevronLeftIcon fontSize="small" />
                            <span>Previous</span>
                        </button>
                        
                        <button
                            onClick={goToNext}
                            disabled={currentPage === totalPages - 1}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                currentPage === totalPages - 1
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : theme === "dark"
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
                                    : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
                            }`}
                        >
                            <span>Next</span>
                            <ChevronRightIcon fontSize="small" />
                        </button>
                    </div>
                    
                    {/* Page Information */}
                    <div className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                        <span className="text-sm">
                            Page {currentPage + 1} of {totalPages}
                        </span>
                        <span className="ml-2 text-xs">
                            (Showing {startIndex + 1}-{Math.min(endIndex, papersData.length)} of {papersData.length} papers)
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}