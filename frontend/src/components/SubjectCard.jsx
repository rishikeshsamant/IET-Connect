import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function SubjectCard({ subject, semester, year, link, handleView }) {
    const handleDownload = async () => {
        try {
            // Get the file name from the link
            const fileName = link.split('/').pop() || 'paper.pdf';
            
            // Fetch the file
            const response = await fetch(link);
            const blob = await response.blob();
            
            // Create a temporary link to trigger download
            const downloadUrl = window.URL.createObjectURL(blob);
            const tempLink = document.createElement('a');
            tempLink.href = downloadUrl;
            tempLink.download = fileName;
            
            // Trigger download
            document.body.appendChild(tempLink);
            tempLink.click();
            
            // Cleanup
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download the file. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-4xl grid grid-cols-4 items-center bg-white border border-gray-300 rounded-xl shadow-sm p-4 text-center text-sm md:text-base">
            {/* Subject */}
            <div className="font-semibold text-gray-600">{subject}</div>

            {/* Semester */}
            <div className="font-semibold text-gray-600">{semester}</div>

            {/* Year */}
            <div className="font-semibold text-gray-600">{year}</div>

            {/* Actions */}
            <div className="flex justify-center gap-3">
                <button 
                    onClick={handleDownload}
                    className="flex items-center justify-center bg-[#674AFE] text-white font-medium rounded-[4px] md:rounded-full transition h-10 w-10 md:h-15 md:w-15 hover:bg-[#5638d8] cursor-pointer"
                >
                    <DownloadIcon className="action-icon" />
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
