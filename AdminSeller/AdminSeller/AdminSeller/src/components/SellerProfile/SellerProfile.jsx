import React, { useState } from "react";
import "./SellerProfile.css"; 

const SellerProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [name, setName] = useState("John Anderson");
  const [email, setEmail] = useState("john.anderson@techstore.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");

  return (
    <div className="container">
     
      <div className="profileSection">
        <button className="backBtn">← Back</button>
        <div className="profileCard">
          <div className="profileInfo">
            <div className="profileImgContainer">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="profileImg"
              />
              <span className="cameraIcon">📸</span>
            </div>
            <div>
              <h2>TechStore Solutions</h2>
              <p>John Anderson</p>
              <span>Seller since March 2022</span>
            </div>
          </div>
          <button className="editBtn">✏️ Edit Profile</button>
        </div>

        <div className="tabs">
          <button
            className={`tab ${activeTab === "personal" ? "active" : ""}`}
            onClick={() => setActiveTab("personal")}
          >
            Personal Info
          </button>
          <button
            className={`tab ${activeTab === "business" ? "active" : ""}`}
            onClick={() => setActiveTab("business")}
          >
            Business Info
          </button>
          <button
            className={`tab ${activeTab === "payment" ? "active" : ""}`}
            onClick={() => setActiveTab("payment")}
          >
            Payment
          </button>
          <button
            className={`tab ${activeTab === "preferences" ? "active" : ""}`}
            onClick={() => setActiveTab("preferences")}
          >
            Preferences
          </button>
        </div>

        {/* Tab Content */}
        <div className="tabContent">
          {activeTab === "personal" && (
            <div className="personalInfo">
              <h3>Personal Information</h3>
              <div className="form">
                <div>
                    <div className="formGroup">
                  <label>Seller Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label>Email Address</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div> 
                </div>
                <div>
                    <div className="formGroup">
                  <label>Phone Number</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label>Change Password</label>
                  <input type="text" className=""/>
                </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "business" && <p>Business Info Coming Soon...</p>}
          {activeTab === "payment" && <p>Payment Info Coming Soon...</p>}
          {activeTab === "preferences" && <p>Preferences Coming Soon...</p>}
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
