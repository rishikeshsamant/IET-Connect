import { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import AddIcon from '@mui/icons-material/Add';
import Papers from "../components/Tabs/Papers";
import Branch from "../components/Tabs/Branch"
import Subject from "../components/Tabs/Subject"
import Admins from "../components/Tabs/Admins";
import Requests from "../components/Tabs/Requests";
import AddSubjectForm from "../components/Form/AddSubjectForm";
import AddBranchForm from "../components/Form/AddBranchForm"
import { ThemeContext } from "../App";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("Papers");
    const [showAddBranchModal, setShowAddBranchModal] = useState(false);
    const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);
    const { theme } = useContext(ThemeContext);

    const tabs = [
        { id: "Papers", label: "Papers" },
        { id: "Branch", label: "Branch" },
        { id: "Subject", label: "Subject" },
        { id: "Admins", label: "Admins" },
        { id: "Requests", label: "Requests" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "Papers":
                return <Papers theme={theme} />;
            case "Branch":
                return <Branch theme={theme} />;
            case "Subject":
                return <Subject theme={theme} />;
            case "Admins":
                return <Admins theme={theme} />;
            case "Requests":
                return <Requests theme={theme} />;
            default:
                return <Papers theme={theme} />;
        }
    };

    return (
        <div className={"min-h-screen bg-gray-50 pt-4" + (theme === "dark" ? " dark:bg-gray-900 text-gray-500" : " text-gray-900")}>
            <div>
                <Navbar />
            </div>

            <div className="px-8 md:px-20 py-8">
                <h1 className="text-4xl font-bold border-b pb-2 mb-6 text-gray-500">Admin Dashboard</h1>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row justify-end gap-4 mb-6">
                    <button
                        onClick={() => setShowAddBranchModal(true)}
                        className={"flex justify-center items-center border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 shadow-sm transition-all duration-300 gap-1" + (theme === "dark" ? " dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" : "")}
                    >
                        <AddIcon fontSize="small" /> Add New Branch
                    </button>
                    <button
                        onClick={() => setShowAddSubjectModal(true)}
                        className={"flex justify-center items-center border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 shadow-sm transition-all duration-300 gap-1" + (theme === "dark" ? " dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" : "")}
                    >
                        <AddIcon fontSize="small" /> Add New Subject
                    </button>
                </div>

                {/* Tab Navigation */}
                <div className={"flex flex-wrap justify-center items-center w-fit rounded-lg shadow-sm mb-6" + (theme === "dark" ? " dark:bg-gray-800 dark:text-gray-200" : " bg-white text-gray-900")}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 m-2 rounded-[1vh] font-bold text-sm transition-all duration-200 whitespace-nowrap
                                ${activeTab === tab.id
                                    ? "bg-indigo-600 text-white"
                                    : "text-gray-700 bg-gray-300 hover:bg-gray-600 hover:text-gray-100"}`}
                        >
                            {tab.label} {tab.count && `(${tab.count})`}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className={"rounded-lg shadow-sm p-1" + (theme === "dark" ? " dark:bg-gray-800 dark:text-gray-200" : " bg-white text-gray-900")}>
                    {renderContent()}
                </div>
            </div>

            {/* Add Branch Modal */}
            {showAddBranchModal && (
                <AddBranchForm onClose={() => setShowAddBranchModal(false)} />
            )}

            {/* Add Subject Modal */}
            {showAddSubjectModal && (
                <AddSubjectForm onClose={() => setShowAddSubjectModal(false)} />
            )}
        </div>
    );
}