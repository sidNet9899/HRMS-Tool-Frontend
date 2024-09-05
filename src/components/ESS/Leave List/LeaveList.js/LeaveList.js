import React, { useState, useEffect } from "react";
import "./LeaveList.css";
import Pagination from "../../Attendance/Pagination/Pagination";
import Leavesidebarform from "./Leavesidebarform/leaveSidebarForm";

const LeaveList = () => {
    const [leaveData, setLeaveData] = useState([]);
    const [activeTab, setActiveTab] = useState("myLeave"); // State to track the active tab
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page
     const [entriesPerPage, setEntriesPerPage] = useState(5); // State to define items per page
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const data = [
                // Your data here

                    {
                        id: 1,
                        leaveType: "Annual Leave",
                        attachment: "None",
                        leaveFrom: "2024-08-01",
                        leaveTo: "2024-08-05",
                        days: 5,
                        halfDay: "No",
                        reason: "Vacation",
                        leaveStatus: "Approved",
                        remarks: "Have a good trip!",
                        actionBy: "Manager",
                        cancelLeave: "No",
                    },
                    {
                        id: 2,
                        leaveType: "Sick Leave",
                        attachment: "Doctor's Note",
                        leaveFrom: "2024-08-10",
                        leaveTo: "2024-08-12",
                        days: 2,
                        halfDay: "No",
                        reason: "Flu",
                        leaveStatus: "Pending",
                        remarks: "",
                        actionBy: "",
                        cancelLeave: "Yes",
                    },
                    {
                        id: 3,
                        leaveType: "Sick Leave",
                        attachment: "Doctor's Note",
                        leaveFrom: "2024-08-10",
                        leaveTo: "2024-08-12",
                        days: 2,
                        halfDay: "No",
                        reason: "Flu",
                        leaveStatus: "Pending",
                        remarks: "",
                        actionBy: "",
                        cancelLeave: "Yes",
                    },
                    {
                        id: 4,
                        leaveType: "Sick Leave",
                        attachment: "Doctor's Note",
                        leaveFrom: "2024-08-10",
                        leaveTo: "2024-08-12",
                        days: 2,
                        halfDay: "No",
                        reason: "Flu",
                        leaveStatus: "Pending",
                        remarks: "",
                        actionBy: "",
                        cancelLeave: "Yes",
                    },
                    {
                        id: 5,
                        leaveType: "Sick Leave",
                        attachment: "Doctor's Note",
                        leaveFrom: "2024-08-10",
                        leaveTo: "2024-08-12",
                        days: 2,
                        halfDay: "No",
                        reason: "Flu",
                        leaveStatus: "Pending",
                        remarks: "",
                        actionBy: "",
                        cancelLeave: "Yes",
                    },
                    {
                        id: 6,
                        leaveType: "Sick Leave",
                        attachment: "Doctor's Note",
                        leaveFrom: "2024-08-10",
                        leaveTo: "2024-08-12",
                        days: 2,
                        halfDay: "No",
                        reason: "Flu",
                        leaveStatus: "Pending",
                        remarks: "",
                        actionBy: "",
                        cancelLeave: "Yes",
                    },
                
            ];
            setLeaveData(data);
        };

        fetchData();
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1); 
    };

    
    const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = leaveData.slice(indexOfFirstEntry, indexOfLastEntry);


    return (
        <div className="leave-list-container">
            <div className="leave-list-header">
                <div className="leave-list-heading">
                    <button className="back-button">←</button>

                    <h2>{activeTab === "myLeave" ? "Leave List" : "Leave Credit List"}</h2>
                </div>
                <div className="leave-right-btn">
                <button className="filter-button">🔍</button>
                <button className="leave-add-button" onClick={handleOpenSidebar}><i className="fa fa-plus"></i></button>
                </div>
            </div>
            
            <div className="leave-list-tabs">
                <div
                    className={`tab ${activeTab === "myLeave" ? "active" : ""}`}
                    onClick={() => handleTabClick("myLeave")}
                >
                    My Leave
                </div>
                <div
                    className={`tab ${activeTab === "leaveCreditRequest" ? "active" : ""}`}
                    onClick={() => handleTabClick("leaveCreditRequest")}
                >
                    Leave Credit Request
                </div>
            </div>
            {activeTab === "myLeave" ? (
                <div>
                <div className="leave-list-table-container">
                    <div>
                    <table className="leave-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>View</th>
                                <th>Leave Type</th>
                                <th>Attachment</th>
                                <th>Leave From</th>
                                <th>Leave To</th>
                                <th>Days</th>
                                <th>Half Day</th>
                                <th>Reason for Leave</th>
                                <th>Leave Status</th>
                                <th>Remarks</th>
                                <th>Action By</th>
                                <th>Cancel Leave</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.length > 0 ? (
                                currentEntries.map((leave) => (
                                    <tr key={leave.id}>
                                        <td>
                                            <button>Edit</button>
                                        </td>
                                        <td>
                                            <button>View</button>
                                        </td>
                                        <td>{leave.leaveType}</td>
                                        <td>{leave.attachment}</td>
                                        <td>{leave.leaveFrom}</td>
                                        <td>{leave.leaveTo}</td>
                                        <td>{leave.days}</td>
                                        <td>{leave.halfDay}</td>
                                        <td>{leave.reason}</td>
                                        <td>{leave.leaveStatus}</td>
                                        <td>{leave.remarks}</td>
                                        <td>{leave.actionBy}</td>
                                        <td>
                                            {leave.cancelLeave === "Yes" && (
                                                <button>Cancel</button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="13" className="no-records">
                                        No records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                   
                    </div>
                    {isSidebarOpen && (
        <Leavesidebarform onClose={handleCloseSidebar} />
      )}
                </div>
                <Pagination
                        totalEntries={leaveData.length}
                        entriesPerPage={entriesPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        onEntriesChange={setEntriesPerPage}
                    />
                </div>
            ) : (
                <div className="leave-list-table-container">
                    <table className="leave-list-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>View</th>
                                <th>Leave Type</th>
                                <th>Leave From</th>
                                <th>Leave To</th>
                                <th>Days</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Your leave credit request data rendering here */}
                            <tr>
                                <td colSpan="9" className="no-records">
                                    No records found
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};


export default LeaveList;
