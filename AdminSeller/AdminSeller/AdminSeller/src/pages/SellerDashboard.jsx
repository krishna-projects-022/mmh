import React from "react";
import styles from "./SellerDashboard.module.css";
import Header from "../components/Header/Header";
import StartCard from "../components/StartCard/StartCard";
import EarningsOverview from "../components/EarningsOverview/EarningsOverview";
import TopSellingProducts from "../components/TopSelling/TopSelling";
import RecentOrders from "../components/RecentOrders/RecentOrders";

const SellerDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <StartCard />

      <div className={styles.aligmentSection}>
        <div className={styles.earningTopselling}>
            <EarningsOverview />
        <TopSellingProducts />
        </div>
        <div style={{marginTop:"-60px"}}>
          <RecentOrders  />
        </div>
      </div> 
    </div>
  );
};

export default SellerDashboard;
