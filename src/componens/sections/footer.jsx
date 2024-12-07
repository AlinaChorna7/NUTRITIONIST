import './footer.css';


const Footer = ()=>{
return(
    <footer className="footer">
      <div className="foot-container">
      <div className="footer-up">
      <div href="./index.html" className="footer-div">
      <div className='footer-logo'>
        <svg width="30px" height="30px" className="header-svg">
          <use href="../../../images/icons.svg#icon-logo"></use>
        </svg>
        <h2 className='footer-title'>Nutritionist</h2>
        </div>
        <div className="scroll-up-container">
  <button
    className="scroll-up-button"
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    }}
  >
    <span className="scroll-up-text">Go to Top</span>
    <svg width="24px" height="24px" className="scroll-up-icon">
      <use href="../../../images/icons.svg#icon-scrol"></use>
    </svg>
  </button>
</div>

      </div>
      <div className="footer-menu_div">
        <ul className="footer-menu">
          <li className="footer-menu-item">
            <a href="./index.html" className="footer-nav">Home</a>
          </li>
          <li className="footer-menu-item">
            <a href="#features" className="footer-nav">Feature</a>
          </li>
          <li className="footer-menu-item">
            <a href="#blogs" className="footer-nav">Blogs</a>
          </li>
          <li className="footer-menu-item">
            <a href="#Testimonials" className="footer-nav">Testimonials</a>
          </li> 
        </ul>
      </div>
    
    </div>
    <div className="footer-down">
    <ul className="footer-list">
  <li className="footer-list-item">
    <svg width="24px" height="24px" className="footer-icon">
      <use href="../../../images/icons.svg#icon-footer-email"></use>
    </svg>
    <a href="mailto:hello@squareup.com" className="footer-contact">hello@squareup.com</a>
  </li>
  <li className="footer-list-item">
    <svg width="24px" height="24px" className="footer-icon">
      <use href="../../../images/icons.svg#icon-footer-phone"></use>
    </svg>
    <a href="tel:+9191813232309" className="footer-contact">+91 91813 23 2309</a>
  </li>
  <li className="footer-list-item">
    <svg width="24px" height="24px" className="footer-icon">
      <use href="../../../images/icons.svg#icon-footer-loc"></use>
    </svg>
    <a 
      href="https://www.google.com/maps?q=Somewhere+in+the+World" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="footer-contact"
    >
      Somewhere in the World
    </a>
  </li>
</ul>
 <p className="footer-text">© 2023 Nutritionist. All rights reserved.</p>
    </div>
    </div>
    </footer>

)
};

export default Footer;