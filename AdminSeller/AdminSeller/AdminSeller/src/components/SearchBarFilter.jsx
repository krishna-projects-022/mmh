// components/SearchFilterBar.jsx
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../pages/ListYourProducts.module.css";

const SearchFilterBar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        const result = await response.json();

        if (result.success) {
          setCategories(result.data);
        } else {
          console.error("Failed to load categories:", result.message);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={styles.searchBar}>
      {/* Search input with icon */}
      <div className={styles.searchInputWrapper}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search products by name or SKU"
          className={styles.searchInput}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", width: "400px" }}>
        {/* CATEGORY DROPDOWN */}
        <select className={styles.select} disabled={loading}>
          <option value="">All Categories</option>
          {loading ? (
            <option>Loading...</option>
          ) : (
            categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))
          )}
        </select>

        {/* Stock Status */}
        <select className={styles.select}>
          <option>Stock Status</option>
          <option>In Stock</option>
          <option>Out of Stock</option>
          <option>Low Stock</option>
        </select>

        {/* All Status */}
        <select className={styles.select}>
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilterBar;