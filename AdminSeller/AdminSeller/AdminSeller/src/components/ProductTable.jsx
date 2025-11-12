import React from "react";
import ProductRow from "./ProductRow";
import styles from "../pages/ListYourProducts.module.css";

const ProductTable = ({ products, setProducts, onEdit }) => {
  const toggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: !p.status } : p))
    );
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <ProductRow
              key={p.id}
              product={p}
              toggleStatus={toggleStatus}
              onEdit={onEdit} // ✅ Pass down edit callback
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
