import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UpdateOrder.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";

const UpdateOrder = () => {
  const navigate = useNavigate(); // <-- initialize navigation

  return (
    <div className={styles.updateOrderPage}>
      <div className={styles.header}>
        <button
          className={styles.backBtn}
          onClick={() => navigate("/orders")} // <-- navigate to Order.jsx route
        >
          <FaArrowLeft />
        </button>
        <div>
          <h3>Update Order</h3>
          <p>Order #12345</p>
        </div>
      </div>

      <div className={styles.container}>
        {/* LEFT COLUMN */}
        <div className={styles.leftColumn}>
          {/* Customer Details */}
          <div className={styles.card}>
            <h3>Customer Details</h3>
            <div className={styles.detailRow}>
              <span>Customer Name</span>
              <p>John Smith</p>
            </div>
            <div className={styles.detailRow}>
              <span>Phone</span>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className={styles.detailRow}>
              <span>Email</span>
              <p>john.smith@email.com</p>
            </div>
            <div className={styles.detailRow}>
              <span>Delivery Address</span>
              <p>123 Main Street, Apt 4B, New York, NY 10001</p>
            </div>
          </div>

          {/* Ordered Products */}
          <div className={styles.card}>
            <h3>Ordered Products</h3>
            <div className={styles.productItem}>
              <div>
                <p className={styles.productName}>Wireless Headphones</p>
                <span>Qty: 2</span>
              </div>
              <div className={styles.priceInfo}>
                <span>$99.99</span>
                <p>$199.98</p>
              </div>
            </div>
            <div className={styles.total}>
              <strong>Total Amount</strong>
              <p>$224.97</p>
            </div>
          </div>

          {/* Additional Actions */}
          <div className={styles.card}>
            <h3>Additional Actions</h3>
            <textarea
              placeholder="Add internal notes (not visible to buyer)"
            ></textarea>
          </div>

          {/* Return Request */}
          <div className={styles.returnCard}>
            <div className={styles.returnHeader}>
            </div>
            <div className={styles.returnActions}>
             <div style={{display:"flex"}}>
               <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                alt="Return Request"
                className={styles.returnIcon}
              />
              <h3>Return Request</h3>
             </div>
              <div>
                <button className={styles.acceptBtn}>Accept</button>
              <button className={styles.denyBtn}>Deny</button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.rightColumn}>
          {/* Payment Status */}
          <div className={styles.card}>
            <h3>Payment Status</h3>
            <span className={styles.statusPaid}>● Paid</span>
          </div>

          {/* Order Status Update */}
          <div className={`${styles.card} ${styles.orderUpdate}`}>
            <h3>Order Status Update</h3>
            <div style={{backgroundColor:"#FFF1E8", padding:"10px"}}>
              <select style={{width:"100%", padding:"5px", borderRadius:"5px"}} defaultValue="Pending">
              <option>Pending</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
            <br />
            <label>Expected Delivery Date</label>
            <div className={styles.dateInput}>
              <MdOutlineCalendarToday />
              <input type="text" placeholder="mm/dd/yyyy" />
            </div>

            <div className={styles.radioGroup}>
              <label>
                <input type="radio" name="status" />
                Shipped
              </label>
              <br />
              <div>
                <label>
                <input type="radio" name="status" disabled />
                Delivered
              </label>
              </div>
            </div>
            </div>

          </div>
            <div className={styles.buttons}>
              <button className={styles.updateBtn}>Update Order</button>
              <button className={styles.cancelBtn}>Cancel</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrder;
