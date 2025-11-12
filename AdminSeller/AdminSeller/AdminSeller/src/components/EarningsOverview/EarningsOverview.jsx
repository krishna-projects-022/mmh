import React from "react";
import styles from "./EarningsOverview.module.css";

const dataPoints = [
  { label: "Jan", value: 40 },
  { label: "Feb", value: 55 },
  { label: "Mar", value: 70 },
  { label: "Apr", value: 65 },
  { label: "May", value: 80 },
  { label: "Jun", value: 90 },
  { label: "Jul", value: 100 },
];

const maxValue = Math.max(...dataPoints.map((d) => d.value));

const EarningsOverview = () => {
  const points = dataPoints
    .map((point, idx) => {
      const x = idx * 40;
      const y = 100 - (point.value / maxValue) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <section className={styles.card}>
      {/* Header Section */}
      <div className={styles.header}>
        <div>
          <h3>Earnings Overview</h3>
          <p className={styles.subTitle}>Last 7 months performance</p>
        </div>

        
      </div>

      {/* Chart */}
      <div className={styles.chartWrapper}>
        <svg
          className={styles.chart}
          width="260"
          height="120"
          viewBox="0 0 240 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines */}
          {[20, 40, 60, 80].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="240"
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          ))}

          {/* Smooth line path */}
          <polyline
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            points={points}
          />

          {/* Data circles */}
          {dataPoints.map((point, idx) => {
            const x = idx * 40;
            const y = 100 - (point.value / maxValue) * 100;
            return (
              <circle
                key={idx}
                cx={x}
                cy={y}
                r="5"
                fill="#f97316"
                stroke="white"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>

      {/* Labels */}
      <div className={styles.labels}>
        {dataPoints.map((point, idx) => (
          <span key={idx} className={styles.label}>
            {point.label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default EarningsOverview;
