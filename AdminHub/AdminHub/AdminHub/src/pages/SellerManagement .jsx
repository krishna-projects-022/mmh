import React from "react";
import { GoGraph } from "react-icons/go";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaSearch, FaFilter, FaFileExport, FaTrashAlt, FaEdit } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import adminimg from '../assets/adminimg.svg'

const sellers = [
  { id: "#SE001", name: "John Carter", email: "john.carter@email.com", phone: "+1 555 111 2222", products: 45, status: "Verified" },
  { id: "#SE002", name: "Emma Johnson", email: "emma.johnson@email.com", phone: "+1 555 333 4444", products: 27, status: "payment request" },
  { id: "#SE003", name: "Michael Lee", email: "michael.lee@email.com", phone: "+1 555 555 6666", products: 19, status: "Pending" },
  { id: "#SE004", name: "Sophia Brown", email: "sophia.brown@email.com", phone: "+1 555 777 8888", products: 61, status: "Shipped" },
  { id: "#SE005", name: "William Davis", email: "william.davis@email.com", phone: "+1 555 999 0000", products: 32, status: "return request" },
];

const statusColors = {
  Verified: "bg-green-100 text-green-600",
  "payment request": "bg-yellow-100 text-yellow-600",
  Pending: "bg-orange-100 text-orange-600",
  Shipped: "bg-blue-100 text-blue-600",
  "return request": "bg-red-100 text-red-600",
  Delivered: "bg-teal-100 text-teal-600",
};

const SellerManagement = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen ">
      {/* ===== Navbar ===== */}
      <nav className="flex justify-between items-center bg-white border-b border-gray-200 px-6 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-gray-800">Seller Management</span>
        </div>

        <div className="flex items-center gap-4 ">
          <div className="relative ">
            <FaSearch className="absolute top-3 left-3 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              className="border border-gray-300 rounded-lg pl-8 pr-3 py-2 text-sm w-72 outline-none focus:border-[#ff6600]"
            />
          </div>
          <SlEarphonesAlt className="text-[#ff6600] text-lg" />
          <div className="flex items-center gap-2">
            <img
              src={adminimg}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <h6 className="text-sm font-semibold">Sarah Johnson</h6>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== Page Header ===== */}
      <div className="flex justify-between items-center px-8 py-6 p-20">
        <div>
          <h2 className=" flex items-center text-gray-800"><IoIosArrowBack />   Back</h2>
          <p className="text-lg text-gray-500">
            View and manage all registered sellers in one place.
          </p>
        </div>
        <button className="bg-[#ff6600] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e65c00]">
          Seller Directory
        </button>
      </div>

      {/* ===== Search & Filter Bar ===== */}
      <div className="flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-3 mx-8 shadow-sm mb-4">
         <h1 className="font-bold text-lg"> Seller Management</h1>
        <div className="flex items-center gap-2 text-gray-500 border p-2 ml-[700px] rounded">
          <FaSearch />
          <input 
            type="text"
            placeholder="Search sellers..."
            className="outline-none text-sm bg-transparent w-60"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md text-sm hover:bg-gray-50">
            <FaFilter /> Filter
          </button>
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md text-sm hover:bg-gray-50">
            <FaFileExport /> Export
          </button>
        </div>
      </div>

      <div className="flex gap-4 px-8">
        {/* ===== Table Section ===== */}
        <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#f5f5f5] text-gray-600 border-b">
              <tr>
                <th className="p-4">Seller ID</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Products</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((s, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.phone}</td>
                  <td>{s.products}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[s.status]}`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-3 text-lg">
                      <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700" />
                      <FaTrashAlt className="text-red-500 cursor-pointer hover:text-red-700" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600">
            <p>Showing 1 to 5 of 82 sellers</p>
            <div className="flex items-center space-x-1">
              <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
                ‹
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`px-3 py-1 border rounded-md ${
                    n === 1
                      ? "bg-[#ff6600] text-white border-[#ff6600]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* ===== Seller Profile Card ===== */}
        <div className="w-72 bg-white border border-gray-300 rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800 text-lg">Seller Profile</h3>
            <button className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src={adminimg}
              alt="Seller"
              className="w-16 h-16 rounded-full mb-3"
            />
            <h4 className="font-semibold text-gray-800">John Carter</h4>
            <p className="text-sm text-gray-500 mb-1">john.carter@email.com</p>
            <p className="text-sm text-gray-500">+1 555 111 2222</p>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs mt-2 font-medium">
              Active Account
            </span>

            <div className="w-full mt-4">
              <p className="text-left text-gray-600 font-medium text-sm mb-2">
                Quick Actions
              </p>
              <button className="w-full bg-[#ff6600] text-white py-2 rounded-md text-sm font-medium hover:bg-[#e65c00] mb-2">
                ✓ Approve Verification
              </button>
              <button className="w-full border border-gray-400 text-gray-600 py-2 rounded-md text-sm hover:bg-gray-100">
                ✕ Deny
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerManagement;
