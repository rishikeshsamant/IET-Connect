import { useState } from "react";

export default function AddSubjectForm({ onClose }) {
    const [subjectData, setSubjectData] = useState({
        name: "",
        code: "",
        branch: "",
        credits: ""
    });

    const handleChange = (e) => {
        setSubjectData({
            ...subjectData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., API call
        console.log("Adding subject:", subjectData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 px-6 md:px-0">
            <div className="bg-white rounded-lg p-8 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Add New Subject</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Subject Name</label>
                        <input
                            type="text"
                            name="name"
                            value={subjectData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Subject Code</label>
                        <input
                            type="text"
                            name="code"
                            value={subjectData.code}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Branch</label>
                        <select
                            name="branch"
                            value={subjectData.branch}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option value="">Select Branch</option>
                            <option value="CSE">Computer Science</option>
                            <option value="ECE">Electronics</option>
                            <option value="EE">Electrical</option>
                            <option value="ME">Mechanical</option>
                            <option value="Common">Common</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Credits</label>
                        <input
                            type="number"
                            name="credits"
                            value={subjectData.credits}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            min="1"
                            max="6"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add Subject
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}