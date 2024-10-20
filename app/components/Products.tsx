"use client";

import { useState } from "react";
import styles from "../styles/Products.module.css";
import Image from "next/image";
import json from "../json/products.json";

function Products() {
    const [activeFilter, setActiveFilter] = useState('Best Sellers');
    const [isFading, setIsFading] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isOrderPopupVisible, setOrderPopupVisible] = useState(false); // State for order popup
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const handleActiveFilter = (filter: string) => {
        if (filter !== activeFilter) {
            setIsFading(true);
            setTimeout(() => {
                setActiveFilter(filter);
                setIsFading(false);
            }, 500);
        }
    };

    const openPopup = (product: any) => {
        setSelectedProduct(product);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
        setSelectedProduct(null);
    };

    const openPlaceOrder = () => {
        closePopup(); // Close the product popup
        setOrderPopupVisible(true); // Open the order confirmation popup
    };

    const closeOrderPopup = () => {
        setOrderPopupVisible(false); // Close the order confirmation popup
    };

    return (
        <div>
            <section className={styles.homePageProducts}>
                <div className={styles.filterOptions}>
                    <h2 
                        role="button" 
                        className={activeFilter === 'Best Sellers' ? styles.active : ''} 
                        onClick={() => handleActiveFilter("Best Sellers")}
                    >
                        Best Sellers
                    </h2>
                    <h2 
                        role="button" 
                        className={activeFilter === 'New Arrival' ? styles.active : ''} 
                        onClick={() => handleActiveFilter("New Arrival")}
                    >
                        New Arrival
                    </h2>
                    <h2 
                        role="button" 
                        className={activeFilter === 'Hot Sale' ? styles.active : ''} 
                        onClick={() => handleActiveFilter("Hot Sale")}
                    >
                        Hot Sale
                    </h2>
                </div>
                <div
                    className={`${styles.products} ${isFading ? styles['fade-out'] : styles['fade-in']}`} 
                    id='products'
                >
                    {json
                        .filter(product => {
                            if (activeFilter === "Hot Sale") {
                                return product.hot;
                            }
                            if (activeFilter === "New Arrival") {
                                return product.new;
                            }
                            return true;
                        })
                        .map((product, index) => (
                            <div key={index} className={styles.product}>
                                <Image 
                                    src={product.image} 
                                    alt={`${product.name} Image`}
                                    width={250}
                                    height={250}
                                    className={styles.productImage}
                                />
                                <div className={styles["outline-icon"]}>
                                    <i className="fa-regular fa-heart"></i>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.name}>
                                        <h5>{product.name}</h5>
                                        <h6 
                                            className={styles["add-to-cart"]}
                                            onClick={() => openPopup(product)}
                                        >
                                            +Add-To-Cart
                                        </h6>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: product.rating }} />
                                    <p>${product.price}</p>
                                    {product.new && (
                                        <span className={styles.new}>New</span>
                                    )}
                                    {product.hot && (
                                        <span className={styles.hot}>Hot</span>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            {isPopupVisible && selectedProduct && (
                <div className={styles.modalContainer} id="popup">
                    <section className={styles.addToCartPopup}>
                        <div className={styles.cut} onClick={closePopup}>&times;</div>
                        <div className={styles.items}>
                            <div className={styles.image}>
                                <Image src={selectedProduct.image} alt={selectedProduct.name} width={250} height={250} />
                            </div>
                            <div className={styles.content}>
                                <h3>{selectedProduct.name}</h3>
                                <span>${selectedProduct.price}</span>
                                <p>{selectedProduct.description}</p>
                                <div className={styles.quantity}>
                                    <span>-</span>
                                    <h6>1</h6>
                                    <span>+</span>
                                </div>
                                <button onClick={openPlaceOrder}>Buy Now</button>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Order Confirmation Popup */}
            {isOrderPopupVisible && (
                <div className={`${styles.modalContainer} order-popup`} id="order-popup">
                    <section className={styles.orderPopup}>
                        <div className={styles.cut} onClick={closeOrderPopup}>&times;</div>
                        <div className={styles.content}>
                            <h3>YOUR ORDER HAVE BEEN PLACED</h3>
                            <p>Thank you for purchasing! Your order has been placed.</p>
                            <button onClick={closeOrderPopup}>Close</button>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}

export default Products;
