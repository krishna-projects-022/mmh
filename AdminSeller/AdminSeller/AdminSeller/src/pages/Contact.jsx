import React from "react";
import styles from "./Contact.module.css";
import { FaPaperPlane, FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";
import contact from '.././assets/Contact.png'

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.header}>
        <div className={styles.iconCircle}>
          <FaUserShield size={24} color="#fff" />
        </div>
        <div>
          <h2 className={styles.title}>Contact Request Form</h2>
          <p className={styles.subtitle}>
            Fill out the details below to send your request
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Left Image Section */}
        <div className={styles.imageSection}>
          <img
            src={contact} 
            alt="Support Representative"
            className={styles.supportImage}
          />
        </div>

        {/* Right Form Section */}
        <div className={styles.formSection}>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Category Name</label>
              <input type="text" placeholder="Type category" />
            </div>

            <div className={styles.inputGroup}>
              <label>Contact Information</label>
              <div className={styles.inputWithIcon}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="Enter your email or phone number"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Description</label>
              <textarea
                rows="4"
                placeholder="Please describe your request in detail..."
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <FaPaperPlane className={styles.btnIcon} /> Send Request
            </button>
          </form>

          {/* Info Section */}
          <div className={styles.infoRow}>
            <div className={styles.infoBox}>
              <h4>Quick Response</h4>
              <p>Within 2 hours</p>
            </div>
            <div className={styles.infoBox}>
              <h4>Expert Support</h4>
              <p>Dedicated team</p>
            </div>
            <div className={styles.infoBox}>
              <h4>Secure</h4>
              <p>Encrypted data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
