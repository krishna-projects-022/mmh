import React from "react";
import { GoGraph } from "react-icons/go";
import { SlEarphonesAlt } from "react-icons/sl";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-sm px-6 py-3">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-[#ff6600] text-white p-2 rounded text-xl">
          <GoGraph />
        </div>
        <h1 className="font-semibold text-lg text-gray-800">AdminHub</h1>
      </div>

      {/* Right: Icons + User Profile */}
      <div className="flex items-center space-x-6">
        <SlEarphonesAlt className="text-[#ff6600] text-xl cursor-pointer" />

        <div className="flex items-center space-x-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
            alt="Admin"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <div className="leading-tight">
            <h6 className="font-semibold text-gray-800">Sarah Johnson</h6>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
