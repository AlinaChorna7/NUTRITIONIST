import '../css/header.css';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функція для відкриття/закриття меню
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    // Заборона прокрутки на мобільних, коли меню відкрите
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className="header">
      {/* Загальна частина хедера */}
      <div className="header-container">
        <div className="header-logo">
          <svg width="34px" height="34px" className="header-svg">
            <use href="./images/icons.svg#logo"></use>
          </svg>
          <h2>Nutritionist</h2>
        </div>
        {/* Меню для планшетів/десктопів */}
        <nav className="header-nav">
          <ul className="header-menu">
            <li className="header-menu-item">
              <a href="./index.html" className="head-nav">Home</a>
            </li>
            <li className="header-menu-item">
              <a href="#features" className="head-nav">Feature</a>
            </li>
            <li className="header-menu-item">
              <a href="#blogs" className="head-nav">Blogs</a>
            </li>
            <li className="header-menu-item">
              <a href="#Testimonials" className="head-nav">Testimonials</a>
            </li>
          </ul>
          <button className="header-button">Contact us</button>
        </nav>

        {/* Кнопка меню для мобільних */}
        <button
          type="button"
          className="js-open-menu header-menu-button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="34px" height="34px" className="header-svg">
            <use href="./images/icons.svg#menu-icon"></use>
          </svg>
        </button>
      </div>

      {/* Мобільне меню */}
      {isMenuOpen && (
        <div className="backdrop js-menu-container" id="mobile-menu">
          <div className="menu-overlay">
            <button
              className="js-close-menu mobile-close-btn"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg width="24px" height="24px" className="header-svg">
                <use href="./images/icons.svg#close-icon"></use>
              </svg>
            </button>
            <nav className="mobile-nav">
              <ul className="mobile-menu">
                <li><a href="./index.html" className="mobile-nav-link">Home</a></li>
                <li><a href="#features" className="mobile-nav-link">Feature</a></li>
                <li><a href="#blogs" className="mobile-nav-link">Blogs</a></li>
                <li><a href="#Testimonials" className="mobile-nav-link">Testimonials</a></li>
              </ul>
              <button className="header-button mobile-contact-btn">Contact us</button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
