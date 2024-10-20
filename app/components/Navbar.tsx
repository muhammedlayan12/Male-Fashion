"use client"


import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/logo.png';  
import { useState } from 'react';

function Navbar() {


    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleSideMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const [isCartOpen,setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }


    return (
        <div>
            <nav className={styles.navbar}>
                {/*side menu navbar*/}
            <div className={styles.humburger} id='sideMenu' onClick={toggleSideMenu}>&#9776;</div>
                 <div className={`${styles.sideMenu} ${isMenuOpen ? styles.active:''}`}>
                    <div className={styles.cut} onClick={toggleSideMenu}>&times;</div>
                    <ul>
                        <li><Link onClick={toggleSideMenu} href='/'>Home</Link></li>
                        <li><Link onClick={toggleSideMenu} href='/shop'>Shop</Link></li>
                        <li><Link onClick={toggleSideMenu} href='/about'>About</Link></li>
                        <li><Link onClick={toggleSideMenu} href='/contact'>Contact</Link></li>
                    </ul>
                    </div>
                <div className={styles.name}>
                    <Image src={logo} alt="logo" width={180} />
                </div>
                <ul className={styles.navigation}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href='/shop'>Shop</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <div className={styles.icons}>
                    <i className="fa-solid fa-search"></i>
                    <i className={`${styles.shoppingCart} fa-solid fa-shopping-bag`} onClick={toggleCart}></i>
                </div>
                <div className={`${styles.cart} ${isCartOpen ? styles.active:''}`}>
                <div className={styles.cut} onClick={toggleCart}>&times;</div>
                <h2>Enjoy Your Shopping!</h2>

                
                
            </div>
            </nav>
        </div>
    );
}

export default Navbar;
