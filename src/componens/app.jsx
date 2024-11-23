import React from 'react';
import styles from '../../index.css';
import Header from './header/header.jsx';
import MobileMenu from './header/mobileMenu.jsx';
import Blogs from './sections/blogs.jsx';
import Home from './sections/home.jsx';
import Features from './sections/features.jsx';
import Testemonials from './testemonials/testemonials.jsx';
import Footer from './sections/footer.jsx';


const App = () => {
    return (
      <div>
        <Header />
        <main>
          <div className={styles.container}>
            <Features />
            <Blogs />
          </div>
        </main>
        <Footer />
      </div>
    );
  };