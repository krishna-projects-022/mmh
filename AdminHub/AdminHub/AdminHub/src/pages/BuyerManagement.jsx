import React from "react";
import { GoGraph } from "react-icons/go";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaSearch, FaFilter, FaFileExport, FaTrashAlt, FaEdit } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import adminimg from '../assets/adminimg.svg'

const buyers = [
  { id: "#BU004", name: "David Wilson", email: "david.wilson@email.com", phone: "+1 234 567 8903", orders: 31, status: "Verified" },
  { id: "#BU004", name: "David Wilson", email: "david.wilson@email.com", phone: "+1 234 567 8903", orders: 31, status: "payment request" },
  { id: "#BU004", name: "David Wilson", email: "david.wilson@email.com", phone: "+1 234 567 8903", orders: 31, status: "Pending" },
  { id: "#BU004", name: "David Wilson", email: "david.wilson@email.com", phone: "+1 234 567 8903", orders: 31, status: "Shipped" },
  { id: "#BU004", name: "David Wilson", email: "david.wilson@email.com", phone: "+1 234 567 8903", orders: 31, status: "return request" },
];

const statusColors = {
  Verified: "bg-green-100 text-green-600",
  "payment request": "bg-yellow-100 text-yellow-600",
  Pending: "bg-orange-100 text-orange-600",
  Shipped: "bg-blue-100 text-blue-600",
  "return request": "bg-red-100 text-red-600",
  Delivered: "bg-teal-100 text-teal-600",
};

const BuyerManagement = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      {/* ===== Navbar ===== */}
      <nav className="flex justify-between items-center bg-white border-b border-gray-200 px-6 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          
          <span className="font-bold text-xl text-gray-800">Buyer Management</span>
        </div>

        <div className="flex items-center gap-4">
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
              src= {adminimg}
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
      <div className="flex justify-between items-center px-8 py-6">
        <div>
          <h2 className=" flex items-center text-gray-800"><IoIosArrowBack />   Back</h2>
          <p className="text-lg text-gray-500">
            View and manage all registered buyers in one place.
          </p>
        </div>
        <button className="bg-[#ff6600] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e65c00]">
          Buyer Directory
        </button>
      </div>

      {/* ===== Search & Filter Bar ===== */}
      <div className="flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-3 mx-8 shadow-sm mb-4">
         <h1 className="font-bold text-lg"> Buyer Management</h1>
        <div className="flex items-center gap-2 text-gray-500 border p-2 ml-[700px] rounded">
          
         
          <FaSearch />
          <input 
            type="text"
            placeholder="Search buyers..."
            className="  outline-none text-sm bg-transparent w-60"
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
                <th className="p-4">Buyer ID</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Orders</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {buyers.map((b, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">{b.id}</td>
                  <td>{b.name}</td>
                  <td>{b.email}</td>
                  <td>{b.phone}</td>
                  <td>{b.orders}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[b.status]}`}
                    >
                      {b.status}
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
            <p>Showing 1 to 5 of 127 buyers</p>
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

        {/* ===== Buyer Profile Card ===== */}
        <div className="w-72 bg-white border border-gray-300 rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800 text-lg">Buyer Profile</h3>
            <button className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src={adminimg}
              alt="Buyer"
              className="w-16 h-16 rounded-full mb-3"
            />
            <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
            <p className="text-sm text-gray-500 mb-1">sarah.johnson@email.com</p>
            <p className="text-sm text-gray-500">+1 234 567 8900</p>
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

export default BuyerManagement;
