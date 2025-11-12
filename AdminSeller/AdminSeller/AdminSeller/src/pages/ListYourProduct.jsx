import React, { useState } from "react";
import styles from "../pages/ListYourProducts.module.css";
import ProductTable from "../components/ProductTable";
import SearchFilterBar from "../components/SearchBarFilter";
import { useNavigate } from "react-router-dom";

const ListYourProducts = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Headphones Pro", sku: "SKU-WH-001", price: 299.99, stock: "In Stock (45)", status: true },
    { id: 2, name: "Wireless Headphones Pro", sku: "SKU-WH-002", price: 299.99, stock: "Low Stock (4)", status: false },
    { id: 3, name: "Wireless Headphones Pro", sku: "SKU-WH-003", price: 299.99, stock: "Out of Stock (0)", status: true },
    { id: 4, name: "Wireless Headphones Pro", sku: "SKU-WH-004", price: 299.99, stock: "In Stock (45)", status: true },
  ]);

  return (
    <>
      <header className={styles.header}>
        <h2>My Products</h2>
        <button
          className={styles.addBtn}
          onClick={() => navigate("/add-product")}
        >
          + Add New Product
        </button>
      </header>

      <div className={styles.searchBg}>
        <SearchFilterBar />
      </div>

      <div className={styles.container}>
        <ProductTable
          products={products}
          setProducts={setProducts}
          onEdit={(product) => navigate(`/edit-product/${product.id}`, { state: product })} // ✅ navigate on edit
        />
      </div>
    </>
  );
};

export default ListYourProducts;
