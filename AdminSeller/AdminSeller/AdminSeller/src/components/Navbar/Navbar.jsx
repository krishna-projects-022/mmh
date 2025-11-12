import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MMH</div>

      <ul className={styles.navLinks}>
        <li className={location.pathname === "/dashboard" ? styles.active : ""}>
          <Link to="/dashboard">Seller Dashboard</Link>
        </li>
        <li className={location.pathname === "/list-products" ? styles.active : ""}>
          <Link to="/list-products">List Your Products</Link>
        </li>
        <li className={location.pathname === "/orders" ? styles.active : ""}>
          <Link to="/orders">Orders</Link>
        </li>
        <li className={location.pathname === "/contact" ? styles.active : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        
      </ul>

      <div className={styles.avatar}></div>
    </nav>
  );
};

export default Navbar;
