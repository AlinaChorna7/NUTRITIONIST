import React, { useState } from 'react';
import MobileMenu from './mobileMenu';
import styles from './header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <svg width="34px" height="34px" className={styles.logoIcon}>
            <use href="./images/icons.svg#logo"></use>
          </svg>
          <h2>Nutritionist</h2>
        </div>

        {/* Десктопна навігація */}
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li><a href="./index.html" className={styles.link}>Home</a></li>
            <li><a href="#features" className={styles.link}>Features</a></li>
            <li><a href="#blogs" className={styles.link}>Blogs</a></li>
            <li><a href="#testimonials" className={styles.link}>Testimonials</a></li>
          </ul>
          <button className={styles.contactButton}>Contact us</button>
        </nav>

        {/* Кнопка мобільного меню */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <svg width="34px" height="34px">
            <use href="./images/icons.svg#menu-icon"></use>
          </svg>
        </button>
      </div>

      {/* Мобільне меню */}
      {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
    </header>
  );
}
