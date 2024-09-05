import React, { useState, useEffect } from "react";
import "./MyReferrals.css";
import Pagination from "../Attendance/Pagination/Pagination";

const Myreferrals = () => {
    const [referralData, setreferralData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  useEffect(() => {
    const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = [
            {
                id: 1,
                CandidateName: "Aniket",
                CandidateEmail: "Aniket@gmail.com",
                ReferedOn: "2024-08-01",
                JobTittle: "Junior Software Engineer",
                JobType: "intern",
                CandidateStatus: "Pending",
                UpdatedOn: "2024-08-01",
                ReferralIncluded: "Approved",
                ReferralAmount: 3000,
                PaymentDisbursal: "Pending",
                Status: "On the Way"
            },
            {
                id: 2,
                CandidateName: "Aniket",
                CandidateEmail: "Aniket@gmail.com",
                ReferedOn: "2024-08-01",
                JobTittle: "Junior Software Engineer",
                JobType: "intern",
                CandidateStatus: "Pending",
                UpdatedOn: "2024-08-01",
                ReferralIncluded: "Approved",
                ReferralAmount: 3000,
                PaymentDisbursal: "Pending",
                Status: "On the Way"
            },
            {
                id: 3,
                CandidateName: "Aniket",
                CandidateEmail: "Aniket@gmail.com",
                ReferedOn: "2024-08-01",
                JobTittle: "Junior Software Engineer",
                JobType: "intern",
                CandidateStatus: "Pending",
                UpdatedOn: "2024-08-01",
                ReferralIncluded: "Approved",
                ReferralAmount: 3000,
                PaymentDisbursal: "Pending",
                Status: "On the Way"
            },
            {
                id: 4,
                CandidateName: "Aniket",
                CandidateEmail: "Aniket@gmail.com",
                ReferedOn: "2024-08-01",
                JobTittle: "Junior Software Engineer",
                JobType: "intern",
                CandidateStatus: "Pending",
                UpdatedOn: "2024-08-01",
                ReferralIncluded: "Approved",
                ReferralAmount: 3000,
                PaymentDisbursal: "Pending",
                Status: "On the Way"
            },
            {
                id: 5,
                CandidateName: "Aniket",
                CandidateEmail: "Aniket@gmail.com",
                ReferedOn: "2024-08-01",
                JobTittle: "Junior Software Engineer",
                JobType: "intern",
                CandidateStatus: "Pending",
                UpdatedOn: "2024-08-01",
                ReferralIncluded: "Approved",
                ReferralAmount: 3000,
                PaymentDisbursal: "Pending",
                Status: "On the Way"
            },
            {
                id: 6,
                CandidateName: "Aniket",
                CandidateEmail: "Aniket@gmail.com",
                ReferedOn: "2024-08-01",
                JobTittle: "Junior Software Engineer",
                JobType: "intern",
                CandidateStatus: "Pending",
                UpdatedOn: "2024-08-01",
                ReferralIncluded: "Approved",
                ReferralAmount: 3000,
                PaymentDisbursal: "Pending",
                Status: "On the Way"
            },
            {
                id: 7,
                CandidateName: "Aniket",
                CandidateEmail: "Aniket@gmail.com",
                ReferedOn: "2024-08-01",
                JobTittle: "Junior Software Engineer",
                JobType: "intern",
                CandidateStatus: "Pending",
                UpdatedOn: "2024-08-01",
                ReferralIncluded: "Approved",
                ReferralAmount: 3000,
                PaymentDisbursal: "Pending",
                Status: "On the Way"
            }
        ];
        setreferralData(data);
    };

    fetchData();
}, []);


    // Calculate indices for current page data
   const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = referralData.slice(indexOfFirstEntry, indexOfLastEntry);
    // Function to handle page change

    return (
        <div className="referral-list-container">
            <div className="referral-list-header">
                <div className="referral-list-heading">
                    <button className="back-button">←</button>

                    <h2>Referral List</h2>
                </div>
            </div>
            <div className="referral-list-table-container">
                <table className="referral-list-table">
                    <thead>
                        <tr>
                            <th>Candidate Name</th>
                            <th>Candidate Email</th>
                            <th>Referred On</th>
                            <th>Job Tittle</th>
                            <th>Job Type</th>
                            <th>Candidate Status</th>
                            <th>Updated On</th>
                            <th>Referral Included</th>
                            <th>Referral Amount</th>
                            <th>Payment Disbursal</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.length > 0 ? (
                            currentEntries.map((referral) => (
                                <tr key={referral.id}>
                                    <td>{referral.CandidateName}</td>
                                    <td>{referral.CandidateEmail}</td>
                                    <td>{referral.ReferedOn}</td>
                                    <td>{referral.JobTittle}</td>
                                    <td>{referral.JobType}</td>
                                    <td>{referral.CandidateStatus}</td>
                                    <td>{referral.UpdatedOn}</td>
                                    <td>{referral.ReferralIncluded}</td>
                                    <td>{referral.ReferralAmount}</td>
                                    <td>{referral.PaymentDisbursal}</td>
                                    <td>{referral.Status}</td>
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
            <Pagination
                    totalEntries={referralData.length}
                    entriesPerPage={entriesPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onEntriesChange={setEntriesPerPage}
                />

        </div>
    );
};


export default Myreferrals;