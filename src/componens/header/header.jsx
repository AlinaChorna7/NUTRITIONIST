import { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoHeader}>
        <svg width="34px" height="34px" className="logo-header" style={{ fill: "#cbea7b" }} >
          <use href="/images/icons.svg#icon-logo"></use>
        </svg>
          <h2 className={styles.HeaderTitle}>Nutritionist</h2>
        </div>

        {/* Навігація для великих екранів */}
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#blogs">Blogs</a>
          <a href="#testemonials">Testimonials</a>
          
        </nav>

        {/* Кнопка для відкриття мобільного меню */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          <svg width="23px" height="23px" className={styles.menuIcon}>
            <use href="/images/icons.svg#icon-menu" />
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
          <svg width="40px" height="40px" className={styles.closeHeader}>
            <use href="/images/icons.svg#icon-x-mark" />
          </svg>
        </button>
        <nav>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#features" onClick={toggleMenu}>
            Features
          </a>
          <a href="#blogs" onClick={toggleMenu}>
            Blogs
          </a>
          <a href="#testemonials" onClick={toggleMenu}>
            Testimonials
          </a>
    
        </nav>
      </div>
    </>
  );
};

export default Header;
