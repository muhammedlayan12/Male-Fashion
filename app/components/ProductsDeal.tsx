"use client"


import { useEffect, useState } from 'react';
import styles from '../styles/ProductsDeal.module.css';
import Image from 'next/image';
import DealImg from '../images/product-sale.png';

function ProductsDeal() {
  // Set the target date for the countdown
  const targetDate = new Date('2024-12-31T23:59:59').getTime(); // Set your desired date here

  // State variables for days, hours, minutes, and seconds
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown state
      setCountdown({ days, hours, minutes, seconds });

      // Clear the interval when countdown is finished
      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <section className={styles.Deals}>
        <div className={styles.dealsName}>
          <h2>Clothings Hot</h2>
          <h2 className={styles.active}>Bags Collection</h2>
          <h2>Hand Bags</h2>
        </div>
        <div className={styles.dealImg}>
          <Image src={DealImg} alt="" />
          <div className={styles.tag}>
            <h6>Sale Of</h6>
            <span>$29.99</span>
          </div>
        </div>

        <div className={styles.content}>
          <span>Deal Of The Month</span>
          <h1>Multi-pocket<br />Chest Bag Black</h1>
          <div className={styles.countdown}>
            <div className={styles.cdItem}>
              <span>{countdown.days}</span>
              <p>Days</p>
            </div>
            <h6>:</h6>
            <div className={styles.cdItem}>
              <span>{countdown.hours}</span>
              <p>Hours</p>
            </div>
            <h6>:</h6>
            <div className={styles.cdItem}>
              <span>{countdown.minutes}</span>
              <p>Minutes</p>
            </div>
            <h6>:</h6>
            <div className={styles.cdItem}>
              <span>{countdown.seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
}

export default ProductsDeal;
