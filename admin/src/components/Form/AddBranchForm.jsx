import { useState } from 'react';

export default function AddBranchForm({ onClose }) {
    const [branchData, setBranchData] = useState({
        name: "",
        code: "",
        established: "",
    });

    const handleChange = (e) => {
        setBranchData({
            ...branchData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., API call
        console.log("Adding branch:", branchData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 px-6 md:px-0">
            <div className="bg-white rounded-lg p-8 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Add New Branch</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Branch Name</label>
                        <input
                            type="text"
                            name="name"
                            value={branchData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Branch Code</label>
                        <input
                            type="text"
                            name="code"
                            value={branchData.code}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Year Established</label>
                        <input
                            type="text"
                            name="established"
                            value={branchData.established}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
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
                            Add Branch
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}