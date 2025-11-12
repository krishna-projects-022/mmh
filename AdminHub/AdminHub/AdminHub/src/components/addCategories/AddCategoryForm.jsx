import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddCategoryForm = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Category name is required");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("is_active", isActive);
    if (file) formData.append("icon", file);

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/categories/add", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        alert("Category added!");
        navigate(-1);
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 mb-4 self-start hover:text-gray-800"
      >
        <IoIosArrowBack className="mr-2" /> Back
      </button>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-2xl">
        {/* Category Name */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Category Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />
        </div>

        {/* Icon Upload */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Category Icon</label>
          <label className="border-2 border-dashed border-gray-300 rounded-md py-10 flex flex-col items-center text-gray-500 hover:border-orange-400 transition cursor-pointer">
            <FaUpload className="text-2xl mb-2" />
            <p className="text-sm">
              {file ? file.name : "Drag & drop or click to upload"}
              <br />
              <span className="text-xs text-gray-400">
                PNG, JPG, SVG (Max 2MB)
              </span>
            </p>
            <input
              type="file"
              accept="image/png,image/jpeg,image/svg+xml"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Description <span className="text-gray-400 text-sm">(Optional)</span>
          </label>
          <textarea
            placeholder="Enter category description..."
            maxLength={200}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 h-24 resize-none focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <div className="text-right text-gray-400 text-xs">
            {description.length}/200
          </div>
        </div>

        {/* Status */}
        <div className="mb-5 flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setIsActive(!isActive)}
            className={`w-10 h-5 flex items-center rounded-full p-1 transition ${isActive ? "bg-orange-500" : "bg-gray-300"}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${isActive ? "translate-x-5" : ""}`} />
          </button>
          <span className="text-gray-700 font-medium">
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Category"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryForm;