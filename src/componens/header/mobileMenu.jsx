import React from 'react';
import styles from './mobileMenu.module.css';

export default function MobileMenu({ onClose }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.menuOverlay}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg width="24px" height="24px">
            <use href="./images/icons.svg#close-icon"></use>
          </svg>
        </button>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li><a href="./index.html" className={styles.link}>Home</a></li>
            <li><a href="#features" className={styles.link}>Features</a></li>
            <li><a href="#blogs" className={styles.link}>Blogs</a></li>
            <li><a href="#testimonials" className={styles.link}>Testimonials</a></li>
          </ul>
          <button className={styles.contactButton}>Contact us</button>
        </nav>
      </div>
    </div>
  );
}
