import React from "react";
import styles from "./Invoice.module.css";
import { FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStore, FaUserCircle } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { HiPrinter } from "react-icons/hi";

const Invoice = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Order Invoice</h2>
        <div className={styles.orderInfo}>
          <p>Order ID: <span>#12345</span></p>
          <p>Date: <span>Aug 28, 2025</span></p>
          <p className={styles.statusRow}>
            Status:
            <FaCheckCircle className={styles.iconGreen} />
            <span className={styles.status}>Delivered</span>
          </p>
        </div>
      </div>

      {/* Seller & Buyer Info */}
      <div className={styles.infoRow}>
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <FaStore className={styles.iconOrange} />
            <h3>Seller Information</h3>
          </div>
          <p><strong>TechStore Electronics</strong><br />Premium Electronics Store</p>
          <p><FaMapMarkerAlt /> 123 Business District, Tech Park<br />Mumbai, Maharashtra 400001</p>
          <p><FaPhoneAlt /> +91 98765 43210<br /><FaEnvelope /> support@techstore.com</p>
          <p>GST: 27ABCDE1234F1Z5<br />PAN: ABCDE1234F</p>
        </div>

        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <FaUserCircle className={styles.iconOrange} />
            <h3>Buyer Information</h3>
          </div>
          <p><strong>Rajesh Kumar</strong><br />Customer</p>
          <p><FaMapMarkerAlt /> 456 Residential Area, Green Park<br />Delhi, Delhi 110016</p>
          <p><FaPhoneAlt /> +91 87654 32109<br /><FaEnvelope /> rajesh.kumar@email.com</p>
        </div>
      </div>

      {/* Product Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>MacBook Pro 14”</strong><br />
              <span className={styles.subtext}>M2 Chip, 512GB SSD</span>
            </td>
            <td>1</td>
            <td>₹1,99,900</td>
            <td>₹1,99,900</td>
          </tr>
        </tbody>
      </table>

      {/* Summary */}
      <div className={styles.summary}>
            <div>
                <h1 className={styles.summaryhead}>Order Summary</h1>
                <p>Subtotal:</p>
                <p>GST (18%):</p>
                <p>Shipping:</p>
                <hr className={styles.divider} />
                <h4>Grand Total:</h4>
            </div>

            <div className={styles.summaryValues}>
                <br />
                <p>₹2,33,700</p>
                <p>₹42,066</p>
                <p>Free</p>
                <hr className={styles.divider} />
                <h4 className={styles.total}>₹2,75,766</h4>
            </div>
        </div>

      {/* Payment */}
      <div className={styles.paymentBox}>
        <div className={styles.paymentLeft}>
          <MdPayment className={styles.iconOrange} />
          <p><strong>Payment Method:</strong> UPI - Google Pay</p>
        </div>
        <span className={styles.paid}>● Paid</span>
      </div>

      <p className={styles.footer}>Thank you for selling with us!</p>

      <button className={styles.printBtn}>
        <HiPrinter size={18} />
        <span>Print Invoice</span>
      </button>
    </div>
  );
};

export default Invoice;
