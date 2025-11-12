import React from 'react';
import styles from './ReturnPolicy.module.css';
import { FaRoute } from "react-icons/fa";

import {
  FaExclamationTriangle,
  FaExchangeAlt,
  FaTimesCircle,
  FaAppleAlt,
  FaBriefcaseMedical,
  FaTshirt,
  FaGift,
  FaTruck,
  FaSearch,
  FaWallet,
  FaUndo
} from 'react-icons/fa';

const ReturnPolicy = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Return & Refund Policy</h1>
        <p className={styles.subtitle}>
          Easy returns and hassle-free refunds for your peace of mind
        </p>
      </div>

      {/* Main Card */}
      <div className={styles.card}>
        {/* Return Eligibility */}
        <section>
          <h2 className={styles.sectionTitle}>Return Eligibility</h2>
          <div className={styles.badgeRow}>
            <div className={`${styles.badge} ${styles.orange}`}>
              <FaExclamationTriangle /> Damaged Items
            </div>
            <div className={`${styles.badge} ${styles.blue}`}>
              <FaExchangeAlt /> Wrong Item
            </div>
            <div className={`${styles.badge} ${styles.red}`}>
              <FaTimesCircle /> Defective Product
            </div>
          </div>
        </section>

        {/* Refund Process */}
        <section>
            <div className={styles.refund}>
                <div className={styles.iconpurplestyle}><FaRoute className={styles.iconPurple} /></div>
                 <h2 className={styles.sectionTitle}> Refund Process</h2>
            </div>
          <div className={styles.timeline}>
            <div className={styles.timelineStep}>
              
                <div className={styles.iconstyletruck}><FaTruck className={styles.iconBlue} /></div>
              <div>
                <p className={styles.stepTitle}>Pickup</p>
                <p className={styles.stepDesc}>Free pickup from your location</p>
              </div>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.iconYellowstyle}>
                <FaSearch className={styles.iconYellow} />
              </div>
              <div>
                <p className={styles.stepTitle}>Inspection</p>
                <p className={styles.stepDesc}>Quality check at our facility</p>
              </div>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.iconGreenstyle}><FaWallet className={styles.iconGreen} /></div>
              <div>
                <p className={styles.stepTitle}>Refund</p>
                <p className={styles.stepDesc}>Money back to wallet/bank</p>
              </div>
            </div>
          </div>
        </section>

        {/* Non-Returnable Items */}
        <section>
          <h2 className={styles.sectionTitle}>Non-Returnable Items</h2>
          <div className={styles.badgeRow}>
            <div className={`${styles.badge} ${styles.redLight}`}>
              <FaAppleAlt /> Groceries
            </div>
            <div className={`${styles.badge} ${styles.redLight}`}>
              <FaBriefcaseMedical /> Medicines
            </div>
            <div className={`${styles.badge} ${styles.redLight}`}>
              <FaTshirt /> Innerwear
            </div>
            <div className={`${styles.badge} ${styles.redLight}`}>
              <FaGift /> Perishables
            </div>
          </div>
        </section>
      </div>

      {/* Request Return */}
      <div className={styles.footerCard}>
        <h3 className={styles.footerTitle}>Need to Return an Item?</h3>
        <p className={styles.footerDesc}>
          Start your return request in just a few clicks
        </p>
        <button className={styles.button}>
          <FaUndo /> Request Return
        </button>
      </div>
    </div>
  );
};

export default ReturnPolicy;
