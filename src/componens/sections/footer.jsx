


const Footer = ()=>{
return(
    <footer className="footer">
      <div className="footer-up">
      <div href="./index.html" className="footer-div">
        <svg width="34px" height="34px" className="header-svg">
          <use href="../../../images/icons.svg#logo"></use>
        </svg>
        <h2>Nutritionist</h2>
      </div>
      <div className="footer-menu_div">
        <ul className="footer-menu">
          <li className="foooter-menu-item">
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
      <div className="scroll-up">
      <button className="scroll-up-button">
        Go to Top <div className="scroll-up-icon">
          <svg width="24px" height="24px">
          <use href="../../../images/icons.svg#scroll-icon"></use>
        </svg>
      </div>
      </button>
      </div>
    </div>
    <div className="footer-down">
      <ul className="footer-list">
        <li className="footer-list-item">
          <svg width="24px" height="24px" className="footer-icon">
            <use href="../../../images/icons.svg#email" className="footer-icon-svg"></use>
          </svg> 
          <p className="footer-contact">hello@squareup.com</p>
        </li>
        <li className="footer-list-item">   <svg width="24px" height="24px" className="footer-icon">
          <use href="../../../images/icons.svg#phone" className="footer-icon-svg"></use>
        </svg> 
        <p className="footer-contact">+91 91813 23 2309</p></li>
        <li className="footer-list-item">  
           <svg width="24px" height="24px" className="footer-icon">
          <use href="../../../images/icons.svg#location" className="footer-icon-svg"></use>
        </svg> 
        <p className="footer-contact">Somewhere in the World</p>
      </li>
      </ul>
      <p className="footer-text">© 2023 Nutritionist. All rights reserved.</p>
    </div>
    </footer>

)
};