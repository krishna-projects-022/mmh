import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SellerDirectory = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const sellers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@shopzone.com",
      phone: "+1 (415) 789-2345",
      registration: "10 Feb 2024",
      lastActive: "1 hour ago",
      totalProducts: 58,
      status: "Active",
    },
    {
      id: 2,
      name: "Emily Davis",
      email: "emily.davis@shopzone.com",
      phone: "+1 (213) 555-9876",
      registration: "5 Mar 2024",
      lastActive: "5 hours ago",
      totalProducts: 0,
      status: "Inactive",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@shopzone.com",
      phone: "+1 (212) 333-4444",
      registration: "12 Apr 2024",
      lastActive: "30 mins ago",
      totalProducts: 102,
      status: "Active",
    },
    {
      id: 4,
      name: "Olivia Lee",
      email: "olivia.lee@shopzone.com",
      phone: "+1 (646) 222-1111",
      registration: "20 Apr 2024",
      lastActive: "Yesterday",
      totalProducts: 0,
      status: "Suspended",
    },
  ];

  // ✅ Filter sellers based on tab and search
  const filteredSellers = sellers.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.phone.includes(searchTerm);

    const matchesTab = activeTab === "All" || s.status === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <IoIosArrowBack size={20} />
          Back
        </button>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-1">Seller Management</h2>
      <p className="text-gray-500 mb-6">Seller Directory</p>

      {/* Tabs + Export */}
      <div className="flex justify-between items-center px-6 mb-10">
        <div className="flex space-x-2 bg-gray-100 w-[300px] p-1 rounded-md">
          {["All", "Active", "Inactive", "Suspended"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors duration-200
                ${
                  activeTab === tab
                    ? "bg-white text-orange-500 border-orange-500"
                    : "text-gray-600 hover:text-orange-500 border-transparent"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
          <FaDownload size={14} />
          Export
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow mb-6">
        {/* Search + Select All */}
        <div className="flex flex-wrap justify-between items-center p-4 gap-3">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="selectAll" className="w-4 h-4" />
            <label htmlFor="selectAll" className="text-sm text-gray-600">
              Select all
            </label>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-600 font-medium">
              <tr>
                <th className="p-4">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="p-4">Profile</th>
                <th className="p-4">Registration Date</th>
                <th className="p-4">Last Active</th>
                <th className="p-4">Total Products</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSellers.map((seller) => (
                <tr key={seller.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src="https://via.placeholder.com/40"
                      alt={seller.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{seller.name}</p>
                      <p className="text-gray-500 text-xs">{seller.email}</p>
                      <p className="text-gray-500 text-xs">{seller.phone}</p>
                    </div>
                  </td>
                  <td className="p-4">{seller.registration}</td>
                  <td className="p-4">{seller.lastActive}</td>
                  <td className="p-4 text-center">
                    {seller.totalProducts === 0 ? (
                      "-"
                    ) : (
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                        {seller.totalProducts}
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        seller.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : seller.status === "Inactive"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {seller.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gray-500 hover:text-gray-700">
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 text-gray-600 text-sm">
          <p>Showing 1 to {filteredSellers.length} of 58 sellers</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-200">
              Previous
            </button>
            <button className="px-3 py-1 bg-orange-500 text-white rounded-lg">
              1
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

export default SellerDirectory;
