import React from "react";
import styles from "../pages/ListYourProducts.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import hp2 from "../assets/hp2.svg";

const ProductRow = ({ product, toggleStatus, onEdit }) => {
  const stockClass =
    product.stock.includes("Out")
      ? styles.outStock
      : product.stock.includes("Low")
      ? styles.lowStock
      : styles.inStock;

  return (
    <tr>
      <td>
        <div className={styles.productCell}>
          <img src={hp2} alt={product.name} className={styles.productImg} />
          <div>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.sku}>{product.sku}</div>
          </div>
        </div>
      </td>

      <td>${product.price.toFixed(2)}</td>

      <td>
        <span className={`${styles.stockTag} ${stockClass}`}>
          {product.stock}
        </span>
      </td>

      <td>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={product.status}
            onChange={() => toggleStatus(product.id)}
          />
          <span className={styles.slider}></span>
        </label>
      </td>

      <td className={styles.actions}>
        <FaEdit
          className={styles.icon}
          onClick={() => onEdit(product)} // ✅ handle edit click
          title="Edit Product"
        />
        <FaTrash className={styles.icon} title="Delete Product" />
      </td>
    </tr>
  );
};

export default ProductRow;
