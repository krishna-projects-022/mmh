import React from "react";
import styles from "./TopSellingProducts.module.css";
import headphone from "../../assets/hp.svg"; // ensure lowercase file name

const products = [
  {
    name: "Wireless Headphones",
    sold: 156,
    img: headphone,
  },
  {
    name: "Smart Watch",
    sold: 145,
    img: headphone,
  },
  {
    name: "Bluetooth Speaker",
    sold: 132,
    img: headphone,
  },
  
];

const TopSellingProducts = () => (
  <div className={styles.topSelling}>
    <div className={styles.header}>
      <h4 className={styles.title}>Top Selling Products</h4>
     
    </div>

    <ul className={styles.list}>
      {products.map((p, i) => (
        <li key={i} className={styles.item}>
          <div className={styles.left}>
            <img src={p.img} alt={p.name} className={styles.image} />
            <span className={styles.name}>{p.name}</span>
          </div>

          <span className={styles.sold}>{p.sold} sold</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TopSellingProducts;
