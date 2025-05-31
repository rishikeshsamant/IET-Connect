import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ThemeContext } from '../App';
import { useContext } from 'react';
export default function SubjectCard({ subject, semester, year, link, handleView }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={"w-full max-w-4xl grid grid-cols-4 items-center border border-gray-300 rounded-xl shadow-sm p-4 text-center text-sm md:text-base" + (theme === "dark" ? " bg-gray-800 text-white" : " bg-white text-gray-500")}>
            {/* Subject */}
            <div className="font-semibold ">{subject}</div>

            {/* Semester */}
            <div className="font-semibold ">{semester}</div>

            {/* Year */}
            <div className="font-semibold ">{year}</div>

            {/* Actions */}
            <div className="flex justify-center gap-3">
                <button className="flex items-center justify-center bg-[#674AFE] text-white font-medium  rounded-[4px] md:rounded-full transition h-10 w-10 md:h-15 md:w-15 hover:bg-[#5638d8] cursor-pointer">
                    <DownloadIcon className="action-icon" />
                    <a href={link} download={"paper.pdf"}></a>
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleView();
                    }}
                    className="flex items-center justify-center bg-gray-200 text-gray-700 font-medium py-2 rounded-[4px] md:rounded-full transition h-10 w-10 md:h-15 md:w-15 hover:bg-gray-300 cursor-pointer"
                >
                  <VisibilityIcon className="action-icon" />
                </button>
            </div>
        </div>
    );
}
