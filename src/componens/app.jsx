import React from 'react';
import  '../../index.css';
import Header from './header/header.jsx';

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
          <div className="container">
            <Home/>
            <Features />
            <Testemonials/>
            <Blogs />
          </div>
        </main>
        <Footer />
      </div>
    );
  };
  export default App;