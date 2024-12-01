import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoHeader}>
          <h2 className={styles.HeaderTitle}>Nutritionist</h2>
        </div>

        {/* Навігація для великих екранів */}
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#blogs">Blogs</a>
          <a href="#testemonials">Testimonials</a>
          <a href="#features">Features</a>
        </nav>

        {/* Кнопка для відкриття мобільного меню */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          <svg width="23px" height="23px" className={styles.menuIcon}>
            <use href="/images/icons.svg#menu" />
          </svg>
        </button>
      </header>

      {/* Мобільне меню */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.open : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={toggleMenu}
        >
          <svg width="23px" height="23px" className={styles.menuIcon}>
            <use href="/images/icons.svg#close-menu" />
          </svg>
        </button>
        <nav>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#blogs" onClick={toggleMenu}>
            Blogs
          </a>
          <a href="#testemonials" onClick={toggleMenu}>
            Testimonials
          </a>
          <a href="#features" onClick={toggleMenu}>
            Features
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
