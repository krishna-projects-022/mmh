import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { FaReply, FaTrash } from "react-icons/fa";

const SellerContactForm = () => {
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [search, setSearch] = useState("");

  const requests = [
    {
      id: 1,
      name: "John Martinez",
      email: "Baburaoganpatraoapte@gmail.com",
      category: "Electronic Video Games",
      time: "2 hours ago",
      status: "Pending",
      description:
        "TechCorp SolutionsExperience superior sound quality with our premium wireless headphones featuring noise cancellation 30-hour battery life, and comfortable over-ear design.technology.",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    {
      id: 2,
      name: "Sophia Turner",
      email: "sophia@techgear.com",
      category: "Home Appliances",
      time: "3 hours ago",
      status: "Pending",
      description:
        "Experience top-tier technology with our advanced kitchen and home appliances, designed for durability and innovation.",
      avatar: "https://i.pravatar.cc/50?img=2",
    },
  ];

  const filteredRequests = requests.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-orange-500">
          <IoIosArrowBack size={20} />
          <span>Back</span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="Admin"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">Sarah Johnson</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

      </div>

      {/* Title */}
      <div className="bg-white shadow-sm rounded-lg p-5 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Seller Contact Form</h2>
        <p className="text-gray-500 text-sm mt-1">
          View and manage all seller inquiries in one place.
        </p>
         <input
            type="text"
            placeholder="🔍 Search buyers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" w-full mb-4 px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-500 outline-none text-sm"
          />
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="bg-white shadow-md rounded-xl p-4 col-span-1">
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-700 font-medium">
              {filteredRequests.length} total request
            </p>
            <label className="text-sm text-gray-500 flex items-center gap-2">
              <input type="checkbox" className="accent-orange-500" /> Select all
            </label>
          </div>

          <input
            type="text"
            placeholder="🔍 Search buyers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-4 px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-500 outline-none text-sm"
          />

          <div className="space-y-3 overflow-y-auto max-h-[500px] pr-1">
            {filteredRequests.map((r) => (
              <div
                key={r.id}
                onClick={() => setSelectedSeller(r)}
                className={`p-3 border rounded-lg cursor-pointer hover:bg-orange-50 ${
                  selectedSeller?.id === r.id
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex gap-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{r.name}</p>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {r.description}
                    </p>
                    <div className="flex justify-between items-center mt-1 text-xs text-gray-400">
                      <span>{r.time}</span>
                      <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-[11px] font-medium">
                        {r.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-2 text-gray-500 text-sm">
                  <FaReply className="hover:text-orange-500 cursor-pointer" />
                  <FaTrash className="hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-2 bg-white shadow-md rounded-xl p-6">
          {selectedSeller ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedSeller.avatar}
                    alt={selectedSeller.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">
                      {selectedSeller.name}
                    </p>
                    <p className="text-sm text-gray-400">{selectedSeller.time}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600 mb-4">
                <p>
                  <span className="font-medium text-gray-800">Category:</span>{" "}
                  {selectedSeller.category}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Email ID:</span>{" "}
                  {selectedSeller.email}
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-1">Description</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedSeller.description.repeat(2)}
                </p>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <p className="text-sm">Select a seller to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerContactForm;
