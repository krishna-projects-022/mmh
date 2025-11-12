import React from "react";
import styles from "./AddProductForm.module.css";

const AddProductForm = () => {
  return (
    <form className={styles.form}>
      <section className={styles.section}>
        <h3>Basic Information</h3>
        <h3>Category & Details</h3>
        <br />
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Category</label>
            <select><option>Select</option></select>
          </div>
          <div className={styles.inputGroup}>
            <label>Sub-category</label>
            <select><option>Select</option></select>
          </div>
        </div>
        <br />
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Brand</label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label>Tags</label>
            <input type="text" />
          </div>
        </div>
        <br />
    <hr style={{color:"grey"}} />
    <br />
    <br />
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Product Name</label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label>SKU / Product ID</label>
            <input type="text" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Product Description</label>
          <textarea rows="4" />
        </div>
      </section>

      <section className={styles.section}>
        <h3>Product Images</h3>
        <div className={styles.uploadBox}>
          <p>Drag & drop images here or click to upload</p>
          <p className={styles.hint}>PNG, JPG up to 5MB</p>
        </div>
        <br /><br />
      </section>
        <br /><br />

      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Price</label>
            <input type="number" placeholder="$" />
          </div>
          <br />
          <div className={styles.inputGroup}>
            <label>Discount Price (Optional)</label>
            <input type="number" />
          </div>
        </div>
    <br />
        <div className={styles.row}>
  <div className={styles.inputGroup}>
    <label>Stock Quantity</label>
    <input type="number" />
  </div>

  <div className={styles.inputGroup}>
    <label>Low Stock Alert</label>
    <div className={styles.toggleWrapper}>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
        <input type="text" size={4}/> <label htmlFor="">Units</label>
    </div>
  </div>
</div>
<div className={styles.row}>
  <div className={styles.statusGroup}>
    <label className={styles.statusLabel}>Product Status</label>
    <div className={styles.toggleWrapper}>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
      <span className={styles.statusText}>Active</span>
    </div>
  </div>
</div>


        <div className={styles.buttonRow}>
          <button type="submit" className={styles.saveBtn}>
            Save & Publish
          </button>
        </div>
      </section>
    </form>
  );
};

export default AddProductForm;
