import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./BusinessVerification.module.css";
import { IoCloudUploadOutline } from "react-icons/io5";

const BusinessVerification = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gstNumber: "",
    panNumber: "",
    businessName: "",
    gstFile: null,
    panFile: null,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.gstNumber || !formData.panNumber || !formData.businessName) {
      setError("All fields are required");
      return;
    }

    const payload = new FormData();
    payload.append("gstNumber", formData.gstNumber);
    payload.append("panNumber", formData.panNumber);
    payload.append("businessName", formData.businessName);
    if (formData.gstFile) payload.append("gstFile", formData.gstFile);
    if (formData.panFile) payload.append("panFile", formData.panFile);

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/users/complete-profile", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      // Pass data to next step
      navigate("/signup-step2", {
        state: {
          gstNumber: formData.gstNumber,
          panNumber: formData.panNumber,
          businessName: formData.businessName,
          gstFile: formData.gstFile,
          panFile: formData.panFile,
        },
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save business info");
    }
  };

  return (
    <div className={styles["bv-wrapper"]}>
      <div className={styles["bv-steps"]}>
        <div className={`${styles.step} ${styles.active}`}>
          <span>1</span> Business Verification
        </div>
        <div className={styles["progress-line"]}>
          <span className={styles.progreeinsid}></span>
        </div>
        <div className={styles.step}>
          <span>2</span> Seller Profile
        </div>
      </div>

      <h1 className={styles["bv-title"]}>Verify Your Business</h1>
      <p className={styles["bv-subtitle"]}>
        Please provide your business details to get started
      </p>

      {error && <p className={styles.errorText}>{error}</p>}

      <form className={styles["bv-form"]} onSubmit={handleSubmit}>
        <label>GST Number</label>
        <input
          type="text"
          name="gstNumber"
          placeholder="22AAAAA0000A1Z5"
          className={styles["bv-input"]}
          value={formData.gstNumber}
          onChange={handleChange}
        />

        <label>PAN Number</label>
        <input
          type="text"
          name="panNumber"
          placeholder="ABCDE1234F"
          className={styles["bv-input"]}
          value={formData.panNumber}
          onChange={handleChange}
        />

        <label>Business Name</label>
        <input
          type="text"
          name="businessName"
          placeholder="Enter your registered business name"
          className={styles["bv-input"]}
          value={formData.businessName}
          onChange={handleChange}
        />

        <label>Upload Documents</label>
        <div className={styles["upload-section"]}>
          <div className={styles["upload-box"]}>
            <IoCloudUploadOutline className={styles["upload-icon"]} />
            <p>GST Certificate</p>
            <span>
              {formData.gstFile ? formData.gstFile.name : "PDF, JPG, PNG (Max 5MB)"}
            </span>
            <input
              type="file"
              name="gstFile"
              accept=".pdf,.jpg,.png"
              className={styles["file-input"]}
              onChange={handleFileChange}
            />
          </div>

          <div className={styles["upload-box"]}>
            <IoCloudUploadOutline className={styles["upload-icon"]} />
            <p>PAN Card</p>
            <span>
              {formData.panFile ? formData.panFile.name : "PDF, JPG, PNG (Max 5MB)"}
            </span>
            <input
              type="file"
              name="panFile"
              accept=".pdf,.jpg,.png"
              className={styles["file-input"]}
              onChange={handleFileChange}
            />
          </div>
        </div>

        <button type="submit" className={styles["continue-btn"]}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default BusinessVerification;