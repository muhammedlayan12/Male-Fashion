import styles from '../styles/Banner.module.css';
import Image from "next/image";
import BannerImage1 from "../images/banner/slide-01.jpg";
import BannerImage2 from "../images/banner/banner-02.jpg";
import BannerImage3 from "../images/banner/banner-03.jpg";

const Banner: React.FC = () => {
  return (
    <div>
      <section className={styles.banner}>
        <div className={styles.product}>
          <Image
            src={BannerImage1}
            alt="Banner Image 1"
          />
          <div className={styles.content}>
            <h2>Woman</h2>
            <span>Spring 2018</span>
          </div>
          <h6 className={styles["shop-now"]}>Shop Now</h6>
        </div>
        <div className={styles.product}>
          <Image
            src={BannerImage2}
            alt="Banner Image 2"
          />
          <div className={styles.content}>
            <h2>Man</h2>
            <span>Winter 2022</span>
          </div>
          <h6 className={styles["shop-now"]}>Shop Now</h6>
        </div>
        <div className={styles.product}>
          <Image
            src={BannerImage3}
            alt="Banner Image 3"
          />
          <div className={styles.content}>
            <h2>Accessories</h2>
            <span>New Trend</span>
          </div>
          <h6 className={styles["shop-now"]}>Shop Now</h6>
        </div>
      </section>
    </div>
  );
};

export default Banner;
