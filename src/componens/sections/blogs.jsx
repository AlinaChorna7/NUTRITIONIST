import './blogs.css';


const Blogs = ()=>{
return(
    <div id="blogs" className="blogs">
    <div className="blogs-header">
      <h2 className="blogs-title">Our Blogs</h2>
      <p className="blogs-text">
        Our blog is a treasure trove of informative and engaging articles
        written by our team of nutritionists, dietitians, and wellness
        experts. Here's what you can expect from our blog.
      </p>
    </div>
    <ul className='blogs-list'>
      <li className='blogs-item'>
        <div className="blogs-box">
   
       <img
        src="../../../images/blogs-water.png"
        alt="woman drink water"
        className="blogs-photo"
      />
      <div className='blogs-text-container'>
      <h4 className="blogs-subtitle">Weight Loss</h4>
      <h3 className="blogs-box-title">
        <a
          href="https://www.drinkhydrant.com/blogs/news/6-facts-about-hydration-and-weight-loss#:~:text=6%20Ways%20Hydration%20Can%20Help%20With%20Weight%20Loss,we%20eat%2C%20helping%20us%20keep%20the%20calories%20down."
          target="_blank"
        >
          Benefits of Hydration for Weight Loss</a
        >
      </h3>

      <p className="blogs-p">
        Discover how staying hydrated can support your weight loss goals
        and improve overall health.
      </p>
      </div>
      <div className="blogs-author">
        <img
          src="../../../images/blogs-author-two.png"
          alt="female"
          className="blogs-author-photo"
        />
        <ul className="blogs-author-info">
          <li className="blogs-author-name">Emily Johnson</li>
          <li className="blogs-author-desc">23 May 2023</li>
        </ul>
      </div>
      </div>
    </li>
      <li className='blogs-item'>
         <div className="blogs-box">
      <img
        src="../../../images/blogs-choosing.jpg"
        alt="woman with apple and burger"
        className="blogs-photo"
      />
        <div className='blogs-text-container'>
      <h4 className="blogs-subtitle">Mindful Eating</h4>
      <h3 className="blogs-box-title">
        <a
          href="https://thewellnesssociety.org/how-to-improve-your-relationship-with-food/#:~:text=We%20hope%20these%20tips%20will%20help%20if%20you%27re,5%20Let%20go%20of%20the%20diet%20mindset.%20"
          target="_blank"
          >Cultivating a Healthy Relationship with Food</a
        >
      </h3>
      <p className="blogs-p">
        Learn how practicing mindful eating can help you develop a
        healthier relationship with food and improve your overall
        well-being.
      </p>
      </div>
      <div className="blogs-author">
        <img
          src="../../../images/blogs-author-three.png"
          alt="female"
          className="blogs-author-photo"
        />
        <ul className="blogs-author-info">
          <li className="blogs-author-name">Sarah Thompson</li>
          <li className="blogs-author-desc">3 June 2023</li>
        </ul>
      </div>
    </div>
</li>
      <li className='blogs-item'>    <div className="blogs-box">
      <img
        src="../../../images/blogs-two-woman.jpg"
        alt="two females with food in hands"
        className="blogs-photo"
      />
         <div className='blogs-text-container'>
      <h4 className="blogs-subtitle">Understanding Macronutrients</h4>
      <h3 className="blogs-box-title">
        <a
          href="https://www.medicalnewstoday.com/articles/what-are-macronutrients#:~:text=There%20are%20three%20main%20types%20of%20macronutrients%20%28macros%29%3A,disease%2C%20and%20allow%20the%20body%20to%20function%20correctly."
          target="_blank"
          >Carbohydrates, Proteins, and Fats</a
        >
      </h3>
      <p className="blogs-p">
        Get a comprehensive understanding of macronutrients and their role
        in your diet for optimal health and weight management.
      </p>
      </div>
      <div className="blogs-author">
        <img
          src="../../../images/blogs-author.png"
          alt="male"
          className="blogs-author-photo"
        />
        <ul className="blogs-author-info">
          <li className="blogs-author-name">Mark Wilson</li>
          <li className="blogs-author-desc">29 September 2023</li>
        </ul>
      </div>
    </div>
</li>
      <li className='blogs-item'> <div className="blogs-box">
      <img src="../../../images/blogs-food.jpg" alt="food" className="blogs-photo" />
      <div className='blogs-text-container'>
      <h4 className="blogs-subtitle">Healthy Snacks on the Go</h4>
      <h3 className="blogs-box-title">
        <a href="https://www.eatthis.com/grab-and-go/" target="_blank"
          >Quick and Nutritious Options</a
        >
      </h3>
      <p className="blogs-p">
        Explore a variety of convenient and healthy snack ideas to keep
        you fueled throughout the day.
      </p> </div>
      <div className="blogs-author">
        <img
          src="../../../images/blogs-author-four.png"
          alt="female"
          className="blogs-author-photo"
        />
        <ul className="blogs-author-info">
          <li className="blogs-author-name">Elisa Smith</li>
          <li className="blogs-author-desc">7 December 2023</li>
        </ul>
      </div>
    </div></li>
    </ul>
    
      
    </div>
)
};

export default Blogs;