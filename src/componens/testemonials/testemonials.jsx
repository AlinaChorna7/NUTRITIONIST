import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../css/styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Testemonials() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={3}  
       
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-content">
            <div className="testi-up">
              <svg width="34px" height="34px" className="icon-review-testi">
                <use href="./images/icons.svg#testi" className="icon-testi"></use>
              </svg>
              <p className="testi-text">
                I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!
              </p>
              <div className="testi-down">
                <img src="./images/revie-woman-four.png" alt="woman" />
                <p className="review-author">Jennifer Anderson</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-content">
            <div className="testi-up">
              <svg width="34px" height="34px" className="icon-review-testi">
                <use href="./images/icons.svg#testi" className="icon-testi"></use>
              </svg>
              <p className="testi-text">
                Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!
              </p>
              <div className="testi-down">
                <img src="./images/review-male-two.png" alt="man" />
                <p className="review-author">Robert Johnson</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-content">
            <div className="testi-up">
              <svg width="34px" height="34px" className="icon-review-testi">
                <use href="./images/icons.svg#testi" className="icon-testi"></use>
              </svg>
              <p className="testi-text">
                Nutritionist's approach was exactly what I needed. Their expert advice and support helped me make sustainable changes to my diet and lifestyle. I've never felt more in control and confident in my health!
              </p>
              <div className="testi-down">
                <img src="./images/review-woman-five.png" alt="woman" />
                <p className="review-author">Michael Lee</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-content">
            <div className="testi-up">
              <svg width="34px" height="34px" className="icon-review-testi">
                <use href="./images/icons.svg#testi" className="icon-testi"></use>
              </svg>
              <p className="testi-text">
                Working with Nutritionist was the best decision I've ever made. Their approach was not only professional but also compassionate. I feel healthier, stronger, and more in control of my eating habits than ever before.
              </p>
              <div className="testi-down">
                <img src="./images/review-man.png" alt="man" />
                <p className="review-author">James Smith</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-content">
            <div className="testi-up">
              <svg width="34px" height="34px" className="icon-review-testi">
                <use href="./images/icons.svg#testi" className="icon-testi"></use>
              </svg>
              <p className="testi-text">
                I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!
              </p>
              <div className="testi-down">
                <img src="./images/review-woman-one.png" alt="woman" />
                <p className="review-author">Emily Davis</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-content">
            <div className="testi-up">
              <svg width="34px" height="34px" className="icon-review-testi">
                <use href="./images/icons.svg#testi" className="icon-testi"></use>
              </svg>
              <p className="testi-text">
                I struggled with emotional eating for years, but Nutritionist gave me the tools I needed to create a healthier relationship with food. The guidance and support have been invaluable in my transformation!
              </p>
              <div className="testi-down">
                <img src="./images/review-woman.png" alt="woman" />
                <p className="review-author">Olivia Brown</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-content">
            <div className="testi-up">
              <svg width="34px" height="34px" className="icon-review-testi">
                <use href="./images/icons.svg#testi" className="icon-testi"></use>
              </svg>
              <p className="testi-text">
                Nutritionist helped me discover the power of balanced eating. The customized meal plans and expert advice have truly changed my life for the better. I feel more energized and confident every day!
              </p>
              <div className="testi-down">
                <img src="./images/review-women-three.png" alt="woman" />
                <p className="review-author">Sarah Williams</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
