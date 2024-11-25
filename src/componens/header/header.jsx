import { useState } from "react";
import styles from "./Header.module.css";
import mobileStyles from "./MobileMenu.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
        <svg width="34px" height="34px" className={styles.logoIcon}>
            <use href="./images/icons.svg#logo"></use>
          </svg>
        </div>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
      </header>

      <div
        className={`${mobileStyles.mobileMenu} ${
          menuOpen ? mobileStyles.open : ""
        }`}
      >
        <button
          className={mobileStyles.closeButton}
          onClick={toggleMenu}
        >
          ✕
        </button>
        <nav>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Header;
