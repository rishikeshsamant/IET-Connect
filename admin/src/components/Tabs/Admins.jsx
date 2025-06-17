import DeleteIcon from '@mui/icons-material/Delete';

export default function AdminsTable({theme}) {
    const adminsData = [
        { name: "John Doe", email: "john@ietconnect.edu" },
        { name: "Jane Smith", email: "jane@ietconnect.edu" },
        { name: "Robert Brown", email: "robert@ietconnect.edu" },
    ];
    return (
        <div className={"overflow-x-auto" + (theme === "dark" ? " dark:bg-gray-900 text-white" : " bg-white text-gray-900")}>
            <table className={"min-w-full divide-y" + (theme === "dark" ? " dark:divide-gray-700" : "")}>
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className={"divide-y" + (theme === "dark" ? " dark:divide-gray-700 text-gray-500" : "")}>
                    {adminsData.map((admin, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{admin.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{admin.email}</td>
                            <td className="px-6 py-4 flex items-center justify-center whitespace-nowrap">
                                <button className="text-red-600 hover:text-red-900">
                                    <DeleteIcon fontSize="small" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}