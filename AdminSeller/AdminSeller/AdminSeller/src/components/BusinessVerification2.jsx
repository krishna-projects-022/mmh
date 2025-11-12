import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import styles from "./BusinessVerification2.module.css";
import { FaCamera } from "react-icons/fa6";

const BusinessVerification2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const step1 = location.state || {};

  const [formData, setFormData] = useState({
    storeName: "",
    businessCategory: "",
    location: "",
    phoneNo: "",
    emailID: "",
    role: null,
  });
  const [storeLogoFile, setStoreLogoFile] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRoleSelect = (role) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleLogoChange = (e) => {
    if (e.target.files[0]) setStoreLogoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.storeName ||
      !formData.businessCategory ||
      !formData.location ||
      !formData.phoneNo ||
      !formData.emailID ||
      !formData.role
    ) {
      setError("Please fill all fields");
      return;
    }

    const payload = new FormData();

    // Step 1 data
    payload.append("gstNumber", step1.gstNumber || "");
    payload.append("panNumber", step1.panNumber || "");
    payload.append("businessName", step1.businessName || "");
    if (step1.gstFile) payload.append("gstFile", step1.gstFile);
    if (step1.panFile) payload.append("panFile", step1.panFile);

    // Step 2 data
    payload.append("storeName", formData.storeName);
    payload.append("businessCategory", formData.businessCategory);
    payload.append("location", formData.location);
    payload.append("phoneNo", formData.phoneNo);
    payload.append("emailID", formData.emailID);
    payload.append("role", formData.role);
    if (storeLogoFile) payload.append("storeLogo", storeLogoFile);

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/users/complete-profile", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to complete profile");
    }
  };

  return (
    <div className={styles["bv-wrapper"]}>
      <div className={styles["bv-steps"]}>
        <div className={`${styles.step} ${styles.completed}`}>
          <span>1</span> Business Verification
        </div>
        <div className={`${styles["progress-line"]} ${styles.active}`}>
          <span className={styles.progreeinsid}></span>
        </div>
        <div className={`${styles.step} ${styles.active}`}>
          <span>2</span> Seller Profile
        </div>
      </div>

      <h1 className={styles["bv-title"]}>Set Up Your Seller Profile</h1>
      <p className={styles["bv-subtitle"]}>
        Tell us about your store to get started selling.
      </p>

      {error && <p className={styles.errorText}>{error}</p>}

      <form className={styles["bv-form"]} onSubmit={handleSubmit}>
        <label>Store Logo</label>
        <div className={styles["upload-section"]}>
          <div className={styles["upload-box"]}>
            <span className={styles["upload-icon"]}>
              <FaCamera style={{ fontSize: "20px" }} />
            </span>
            <p style={{ color: "grey" }}>Upload</p>
            <input
              type="file"
              id="storeLogo"
              accept=".png,.jpg,.jpeg"
              className={styles["file-input"]}
              onChange={handleLogoChange}
            />
          </div>
        </div>

        <label>Store Name</label>
        <input
          type="text"
          id="storeName"
          placeholder="Enter your store name"
          className={styles["bv-input"]}
          value={formData.storeName}
          onChange={handleChange}
        />

        <label>Business Category</label>
        <select
          id="businessCategory"
          className={styles["bv-input"]}
          value={formData.businessCategory}
          onChange={handleChange}
        >
          <option value="" disabled>Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="homegoods">Home Goods</option>
        </select>

        <label>Location</label>
        <input
          type="text"
          id="location"
          placeholder="Enter your business location"
          className={styles["bv-input"]}
          value={formData.location}
          onChange={handleChange}
        />

        <label>Phone Number</label>
        <div className={styles["phone-group"]}>
          <select className={styles["country-code"]} defaultValue="+91">
            <option value="+1">+1</option>
            <option value="+91">+91</option>
          </select>
          <input
            type="tel"
            id="phoneNo"
            placeholder="Enter phone number"
            className={styles["bv-input"]}
            value={formData.phoneNo}
            onChange={handleChange}
          />
        </div>

        <label>Email ID</label>
        <input
          type="email"
          id="emailID"
          placeholder="Enter your email address"
          className={styles["bv-input"]}
          value={formData.emailID}
          onChange={handleChange}
        />

        <label>Select Role</label>
        <div className={styles["role-section"]}>
          <button
            type="button"
            className={`${styles["role-btn"]} ${formData.role === "seller" ? styles.active : ""}`}
            onClick={() => handleRoleSelect("seller")}
          >
            I'm Seller
          </button>
          <button
            type="button"
            className={`${styles["role-btn"]} ${formData.role === "manufacturer" ? styles.active : ""}`}
            onClick={() => handleRoleSelect("manufacturer")}
          >
            I'm Manufacturer
          </button>
        </div>

        <button type="submit" className={styles["continue-btn"]}>
          Complete Setup
        </button>
      </form>
    </div>
  );
};

export default BusinessVerification2;