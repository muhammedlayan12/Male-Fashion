"use client"




import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
// import heroImg from '/app/images/hero/hero.jpg';
import styles from '../styles/Hero.module.css';

function Hero() {


  const AutoScroll = () => {
    window.scrollTo({
      top: 2200,
      behavior:'smooth'
    });
  }


  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImg}>
          <Image src='https://themewagon.github.io/cozastore/images/slide-03.jpg' alt="hero-image" width={1750}  height={800} />
        </div>
        <div className={styles.img1Content}>
          <span>Summer Collection</span>
          <h2>Fall-Winter <br /> Collection 2023</h2>
          <h6>
            Embrace the chill of the season with our Fall-Winter Collection 2023, <br />
            featuring luxurious fabrics and timeless silhouettes.
          </h6>
          <button onClick={AutoScroll}>Shop Now &rarr;</button>
        </div>
        {/* <div className={styles.icons}>
        <i className="fa-solid fa-facebook"></i>
        <i className="fa-solid fa-instagram"></i>
        </div> */}
      </section>
    </div>
  );
}

export default Hero;
