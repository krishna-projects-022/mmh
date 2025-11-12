import React from "react";
import styles from "./Header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoWalletOutline } from "react-icons/io5";
import shoe1 from "../../assets/shoe.png";
import shoe2 from "../../assets/shoe.png"; // you can add more banners
import shoe3 from "../../assets/shoe.png";

const Header = () => {
  return (
    <div className={styles.header}>
      {/* 🖼️ Carousel Section */}
      <div className={styles.banner}>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className={styles.swiper}
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={shoe1} alt="Sale Banner 1" />
              <div className={styles.text}>
                <h2>SALE 40% OFF</h2>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slide}>
              <img src={shoe2} alt="Sale Banner 2" />
              <div className={styles.text}>
                <h2>BUY 1 GET 1 FREE</h2>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slide}>
              <img src={shoe3} alt="Sale Banner 3" />
              <div className={styles.text}>
                <h2>NEW COLLECTION</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 💰 Wallet Section */}
      <div className={styles.wallet}>
        <div>
          <IoWalletOutline style={{color:"orange", marginLeft:"10px", marginTop:"-20px"}} />
          <h4>Joe Dispenza</h4>
          <p>PAN Number</p>
        </div>
        <div>
          <h6>Available balance</h6>
          <div className={styles.amount}>₹24,999</div>
          <button className={styles.withdraw}>Withdraw</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
