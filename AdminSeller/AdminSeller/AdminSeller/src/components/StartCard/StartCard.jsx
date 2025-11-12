import React from "react";
import styles from "./StartCard.module.css";
import { MdHeadsetMic } from "react-icons/md";
import { FaBoxOpen, FaShoppingCart, FaUndoAlt } from "react-icons/fa";

const StartCard = () => {
  const statsData = [
    {
      icon: <FaBoxOpen />, // ✅ JSX directly
      title: "Total Products",
      value: "500",
      description: "Manage and showcase your full catalogue",
    },
    {
      icon: <FaShoppingCart />,
      title: "Orders Today",
      value: "12",
      description: "Track today’s confirmed sales instantly",
    },
    {
      icon: <MdHeadsetMic />,
      title: "Order Delivered",
      value: "42",
      description: "Orders successfully delivered",
    },
    {
      icon: <FaUndoAlt />,
      title: "Return Orders",
      value: "1600",
      description: "Returns processed this month",
    },
  ];

  return (
    <section className={styles.statsSection}>
      {statsData.map(({ icon, title, value, description }, idx) => (
        <div key={idx} className={styles.card}>
          <div>
            <h4>{title}</h4>
            <span>{description}</span>
            <p className={styles.value}>{value}</p>
          </div>
          <div className={styles.icon}>{icon}</div>
        </div>
      ))}
    </section>
  );
};

export default StartCard;
