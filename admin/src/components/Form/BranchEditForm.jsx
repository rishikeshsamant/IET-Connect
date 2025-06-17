import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

export default function BranchEditForm({ name, code, setIsClicked, onSubmit }) {
    const [formData, setFormData] = useState({
        newName: '',
        newCode: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({
                oldName: name,
                oldCode: code,
                newName: formData.newName || name,
                newCode: formData.newCode || code
            });
        }
        setIsClicked(false);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 px-6 md:px-0">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Edit Branch</h2>
                    <button 
                        className="text-white hover:text-gray-200 transition-colors"
                        onClick={() => setIsClicked(false)}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-6">
                        {/* Current Branch Name (Disabled) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Current Branch Name
                            </label>
                            <input 
                                type="text" 
                                disabled 
                                value={name}
                                className="w-full px-4 py-3 bg-gray-100 text-gray-500 border border-gray-300 rounded-md focus:outline-none"
                            />
                        </div>

                        {/* New Branch Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                New Branch Name
                            </label>
                            <input 
                                type="text"
                                name="newName"
                                placeholder="Enter new branch name" 
                                value={formData.newName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                            />
                        </div>

                        {/* Current Branch Code (Disabled) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Current Branch Code
                            </label>
                            <input 
                                type="text" 
                                disabled 
                                value={code}
                                className="w-full px-4 py-3 bg-gray-100 text-gray-500 border border-gray-300 rounded-md focus:outline-none"
                            />
                        </div>

                        {/* New Branch Code */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                New Branch Code
                            </label>
                            <input 
                                type="text"
                                name="newCode"
                                placeholder="Enter new branch code" 
                                value={formData.newCode}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                            />
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="mt-8 flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setIsClicked(false)}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <ArrowBackIcon className="h-4 w-4 mr-2" />
                            Back
                        </button>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <SaveIcon className="h-4 w-4 mr-2" />
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}