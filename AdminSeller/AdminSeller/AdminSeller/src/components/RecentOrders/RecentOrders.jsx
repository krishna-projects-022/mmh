import React from "react";
import styles from "./RecentOrders.module.css";

const orders = [
  {
    id: "#OD1234",
    customer: "John Carter",
    product: "Wireless Headphones",
    date: "12 Oct 2025",
    amount: "₹2,499",
    status: "Delivered",
  },
  {
    id: "#OD1235",
    customer: "Sophie Turner",
    product: "Smart Watch",
    date: "11 Oct 2025",
    amount: "₹4,799",
    status: "Pending",
  },
  {
    id: "#OD1236",
    customer: "David Warner",
    product: "Bluetooth Speaker",
    date: "10 Oct 2025",
    amount: "₹1,999",
    status: "Cancelled",
  },
  {
    id: "#OD1237",
    customer: "Olivia Brown",
    product: "Running Shoes",
    date: "09 Oct 2025",
    amount: "₹3,499",
    status: "Delivered",
  },
];

const RecentOrders = () => {
  return (
    <div className={styles.recentOrders}>
      <div className={styles.header}>
        <h4>Recent Orders</h4>
        <span className={styles.viewAll}>View All</span>
      </div>

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.headRow}`}>
          <span>Order ID</span>
          <span>Customer</span>
          <span>Product</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {orders.map((order, i) => (
          <div key={i} className={styles.row}>
            <span>{order.id}</span>
            <span>{order.customer}</span>
            <span>{order.product}</span>
            <span>{order.date}</span>
            <span>{order.amount}</span>
            <span
              className={`${styles.status} ${
                order.status === "Delivered"
                  ? styles.delivered
                  : order.status === "Pending"
                  ? styles.pending
                  : styles.cancelled
              }`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
