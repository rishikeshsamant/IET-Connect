import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

export default function SubjectEditForm({ name, code, branch, credits, setIsClicked, onSubmit }) {
    const [formData, setFormData] = useState({
        newName: '',
        newBranch: '',
        newCode: '',
        newCredits: '',
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
                oldBranch: branch,
                oldCode: code,
                oldCredits: credits,
                newName: formData.newName || name,
                newBranch: formData.newBranch || branch,
                newCode: formData.newCode || code,
                newCredits: formData.newCredits || credits,
            });
        }
        setIsClicked(false);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center overflow-y-auto z-50 pt-70 px-6 md:px-0">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
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
                                Current Subject Name
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
                                New Subject Name
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
                        {/* Current Branch Name (Disabled) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Current Branch Name
                            </label>
                            <input
                                type="text"
                                disabled
                                value={branch}
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
                                name="newBranch"
                                placeholder="Enter new branch name"
                                value={formData.newBranch}
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

                    {/* Current Branch Name (Disabled) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current Branch Credit
                        </label>
                        <input
                            type="text"
                            disabled
                            value={credits}
                            className="w-full px-4 py-3 bg-gray-100 text-gray-500 border border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>

                    {/* New Branch Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Branch Credit
                        </label>
                        <input
                            type="text"
                            name="newCredits"  // Changed from "newName" to "newCredits"
                            placeholder="Enter new credits"
                            value={formData.newCredits}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                        />
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