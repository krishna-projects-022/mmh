import React, { useState } from "react";
import styles from "./WithdrawFunds.module.css";
import { FaArrowLeft, FaRupeeSign, FaWallet, FaPaperPlane, FaRedoAlt } from "react-icons/fa";

const WithdrawFunds = () => {
  const [amount, setAmount] = useState("");

  const handlePreset = (val) => setAmount(val);

  const requests = [
    { id: 1, amount: "₹8,500", date: "Dec 15, 2024", time: "2:30 PM", status: "Approved" },
    { id: 2, amount: "₹8,500", date: "Dec 15, 2024", time: "2:30 PM", status: "Pending" },
    { id: 3, amount: "₹8,500", date: "Dec 15, 2024", time: "2:30 PM", status: "Denied" },
    { id: 4, amount: "₹8,500", date: "Dec 15, 2024", time: "2:30 PM", status: "Approved" },
  ];

  return (
    <>
     <div className={styles.backRow}>
        <FaArrowLeft />
        <span>Back</span>
      </div>
    <div className={styles.container}>
     

      <h2 className={styles.title}>
        <FaWallet className={styles.iconOrange} /> Withdraw Funds
      </h2>
      <p className={styles.subtitle}>Manage your earnings and request withdrawals</p>

      <div className={styles.mainRow}>
        {/* Available Balance */}
        <div className={styles.balanceCard}>
          <div className={styles.balanceIcon}>
            <FaRupeeSign />
          </div>
          <div>
            <p className={styles.balanceLabel}>Available Balance</p>
            <p className={styles.balanceAmount}>₹24,999</p>
            <p className={styles.balanceChange}>+₹22,500 this month</p>
          </div>
        </div>

        {/* Request Withdrawal */}
        <div className={styles.withdrawCard}>
          <h3 className={styles.cardTitle}>Request Withdrawal</h3>
          <p className={styles.inputLabel}>Enter Amount</p>

          <div className={styles.inputWrapper}>
            <FaRupeeSign className={styles.inputIcon} />
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={styles.input}
            />
          </div>
          <p className={styles.minText}>Minimum withdrawal amount: ₹500</p>

          <div className={styles.presetRow}>
            <button onClick={() => handlePreset("1000")}>₹1,000</button>
            <button onClick={() => handlePreset("5000")}>₹5,000</button>
            <button onClick={() => handlePreset("24999")}>All</button>
          </div>

          <button className={styles.sendBtn}>
            <FaPaperPlane /> Send Request
          </button>
        </div>
      </div>

      {/* Recent Requests */}
      <div className={styles.recentCard}>
        <div className={styles.recentHeader}>
          <h3>
            <FaRedoAlt className={styles.iconOrange} /> Recent Requests
          </h3>
          <span className={styles.viewAll}>View All</span>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td>{req.amount}</td>
                <td>
                  {req.date}
                  <br />
                  <span className={styles.time}>{req.time}</span>
                </td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${
                      req.status === "Approved"
                        ? styles.approved
                        : req.status === "Pending"
                        ? styles.pending
                        : styles.denied
                    }`}
                  >
                    {req.status === "Approved" && "✔"}{" "}
                    {req.status === "Pending" && "•"}{" "}
                    {req.status === "Denied" && "✖"} {req.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default WithdrawFunds;
