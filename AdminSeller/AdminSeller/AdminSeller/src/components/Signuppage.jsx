import React, { useState } from "react";
import image5 from "../assets/image 5.svg";
import { MdOutlineEmail } from "react-icons/md";
import { RiGoogleLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Signuppage.module.css";

const Signuppage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });

      const { token } = res.data.data;
      localStorage.setItem("token", token);

      // Go to Step 1
      navigate("/signup-step1");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* LEFT SIDE */}
      <div className={styles.leftBg} style={{ backgroundImage: `url(${image5})` }}>
        <div className={styles.textOverlay}>
          <h2>Start Selling Today</h2>
          <p>Join thousands of sellers growing their business on our platform</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.rightForm}>
        <div className={styles.form}>
          <h2>Create Your Seller Account</h2>
          <p>Start your journey as a seller today</p>

          {error && <p className={styles.errorText}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className={styles.inputArea}>
              <div className={`${styles.inputBox} ${styles.animateSlide}`}>
                <MdOutlineEmail className={styles.icon} />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className={`${styles.inputBox} ${styles.animateSlide}`}>
                <MdOutlineEmail className={styles.icon} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={`${styles.inputBox} ${styles.animateSlide}`}>
                <MdOutlineEmail className={styles.icon} />
                <input
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.otpBtn}>
              Register & Continue
            </button>
          </form>

          <div className={styles.divider}>OR</div>

          <button className={styles.googleBtn}>
            <RiGoogleLine /> Continue with Google
          </button>

          <button className={styles.facebookBtn}>
            <FaFacebook /> Continue with Facebook
          </button>

          <p className={styles.loginText}>
            Already have an account? <span className={styles.loginLink} onClick={() => navigate("/login")}>Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;