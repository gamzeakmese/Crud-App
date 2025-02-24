export default function TableList({onOpen}) {

    const tableData = [
        { id: 1, name: "John Doe", email: "john.doe@gmail.com", job: "Developer", rate: "100", status: true },
        { id: 2, name: "John Doe1", email: "john1.doe@gmail.com", job: "Developer1", rate: "101", status: false },
        { id: 3, name: "John Doe2", email: "john2.doe@gmail.com", job: "Developer2", rate: "102", status: false },
    ];

    return (
        <>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Rate</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="hover">
                        {/* row 1 */}

                        {tableData.map((item) => (
                            <tr>
                                <th>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.job}</td>
                                <td>{item.rate}</td>
                                <td>
                                    <button className={`btn rounded-full w-20 ${item.status ? 'btn-primary' : 'btn-outline btn-primary'}`}>
                                        {item.status ? 'Active' : 'Inactive'}
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-secondary" onClick={onOpen}>Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-accent">Delete</button>
                                </td>

                            </tr>
                        ))}




                    </tbody>
                </table>
            </div>
        </>
    )
}