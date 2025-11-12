import React, { useState } from "react";
import styles from "./Order.module.css";
import { FaFilter, FaEdit, FaTrash } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

const ordersData = [
  {
    id: "#12345",
    customer: "Sarah Johnson",
    product: "Wireless Headphones",
    date: "Jan 15, 2024",
    status: "Delivered",
    img: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: "#12346",
    customer: "Michael Smith",
    product: "Smart Watch",
    date: "Jan 17, 2024",
    status: "Pending",
    img: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    avatar: "https://i.pravatar.cc/40?img=8",
  },
  {
    id: "#12347",
    customer: "Emma Davis",
    product: "Bluetooth Speaker",
    date: "Jan 20, 2024",
    status: "Return Approved",
    img: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

const Order = () => {
  const [activeTab, setActiveTab] = useState("All Orders");
  const navigate = useNavigate(); // ✅ initialize

  const tabs = [
    "All Orders",
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return styles.statusDelivered;
      case "pending":
        return styles.statusPending;
      case "return approved":
        return styles.statusApproved;
      default:
        return styles.statusDefault;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <h1>Order Management</h1>
        <button className={styles.exportBtn}>Export</button>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabBtn} ${
              activeTab === tab ? styles.activeTab : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search + Filter */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by Order ID, Customer, or Product"
        />
        <button className={styles.filterBtn}>
          <FaFilter /> Filters
        </button>
      </div>

      {/* Orders Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.orderTable}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {ordersData.map((order, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{order.id}</td>

                {/* Customer */}
                <td>
                  <div className={styles.customerInfo}>
                    <img src={order.avatar} alt="avatar" />
                    <span>{order.customer}</span>
                  </div>
                </td>

                {/* Product */}
                <td>
                  <div className={styles.productInfo}>
                    <img src={order.img} alt="product" />
                    <span>{order.product}</span>
                  </div>
                </td>

                <td>{order.date}</td>
                <td>
                  <span className={`${styles.status} ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>

                <td className={styles.actions}>
                  {/* ✅ navigate to UpdateOrder on click */}
                  <FaEdit
                    className={styles.iconEdit}
                    onClick={() => navigate(`/update-order/${order.id.replace("#", "")}`)}
                  />
                  <FaFile />
                  <FaTrash className={styles.iconDelete} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
