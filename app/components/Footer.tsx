import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons'; // Fixed icon import
import logo from '../images/footer-logo.png';
import card1 from "../images/payment.png";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <Image src={logo} alt="Male Fashion" />
                    <p>
                        The customer is at the heart of our unique business model, which includes design.
                    </p>
                    <div className={styles.payment}>
                        <Image src={card1} alt="Payment Methods" />
                    </div>
                </div>
                <div>
                    <h3>SHOPPING</h3>
                    <ul>
                        <li><a href="#">Clothing Store</a></li>
                        <li><a href="#">Trending Shoes</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Sale</a></li>
                    </ul>
                </div>
                <div>
                    <h3>SUPPORT</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Return & Exchanges</a></li>
                    </ul>
                </div>
                <div>
                    <h3>NEWSLETTER</h3>
                    <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                    <div className={styles.newsletter}>
                        <input 
                            placeholder="Your email" 
                            type="email" 
                            aria-label="Email for newsletter subscription" 
                        />
                       
                    </div>
                </div>
            </div>
            <div className={styles['bottom-bar']}>
                <p>
                    Copyright © 2024 All rights reserved | This template is made with
                    <i className="fas fa-heart"></i>
                    by <a href="https://layan-portfolio.vercel.app/">Muhammad Layan</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
