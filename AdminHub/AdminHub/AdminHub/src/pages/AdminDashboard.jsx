import React, { useEffect, useState } from "react";
import { FaUsers, FaStore, FaIndustry } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [pendingSellers, setPendingSellers] = useState([]);

  // Fetch sellers whose approve = false
  useEffect(() => {
    const fetchPendingSellers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sellers/pending");
        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          setPendingSellers(result.data);
        } else {
          setPendingSellers([]);
        }
      } catch (error) {
        console.error("Error:", error);
        setPendingSellers([]);
      }
    };

    fetchPendingSellers();
  }, []);

  // ✅ Approve Seller
  const handleApprove = async (sellerId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/sellers/approve/${sellerId}`,
        { method: "PATCH" }
      );
      const data = await response.json();
      if (data.success) {
        setPendingSellers((prev) => prev.filter((s) => s.id !== sellerId));
      } else {
        console.error("Failed to approve seller:", data.message);
        alert("Failed to approve seller.");
      }
    } catch (error) {
      console.error("Error approving seller:", error);
      alert("Error approving seller.");
    }
  };


  // ✅ Deny Seller (Delete)
  const handleDeny = async (sellerId) => {
    if (!window.confirm("Are you sure you want to deny this seller?")) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/sellers/${sellerId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setPendingSellers((prev) =>
          prev.filter((seller) => seller.id !== sellerId)
        );
        alert("Seller denied and removed successfully!");
      } else {
        alert("Failed to remove seller.");
      }
    } catch (error) {
      console.error("Error denying seller:", error);
    }
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen p-10">
      {/* Page Header */}
      <div className="mb-6">
        <h3 className="text-gray-500 text-sm">Dashboard</h3>
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">
          Monitor and manage your platform ecosystem
        </p>
      </div>

      {/* Top Buttons */}
      <div className="flex justify-end space-x-4 mb-6">
        <Link to="/addcategory">
          <button className="bg-[#ff6600] text-white px-4 py-2 rounded-md hover:bg-orange-600 flex items-center text-sm">
            + Add Category
          </button>
        </Link>

        <Link to="/sellerwithdrawRequests">
          <button className="bg-[#ff6600] text-white px-4 py-2 rounded-md font-medium hover:bg-[#e55b00]">
            Seller Withdraw Requests
          </button>
        </Link>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Buyers */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-700">Buyers</h2>
            <FaUsers className="text-[#ff6600]" />
          </div>
          <div className="text-sm text-gray-600 space-y-1 mb-3">
            <p>
              Total Count <span className="float-right font-semibold">2,847</span>
            </p>
            <p>
              Active Buyers <span className="float-right font-semibold">2,456</span>
            </p>
            <p>
              Pending Verifications{" "}
              <span className="float-right font-semibold text-[#ff6600]">23</span>
            </p>
          </div>
          <button className="bg-[#ffe7d1] text-[#ff6600] w-full py-2 rounded-md font-medium">
            Buyer Management
          </button>
        </div>

        {/* Sellers */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-700">Sellers</h2>
            <FaStore className="text-[#ff6600]" />
          </div>
          <div className="text-sm text-gray-600 space-y-1 mb-3">
            <p>
              Total Count <span className="float-right font-semibold">456</span>
            </p>
            <p>
              Pending KYC <span className="float-right font-semibold">123</span>
            </p>
            <p>
              Active Sellers{" "}
              <span className="float-right font-semibold text-[#ff6600]">390</span>
            </p>
          </div>
          <button className="bg-[#ffe7d1] text-[#ff6600] w-full py-2 rounded-md font-medium">
            Seller Management
          </button>
        </div>

        {/* Manufacturers */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-700">Manufacturers</h2>
            <FaIndustry className="text-[#ff6600]" />
          </div>
          <div className="text-sm text-gray-600 space-y-1 mb-3">
            <p>
              Total Count <span className="float-right font-semibold">89</span>
            </p>
            <p>
              Active Manufacturers{" "}
              <span className="float-right font-semibold">76</span>
            </p>
            <p>
              New Product Submissions{" "}
              <span className="float-right font-semibold text-[#ff6600]">23</span>
            </p>
          </div>
          <button className="bg-[#ffe7d1] text-[#ff6600] w-full py-2 rounded-md font-medium">
            Manufacturer List
          </button>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Buyer Recent Orders */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-700">Buyer Recent Orders</h2>
            <span className="text-[#ff6600] text-sm font-medium cursor-pointer">
              View All
            </span>
          </div>
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="pb-2">Order ID</th>
                <th>Buyer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {["Delivered", "Pending", "Delivered", "Shipped", "Delivered"].map(
                (status, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2">#ORD-2024</td>
                    <td>Michael Chen</td>
                    <td>$1,249</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${status === "Delivered"
                            ? "bg-green-100 text-green-600"
                            : status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Seller Recent Orders */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-700">Seller Recent Orders</h2>
            <span className="text-[#ff6600] text-sm font-medium cursor-pointer">
              View All
            </span>
          </div>
          <table className="w-full text-sm text-left ">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="pb-2">Order ID</th>
                <th>Buyer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {["Delivered", "Shipped", "Delivered", "Pending", "Delivered"].map(
                (status, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2">#ORD-2024</td>
                    <td>Michael Chen</td>
                    <td>$1,249</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${status === "Delivered"
                            ? "bg-green-100 text-green-600"
                            : status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Seller Verification */}
      <div className="bg-white rounded-xl shadow p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-700 text-lg">
            Seller Verification
          </h2>
          <button className="bg-[#ff6600] text-white px-4 py-2 rounded-md font-medium hover:bg-[#e55b00]">
            Approve All
          </button>
        </div>

        {/* Seller Table */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full text-sm text-left ">
            <thead className="text-gray-500 border-b bg-[#f5f5f5] border ">
              <tr>
                <th className="p-6">Seller Details</th>
                <th>Business Info</th>
                <th>Contact</th>
                <th>Category</th>
                <th>Status</th>
                <th className="pl-10">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {pendingSellers.length > 0 ? (
                pendingSellers.map((seller) => (
                  <tr key={seller.id} className="border-b last:border-0">
                    <td className="py-3 pl-4">{seller.business_name}</td>
                    <td>{seller.store_name}</td>
                    <td>
                      {seller.email_id}
                      <br />
                      {seller.phone_no}
                    </td>
                    <td>
                      <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-[20px] text-xs font-medium">
                        {seller.business_category}
                      </span>
                    </td>
                    <td>
                      <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-[20px] text-xs font-medium">
                        Pending
                      </span>
                    </td>
                    <td>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleApprove(seller.id)}
                          className="bg-[#ff6600] text-white px-3 py-1 rounded-md text-xs font-medium"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleDeny(seller.id)}
                          className="border border-red-500 text-red-500 px-3 py-1 rounded-md text-xs font-medium hover:bg-red-50"
                        >
                          Deny
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No pending sellers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 space-x-2">
        <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100">
          ‹
        </button>

        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`px-3 py-1 border rounded-md ${num === 1
                ? "bg-[#ff6600] text-white border-[#ff6600]"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            {num}
          </button>
        ))}

        <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100">
          ›
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
