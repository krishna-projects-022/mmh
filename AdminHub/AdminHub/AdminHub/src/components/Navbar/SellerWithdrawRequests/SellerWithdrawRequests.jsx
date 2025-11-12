import React, { useState } from "react";
import { FaCheck, FaTimes, FaClock } from "react-icons/fa";
import { IoIosArrowBack, IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SellerWithdrawRequests = ({ onBack }) => {
    let navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("All");

  const requests = [
    {
      id: "#SEL001",
      name: "Rajesh Kumar",
      contact: "+91 98765 43210",
      email: "rajesh@example.com",
      amount: 25000,
      date: "Dec 15, 2024",
      status: "Pending",
    },
    {
      id: "#SEL002",
      name: "Priya Sharma",
      contact: "+91 87654 32109",
      email: "priya@example.com",
      amount: 15500,
      date: "Dec 14, 2024",
      status: "Approved",
    },
    {
      id: "#SEL003",
      name: "Amit Patel",
      contact: "+91 76543 21098",
      email: "amit@example.com",
      amount: 8750,
      date: "Dec 13, 2024",
      status: "Pending",
    },
    {
      id: "#SEL004",
      name: "Sneha Gupta",
      contact: "+91 65432 10987",
      email: "sneha@example.com",
      amount: 32200,
      date: "Dec 12, 2024",
      status: "Denied",
    },
    {
      id: "#SEL005",
      name: "Vikram Singh",
      contact: "+91 54321 09876",
      email: "vikram@example.com",
      amount: 18900,
      date: "Dec 11, 2024",
      status: "Pending",
    },
  ];

  const filteredRequests =
    statusFilter === "All"
      ? requests
      : requests.filter((r) => r.status === statusFilter);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={()=>{navigate('/')}}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <IoIosArrowBack size={20} />
          Back
        </button>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-1">Seller Withdraw Requests</h2>
      <p className="text-gray-500 mb-6">
        Manage and approve seller withdrawal requests
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-2xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Pending Requests</p>
            <h3 className="text-2xl font-bold">24</h3>
          </div>
          <FaClock className="text-yellow-500 text-2xl" />
        </div>
        <div className="bg-white p-5 rounded-2xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Approved</p>
            <h3 className="text-2xl font-bold">156</h3>
          </div>
          <FaCheck className="text-green-500 text-2xl" />
        </div>
        <div className="bg-white p-5 rounded-2xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Denied</p>
            <h3 className="text-2xl font-bold">12</h3>
          </div>
          <FaTimes className="text-red-500 text-2xl" />
        </div>
      </div>

      {/* Filter + Search */}
      <div className="bg-white rounded-2xl shadow p-4 mb-6 flex flex-wrap justify-between items-center gap-3">
        <input
          type="text"
          placeholder="Search by seller name, ID, or contact..."
          className="border rounded-lg px-4 py-2 w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Denied">Denied</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="p-4">Seller</th>
              <th className="p-4">Contact Info</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Request Date</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((r) => (
              <tr key={r.id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-xs">ID: {r.id}</p>
                </td>
                <td className="p-4 text-gray-600">
                  <p>{r.contact}</p>
                  <p className="text-xs">{r.email}</p>
                </td>
                <td className="p-4 font-semibold">₹{r.amount.toLocaleString()}</td>
                <td className="p-4">{r.date}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      r.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : r.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="p-4 flex justify-center gap-3">
                  <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                    <FaCheck size={12} />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                    <FaTimes size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 text-gray-600 text-sm">
          <p>Showing 1 to 5 of 24 results</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-200">
              Previous
            </button>
            <button className="px-3 py-1 bg-orange-500 text-white rounded-lg">
              1
            </button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-200">
              2
            </button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerWithdrawRequests;
