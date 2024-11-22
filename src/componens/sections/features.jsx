


const Features = ()=>{
return ( <div id="features" className="features">
    <h2 className="features-header-main">Features</h2>
    <p className="features-p">
      Welcome to the Feature Section of Nutritionist, your ultimate
      destination for all things nutrition and wellness.
    </p>
    <div className="feat-slide">
      <ul className="features-list">
        <li className="features-item">
          <div className="feature-head">
            <svg width="34px" height="34px" className="feat-svg">
              <use href="../../../images/icons.svg#features-one"></use>
            </svg>
            <h3 className="features-header">Personalized Nutrition Plans</h3>
          </div>
          <div className="feat-p">
            <p className="features-text">
              Receive a tailored nutrition plan designed specifically for
              your body and goals. Our certified nutritionists will
              consider your unique needs, dietary preferences, and health
              conditions to create a plan that suits you best.
            </p>
          </div>
        </li>
        <li className="features-item">
          <div className="feature-head">
            <svg width="34px" height="34px" className="feat-svg">
              <use href="../../../images/icons.svg#features-two"></use>
            </svg>
            <h3 className="features-header">
              Guidance from Certified Nutritionists
            </h3>
          </div>
          <div className="feat-p">
            <p className="features-text">
              Our team of experienced and certified nutritionists will
              provide professional guidance and support throughout your
              journey. They will answer your questions, address your
              concerns, and keep you motivated as you work towards your
              goals.
            </p>
          </div>
        </li>
        <li className="features-item">
          <div className="feature-head">
            <svg width="34px" height="34px" className="feat-svg">
              <use href="../../../images/icons.svg#features-three"></use>
            </svg>
            <h3 className="features-header">Food Tracking and Analysis</h3>
          </div>
          <div className="feat-p">
            <p className="features-text">
              Effortlessly track your food intake using our user-friendly
              app. Our nutritionists will analyze your data to provide
              insights into your eating habits, help you identify areas
              for improvement, and make personalized recommendations.
            </p>
          </div>
        </li>
        <li className="features-item">
          <div className="feature-head">
            <svg width="34px" height="34px" className="feat-svg">
              <use href="../../../images/icons.svg#features-four"></use>
            </svg>
            <h3 className="features-header">Meal Planning and Recipes</h3>
          </div>

          <div className="feat-p">
            <p className="features-text">
              Access a vast collection of delicious and healthy recipes
              tailored to your dietary needs. Our nutritionists will also
              create personalized meal plans, making it easier for you to
              stay on track and enjoy nutritious meals.
            </p>
          </div>
        </li>
        <li className="features-item">
          <div className="feature-head">
            <svg width="34px" height="34px" className="feat-svg">
              <use href="../../../images/icons.svg#features-five"></use>
            </svg>
            <h3 className="features-header">
              Lifestyle and Behavior Coaching
            </h3>
          </div>

          <div className="feat-p">
            <p className="features-text">
              Achieving sustainable results requires more than just a diet
              plan. Our nutritionists will work with you to develop
              healthy habits, address emotional eating, and provide
              strategies to overcome obstacles along the way.
            </p>
          </div>
        </li>
        <li className="features-item">
          <div className="feature-head">
            <svg width="34px" height="34px" className="feat-svg">
              <use href="../../../images/icons.svg#features-six"></use>
            </svg>
            <h3 className="features-header">
              Nutritional Education and Workshops
            </h3>
          </div>

          <div className="feat-p">
            <p className="features-text">
              Expand your knowledge of nutrition through informative
              articles and educational workshops. Our nutritionists will
              equip you with the knowledge and tools to make informed
              choices for long-term success.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>)
};

export default Features;