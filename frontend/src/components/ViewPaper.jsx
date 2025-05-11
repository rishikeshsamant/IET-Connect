import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function ViewPaper({ paperLink, onClose }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the PDF
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Make sure the PDF URL is properly formatted
  const formattedPdfUrl = paperLink.startsWith('/') 
    ? `${window.location.origin}${paperLink}` 
    : paperLink;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="bg-[#674AFE] p-4 flex justify-between items-center text-white">
        <h2 className="font-bold text-xl">Paper View</h2>
        <button 
          onClick={onClose}
          className="bg-white text-[#674AFE] p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <CloseIcon />
        </button>
      </div>
      
      <div className="flex-1 overflow-hidden">
        {loading ? (
          <div className="h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#674AFE]"></div>
          </div>
        ) : (
          <object
            data={formattedPdfUrl}
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="flex items-center justify-center h-full flex-col">
              <p className="text-red-500 text-lg font-medium mb-4">Unable to display PDF directly</p>
              <a 
                href={formattedPdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#674AFE] text-white px-4 py-2 rounded-md hover:bg-[#5638d8] transition-colors"
              >
                Open PDF in new tab
              </a>
            </div>
          </object>
        )}
      </div>
    </div>
  );
} 