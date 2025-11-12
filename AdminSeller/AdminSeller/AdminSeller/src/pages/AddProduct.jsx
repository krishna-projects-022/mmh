import React from "react";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import styles from "./AddProduct.module.css";
import { IoIosArrowBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const AddProduct = () => {
const navigate = useNavigate();

  return (
    
   <>
   <p className={styles.title}>
  <IoIosArrowBack 
  className={styles.backIcon} 
  onClick={() => navigate("/list-products")} 
/>

  Add New Product
</p>
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <AddProductForm />
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.tipBox}>
          <h4>💡 Quick Tip</h4>
          <p>
            Use high-quality images for better visibility and increased sales
            conversion.
          </p>
        </div>

        <div className={styles.previewBox}>
          <h4>Live Preview</h4>
          <img
            src="https://via.placeholder.com/150"
            alt="Preview"
            className={styles.previewImg}
          />
          <p className={styles.previewTitle}>Premium Wireless Headphones</p>
          <p className={styles.previewPrice}>$299.99</p>
          <p className={styles.previewStock}>In Stock (45)</p>
        </div>
      </aside>
    </div>
   </>

  );
};

export default AddProduct;
