export default function Requests({theme}) {
    const requestsData = [
        { name: "Alice Johnson", email: "alice@gmail.com", type: "Upload Request", status: "Pending" },
        { name: "Bob Williams", email: "bob@gmail.com", type: "Access Request", status: "Pending" },
        { name: "Carol Davis", email: "carol@gmail.com", type: "Delete Request", status: "Pending" },
        { name: "Dave Wilson", email: "dave@gmail.com", type: "Upload Request", status: "Pending" },
    ];
    return (
        <div className={"overflow-x-auto" + (theme === "dark" ? " dark:bg-gray-900 text-white" : " bg-white text-gray-900")}>
            <table className={"min-w-full divide-y" + (theme === "dark" ? " dark:divide-gray-700" : "")}>
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className={"divide-y" + (theme === "dark" ? " dark:divide-gray-700 text-gray-500" : "")}>
                    {requestsData.map((request, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{request.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">{request.email}</td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm ">{request.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 flex justify-center items-center text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    {request.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
                                <button className="text-green-600 hover:text-green-900 mr-3">Approve</button>
                                <button className="text-red-600 hover:text-red-900">Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}