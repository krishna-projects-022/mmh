import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./EditProduct.module.css";
import { FaUpload } from "react-icons/fa";
import sampleImg from "../../assets/hp2.svg";
import { IoIosArrowBack } from "react-icons/io";

const EditProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    sku: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    subcategory: "",
    lowStockAlert: false,
    lowStockValue: 0,
    status: true,
  });

  useEffect(() => {
    if (location.state) setProduct(location.state);
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated product:", product);
    navigate("/list-products");
  };

  return (
    <>
        <h2 className={styles.pageTitle}><IoIosArrowBack onClick={() => Navigate("/list-products")} /> Edit Product</h2>

        <div className={styles.pageWrapper}>
      <div className={styles.mainContent}>
        

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* BASIC INFO SECTION */}
          <section className={styles.section}>
            <h3>Basic Information</h3>

            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label>Product Name</label>
                <input
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                />
              </div>

              <div className={styles.formGroup}>
                <label>SKU / Product ID</label>
                <input
                  name="sku"
                  value={product.sku}
                  onChange={handleChange}
                  placeholder="Enter SKU or ID"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Product Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Write a short product description..."
                rows={4}
              />
            </div>

            {/* IMAGE UPLOAD */}
            <div className={styles.imageUpload}>
              <label>Product Images</label>
              <div className={styles.uploadBox}>
                <FaUpload className={styles.uploadIcon} />
                <p>
                  Drag & drop image files or <span>click to upload</span>
                </p>
                <small>PNG, JPG up to 5MB</small>
              </div>
            </div>
          </section>

          {/* PRICE FIELD SECTION */}
<section className={styles.priceField}>
  <div>
    <div className={styles.formGroup}>
      <label>Price</label>
      <input
        name="price"
        type="number"
        value={product.price}
        onChange={handleChange}
        placeholder="Enter price"
      />
    </div>

    <div className={styles.formGroup}>
      <label>Stock Quantity</label>
      <input
        name="stock"
        type="number"
        value={product.stock}
        onChange={handleChange}
        placeholder="Enter stock quantity"
      />
    </div>
  </div>

  <div>
    <div className={styles.formGroup}>
      <label>Discount Price (optional)</label>
      <input
        name="discount"
        type="number"
        value={product.discount || ""}
        onChange={handleChange}
        placeholder="Enter discount price"
      />
    </div>

    <div className={styles.inputGroup}>
      <label>Low Stock Alert</label>
      <div className={styles.toggleWrapper}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            name="lowStockAlert"
            checked={product.lowStockAlert}
            onChange={handleChange}
          />
          <span className={styles.slider}></span>
        </label>
        <input
          type="number"
          name="lowStockValue"
          value={product.lowStockValue}
          onChange={handleChange}
          className={styles.lowStockInput}
          disabled={!product.lowStockAlert}
        />
        <label>Units</label>
      </div>
    </div>
  </div>
</section>


          {/* CATEGORY & DETAILS SECTION */}
          <section className={styles.section}>
            <h3>Category & Details</h3>

            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label>Category</label>
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="electronics">Electronics</option>
                  <option value="accessories">Accessories</option>
                  <option value="fashion">Fashion</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Sub-category</label>
                <select
                  name="subcategory"
                  value={product.subcategory}
                  onChange={handleChange}
                >
                  <option value="">Select sub-category</option>
                  <option value="headphones">Headphones</option>
                  <option value="speakers">Speakers</option>
                </select>
              </div>
            </div>

            

          
            
            {/* ✅ PRODUCT STATUS */}
            <div className={styles.row}>
              <div className={styles.statusGroup}>
                <label className={styles.statusLabel}>Product Status</label>
                <div className={styles.toggleWrapper}>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      name="status"
                      checked={product.status}
                      onChange={handleChange}
                    />
                    <span className={styles.slider}></span>
                  </label>
                  <span className={styles.statusText}>
                    {product.status ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            </div>

            <button type="submit" className={styles.saveBtn}>
              Save Changes
            </button>
          </section>
        </form>
      </div>

      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.tipCard}>
          <h4>💡 Quick Tip</h4>
          <p>
            Provide a clear, detailed product description to attract more
            customers and boost conversions.
          </p>
        </div>

        <div className={styles.previewCard}>
          <h4>Live Preview</h4>
          <img src={sampleImg} alt="Preview" />
          <p>{product.name || "Product Name"}</p>
          <span>${product.price || "0.00"}</span>
        </div>
      </aside>
    </div>
    </>
  );
};

export default EditProduct;
