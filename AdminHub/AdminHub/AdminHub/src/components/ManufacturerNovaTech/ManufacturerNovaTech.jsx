import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiMoreVertical } from "react-icons/fi";

const ManufacturerNovaTech = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const products = [
    { id: 1, name: "Nova Smartwatch X", category: "Wearables", price: 6500, stock: 120, status: "In Stock" },
    { id: 2, name: "Nova AirPods Lite", category: "Accessories", price: 4200, stock: 30, status: "Low Stock" },
    { id: 3, name: "Nova Vision VR Headset", category: "Electronics", price: 18999, stock: 0, status: "Out of Stock" },
    { id: 4, name: "Nova Smartband Pro", category: "Wearables", price: 2999, stock: 70, status: "In Stock" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-700";
      case "Low Stock":
        return "bg-orange-100 text-orange-600";
      case "Out of Stock":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 text-gray-600 cursor-pointer hover:text-orange-500">
        <IoIosArrowBack size={20} />
        <span>Back</span>
      </div>

      {/* Manufacturer Card */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-orange-500 text-white font-semibold text-xl rounded-xl w-14 h-14 flex items-center justify-center">
            NT
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">NovaTech Industries</h2>
            <p className="text-gray-500 text-sm">Contact: Emma Watson</p>
            <div className="flex items-center text-sm text-gray-500 mt-1 gap-3">
              <span className="flex items-center gap-1"><FiMail /> emma@novatech.com</span>
              <span className="flex items-center gap-1"><FiPhone /> +1 (800) 987-6543</span>
              <span className="flex items-center gap-1"><FiMapPin /> Bengaluru</span>
            </div>
            <span className="inline-block mt-2 px-2 py-0.5 text-sm bg-green-100 text-green-700 rounded-full">
              ● Active
            </span>
          </div>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md flex items-center gap-2 text-sm">
          <FaEdit size={14} /> Edit Manufacturer
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search products"
            className="w-full max-w-sm px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-200 rounded-md px-4 py-2 text-gray-600 focus:ring-2 focus:ring-orange-500 outline-none"
        >
          <option>All Categories</option>
          <option>Wearables</option>
          <option>Accessories</option>
          <option>Electronics</option>
        </select>
      </div>

      {/* Product Table */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="py-3 px-6">Products</th>
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Stock Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t hover:bg-orange-50 transition-all">
                <td className="py-3 px-6 flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-md">
                    <span role="img" aria-label="product">🛍️</span>
                  </div>
                  {p.name}
                </td>
                <td className="py-3 px-6">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-md text-xs font-medium">
                    {p.category}
                  </span>
                </td>
                <td className="py-3 px-6 font-medium text-gray-800">₹ {p.price}</td>
                <td className="py-3 px-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(p.status)}`}>
                    ● {p.status} ({p.stock})
                  </span>
                </td>
                <td className="py-3 px-6 text-center text-gray-500 hover:text-orange-500 cursor-pointer">
                  <FiMoreVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManufacturerNovaTech;
