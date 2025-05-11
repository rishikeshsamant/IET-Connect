import DownloadIcon from '@mui/icons-material/Download';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function SubjectCard({ subject, year, semester, link, handleView }) {
    return (
        <div className="w-64 rounded-xl shadow-xl bg-white overflow-hidden">
            <div className="bg-[#674AFE] text-white px-6 py-5 rounded-b-3xl">
                <h2 className="text-xl font-bold">{subject}</h2>
                <div className="flex justify-between items-center mt-3 text-sm">
                    <div className="flex items-center gap-2">
                        <CalendarTodayIcon style={{ fontSize: 18 }} />
                        <span className="font-semibold">{year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MenuBookIcon style={{ fontSize: 18 }} />
                        <span className="font-semibold">{semester}</span>
                    </div>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2 bg-[#674AFE] text-white font-medium py-2 rounded-md transition hover:bg-[#5638d8]">
                    <DownloadIcon style={{ fontSize: 18 }} />
                    <a href={link} download={"paper.pdf"}>Download</a>
                </button>
                <button
                    onClick={handleView}
                    className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 font-medium py-2 rounded-md transition hover:bg-gray-300"
                >
                    <VisibilityIcon style={{ fontSize: 18 }} /> View
                </button>
            </div>
        </div>
    );
}

