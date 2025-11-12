// src/pages/Login.jsx
import React, { useState } from "react";
import image5 from "../assets/image 5.svg";
import { MdOutlineEmail, MdPhone, MdLockOutline } from "react-icons/md";
import { RiGoogleLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Signuppage.module.css"; // Reuses same styles as Loginpage

const Login = () => {
  const [mode, setMode] = useState("email"); // "email" or "phone"
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [isOtpMode, setIsOtpMode] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => setInput(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    setError("");

    if (!input) {
      setError("Please enter your email or phone number");
      return;
    }

    if (!isOtpMode && !password) {
      setError("Password is required");
      return;
    }

    try {
      let endpoint = "http://localhost:5000/api/users/login";
      let payload = {};

      if (isOtpMode) {
        // Simulate OTP send
        alert(`OTP sent to ${input}`);
        setIsOtpMode(false); // In real app: show OTP input
        return;
      } else {
        payload = mode === "email" ? { email: input, password } : { phone: input, password };
      }

      const res = await axios.post(endpoint, payload);
      const { token, role } = res.data.data;

      localStorage.setItem("token", token);

      // Role-based redirect
      if (role === "seller") {
        navigate("/dashboard");
      } else if (role === "manufacturer") {
        navigate("/manufacturer-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* LEFT SIDE - Same as Register */}
      <div className={styles.leftBg} style={{ backgroundImage: `url(${image5})` }}>
        <div className={styles.textOverlay}>
          <h2>Welcome Back</h2>
          <p>Log in to continue selling and growing your business</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.rightForm}>
        <div className={styles.form}>
          <h2>Login to Your Account</h2>
          <p>Enter your details to access your dashboard</p>

          {error && <p className={styles.errorText}>{error}</p>}

          {/* Toggle: Email / Phone */}
          <div className={styles.toggleTabs}>
            <span
              className={mode === "email" ? styles.active : ""}
              onClick={() => setMode("email")}
            >
              Email
            </span>
            <span
              className={mode === "phone" ? styles.active : ""}
              onClick={() => setMode("phone")}
            >
              Phone
            </span>
          </div>

          {/* Input Field */}
          <div className={styles.inputArea}>
            {mode === "email" ? (
              <div className={`${styles.inputBox} ${styles.animateSlide}`}>
                <MdOutlineEmail className={styles.icon} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={input}
                  onChange={handleInput}
                />
              </div>
            ) : (
              <div className={`${styles.inputBox} ${styles.animateSlide}`}>
                <MdPhone className={styles.icon} />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={input}
                  onChange={handleInput}
                />
              </div>
            )}
          </div>

          {/* Password Field (only in password mode) */}
          {!isOtpMode && (
            <div className={styles.inputArea}>
              <div className={`${styles.inputBox} ${styles.animateSlide}`}>
                <MdLockOutline className={styles.icon} />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button className={styles.otpBtn} onClick={handleSubmit}>
            {isOtpMode ? "Verify OTP" : "Login"}
          </button>

          {/* OTP Toggle */}
          <p className={styles.forgotText}>
            <span
              onClick={() => setIsOtpMode(!isOtpMode)}
              style={{ color: "#007bff", cursor: "pointer" }}
            >
              {isOtpMode ? "Use Password Instead" : "Login with OTP"}
            </span>
          </p>

          <div className={styles.divider}>OR</div>

          <button className={styles.googleBtn}>
            <RiGoogleLine /> Continue with Google
          </button>

          <button className={styles.facebookBtn}>
            <FaFacebook /> Continue with Facebook
          </button>

          <p className={styles.loginText}>
            Don’t have an account?{" "}
            <span
              className={styles.loginLink}
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;