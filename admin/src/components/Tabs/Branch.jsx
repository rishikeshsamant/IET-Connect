import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import BranchEditForm from '../Form/BranchEditForm';
export default function Branches({ theme }) {
    const branchesData = [
        { name: "Computer Science", code: "CSE" },
        { name: "Electronics", code: "ECE" },
        { name: "Electrical", code: "EE" },
        { name: "Mechanical", code: "ME" },
    ];

    const [isClicked, setIsClicked] = useState(false);

    const [branchData, setBranchData] = useState({
        name: "",
        code: ""
    })

    const handleClick = (name, code) => {
        setIsClicked(true);
        console.log("Branch Name:", name);
        console.log("Branch Code:", code);
        setBranchData({
            name: name,
            code: code
        });
    }
    return (
        <div className={"overflow-x-auto" + (theme === "dark" ? " dark:bg-gray-900 text-white" : " bg-white text-gray-900")}>
            <table className={"min-w-full divide-y" + (theme === "dark" ? " dark:divide-gray-700" : "")}>
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch Name</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className={"divide-y" + (theme === "dark" ? " dark:divide-gray-700 text-gray-500" : "")}>
                    {branchesData.map((branch, index) => (
                        <>
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{branch.name}</td>
                                <td className="px-6 py-4 text-center whitespace-nowrap text-sm">{branch.code}</td>
                                <td className="px-6 py-4 whitespace-nowrap flex items-center justify-center gap-2">
                                    <button className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200" onClick={() => handleClick(branch.name, branch.code)}>
                                        <EditIcon fontSize="medium" />
                                    </button>
                                    <button className="p-3 rounded-full text-red-600 bg-blue-100 hover:text-red-900">
                                        <DeleteIcon fontSize="medium" />
                                    </button>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
            {
                isClicked ?
                    <div className='fixed w-[90vw] top-10 h-[90vh] bg-[#7a56fd] flex items-center justify-center flex-col'>
                        <BranchEditForm name={branchData.name} code={branchData.code} setIsClicked={setIsClicked}/>
                    </div> : null
            }
        </div>
    );
}


