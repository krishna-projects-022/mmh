// src/pages/AddCategory.jsx
import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories");
        const result = await res.json();
        if (result.success) {
          setCategories(result.data);
        }
      } catch (err) {
        console.error("Failed to load categories:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Toggle active
  const toggleActive = async (id, current) => {
    try {
      await fetch(`http://localhost:5000/api/categories/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: !current }),
      });
      setCategories((prev) =>
        prev.map((cat) => (cat.id === id ? { ...cat, is_active: !current } : cat))
      );
    } catch (err) {
      alert("Failed to update status");
    }
  };

  // Delete category
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await fetch(`http://localhost:5000/api/categories/${id}`, { method: "DELETE" });
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    } catch (err) {
      alert("Failed to delete");
    }
  };

  // Filter
  const filtered = categories.filter((cat) => {
    const matchesSearch = cat.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All Status" ||
      (statusFilter === "Active" && cat.is_active) ||
      (statusFilter === "Inactive" && !cat.is_active);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-10">
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <IoIosArrowBack className="mr-2" /> Back
      </button>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
          Create a New Category to Organize Your Products
        </h2>
        <div className="flex space-x-3">
          <Link to="/addcategoryform">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 flex items-center text-sm">
              <FaPlus className="mr-2" /> Add Category
            </button>
          </Link>
          <Link to="/addsubcategoryform">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 flex items-center text-sm">
              <FaPlus className="mr-2" /> Add Sub-Category
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-bold text-gray-800">
            Category Management
            <br />
            <span className="text-gray-500 text-xs font-semibold">
              Manage your product categories
            </span>
          </h3>
          <div className="flex items-center space-x-3 mt-3 md:mt-0">
            <input
              type="text"
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        {loading ? (
          <p className="text-center text-gray-500">Loading categories...</p>
        ) : (
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">Category</th>
                <th className="text-left p-3">Icon</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((cat) => (
                  <tr key={cat.id} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="p-3">#{String(cat.id).padStart(3, "0")}</td>
                    <td className="p-3">
                      <div>
                        <p className="font-semibold text-gray-800">{cat.name}</p>
                        <p className="text-gray-500 text-sm">{cat.description || "—"}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      {cat.icon_path ? (
                        <img
                          src={`http://localhost:5000${cat.icon_path}`}
                          alt={cat.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                          <FaPlus className="text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => toggleActive(cat.id, cat.is_active)}
                        className="focus:outline-none"
                      >
                        {cat.is_active ? (
                          <BsToggleOn className="text-green-500 text-2xl" />
                        ) : (
                          <BsToggleOff className="text-gray-400 text-2xl" />
                        )}
                      </button>
                    </td>
                    <td className="p-3">
                      <div className="flex space-x-3 text-gray-500">
                        <FaEdit
                          className="hover:text-orange-500 cursor-pointer"
                          onClick={() => navigate(`/editcategory/${cat.id}`)}
                        />
                        <FaTrash
                          className="hover:text-red-500 cursor-pointer"
                          onClick={() => handleDelete(cat.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500">
                    No categories found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AddCategory;