import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import SubjectEditForm from '../Form/SubjectEditForm';

export default function Subjects({ theme }) {
    const subjectsData = [
        { name: "Mathematics(I)", code: "MA101", branch: "Common", credits: 4 },
        { name: "Software Engineering", code: "CS305", branch: "CSE", credits: 3 },
        { name: "Database Management System", code: "CS403", branch: "CSE", credits: 4 },
        { name: "Electronic Circuits", code: "EC201", branch: "ECE", credits: 3 },
        { name: "Thermodynamics", code: "ME202", branch: "ME", credits: 4 },
    ];

    const [isClciked, setIsClicked] = useState(false);

    const [subjectData, setSubjectData] = useState({
        name: "",
        branch: "",
        code: "",
        credits: "",
    })

    const handleClick = (name, branch, code, credits) => {
        setIsClicked(true);
        console.log("Branch Name:", name);
        console.log("Branch Code:", code);
        setSubjectData({
            name: name,
            branch: branch,
            code: code,
            credits: credits,
        });
    }

    return (
        <div className={"overflow-x-auto" + (theme === "dark" ? " dark:bg-gray-900 text-white" : " bg-white text-gray-900")}>
            <table className={"min-w-full divide-y" + (theme === "dark" ? " dark:divide-gray-700" : "")}>
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject Name</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className={"divide-y" + (theme === "dark" ? " dark:divide-gray-700 text-gray-500" : "")}>
                    {subjectsData.map((subject, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">{subject.name}</td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm ">{subject.code}</td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm ">{subject.branch}</td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm ">{subject.credits}</td>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center justify-center gap-2">
                                <button className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200" onClick={() => handleClick(subject.name, subject.branch, subject.code, subject.credits)}>
                                    <EditIcon fontSize="medium" />
                                </button>
                                <button className="p-3 rounded-full text-red-600 bg-blue-100 hover:text-red-900">
                                    <DeleteIcon fontSize="medium" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {
    isClciked ?
        <div className='fixed w-[90vw] top-10 h-[90vh] bg-[#7a56fd] flex items-center justify-center flex-col'>
            <SubjectEditForm 
                name={subjectData.name} 
                branch={subjectData.branch} 
                code={subjectData.code} 
                credits={subjectData.credits} 
                setIsClicked={setIsClicked} 
            />
        </div> : null
}
        </div>
    );
}
