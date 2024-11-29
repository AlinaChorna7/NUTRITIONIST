import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../css/styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Testemonials() {
  return (
    <div id="testemonials">
      <h2>What Our Clients Say</h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
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
      </Swiper>
    </div>
  );
}
