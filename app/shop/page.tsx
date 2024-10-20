"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './styles.module.css';
import Products from '../components/Products';

function Shop() {
  // Set default open states to true for some filters
  const [showCategories, setShowCategories] = useState(true);
  const [showBranding, setShowBranding] = useState(true);
  const [showColors, setShowColors] = useState(true);
  const [showFilterPrice, setShowFilterPrice] = useState(true);  // New filter price section
  const [showSize, setShowSize] = useState(false);

  return (
    <div>
      <Header />
      <Navbar />

      {/* Breadcrumb Section */}
      <div className={styles.breadCrumb}>
        <div className={styles.name}>Shop</div>
        <div className={styles.parent}>
          <a href="/">Home</a>
          <span className="fa-solid fa-chevron-right text-dark"></span>
          <span>Shop</span>
        </div>
      </div>

      {/* Filtering Options */}
      <div className={styles.filteringOption}>
        <div className={styles.first}>
          <input type="text" placeholder="Search...." />
          <button className='fa-solid fa-search'></button>
        </div>
        <span className={styles.result}>Showing 1–12 of 126 results</span>
        <div className={styles.second}>
          <span className={`${styles.sortPrice} sort-price`}>
            Sort By Price: <b className={styles.sortDropdown}>Low To High</b>
          </span>
          <div className={`${styles.dropdownOptions} dropdown-options`}>
            <ul>
              <li>$0 - $55</li>
              <li>$55 - $100</li>
              {/* <li>$100 - $200</li>
              <li>$200 - $300</li>
              <li>$300+</li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        {/* Sidebar with Filters */}
      <div className={styles.sideBar}>
        {/* Categories Section */}
        <div className={styles.sideItem}>
          <h4 onClick={() => setShowCategories(!showCategories)}>
            CATEGORIES <span className={`fa-solid ${showCategories ? "fa-chevron-up" : "fa-chevron-down"}`}></span>
          </h4>
          {showCategories && (
            <ul>
              <li>Bags (10)</li>
              <li>Kids (20)</li>
              <li>Courts (30)</li>
              <li>Jeans (40)</li>
              <li>Accessories (50)</li>
              <li>Shoes (60)</li>
            </ul>
          )}
        </div>

        {/* Branding Section */}
        <div className={styles.sideItem}>
          <h4 onClick={() => setShowBranding(!showBranding)}>
            BRANDING <span className={`fa-solid ${showBranding ? "fa-chevron-up" : "fa-chevron-down"}`}></span>
          </h4>
          {showBranding && (
            <ul>
              <li>Louis Vuitton</li>
              <li>Chanel</li>
              <li>Hermès</li>
              <li>Gucci</li>
              <li>Porsche</li>
            </ul>
          )}
        </div>

        {/* Colors Section */}
        <div className={styles.sideItem}>
          <h4 onClick={() => setShowColors(!showColors)}>
            COLORS <span className={`fa-solid ${showColors ? "fa-chevron-up" : "fa-chevron-down"}`}></span>
          </h4>
          {showColors && (
            <div className={styles.color}>
              <span style={{ backgroundColor: 'red' }}></span>
              <span style={{ backgroundColor: 'blue' }}></span>
              <span style={{ backgroundColor: 'green' }}></span>
              <span style={{ backgroundColor: 'yellow' }}></span>
              <span style={{ backgroundColor: 'grey' }}></span>
              <span style={{ backgroundColor: 'magenta' }}></span>
              {/* <span style={{ backgroundColor: 'black' }}></span>
              <span style={{ backgroundColor: 'aqua' }}></span>
              <span style={{ backgroundColor: 'orange' }}></span> */}

            </div>
          )}
        </div>

        {/* Filter by Price Section */}
        <div className={styles.sideItem}>
          <h4 onClick={() => setShowFilterPrice(!showFilterPrice)}>
            FILTER PRICE <span className={`fa-solid ${showFilterPrice ? "fa-chevron-up" : "fa-chevron-down"}`}></span>
          </h4>
          {showFilterPrice && (
            <div className={styles.priceOptions}>
              <ul>
                <li>$0 - $55</li>
                <li>$55 - $100</li>
                <li>$100 - $200</li>
                <li>$200 - $300</li>
                <li>$300+</li>
              </ul>
            </div>
          )}
        </div>

        {/* Size Section */}
        <div className={styles.sideItem}>
          <h4 onClick={() => setShowSize(!showSize)}>
            SIZE <span className={`fa-solid ${showSize ? "fa-chevron-up" : "fa-chevron-down"}`}></span>
          </h4>
          {showSize && (
            <div className={styles.size}>
              <button>XS</button>
              <button>MD</button>
              <button>SM</button>
              <button>LG</button>
              <button>XL</button>
              <button>2XL</button>
              <button>XXL</button>
              <button>3XL</button>
            </div>
          )}
        </div>
      </div>
      <Products/>
      </div>


      <Footer></Footer>
    </div>
  );
}

export default Shop;
