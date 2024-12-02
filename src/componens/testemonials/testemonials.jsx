import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../css/styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Testemonials() {
  return (
    <div id="testemonials" className='testemonials'>
      <div className='testi-header'>
      <h2 className='testi-title'>Our Testimonials</h2>
      <p className='testi-p'>Our satisfied clients share their success stories and experiences on their journey to better health and well-being.</p>
      </div>
      <Swiper
          cssMode={true}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          loop={false}
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
           
            <p className="testi-text">
  I can't express how grateful I am for Nutritionist's guidance. Their personalized coaching helped me not only lose weight but also build a healthier relationship with food. I've learned how to make smarter choices, and the results have been truly life-changing. Highly recommended!
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
              
              <p className="testi-text">
  Working with Nutritionist was amazing. Their expert advice made it easier to adapt healthier habits. The support I received helped me overcome my challenges and stick to my goals. I feel more energized and confident. I would recommend their program to anyone seeking sustainable lifestyle changes.
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
            
              <p className="testi-text">
  This program gave me the tools to succeed. Before joining, I felt stuck in unhealthy habits. With Nutritionist's help, I’ve developed a balanced approach to eating and learned how to prioritize my well-being. It’s been an incredible journey, and I’m excited to continue this path towards better health.
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
             
              <p className="testi-text">
  I was skeptical at first, but Nutritionist exceeded my expectations. Their easy-to-follow plan and practical tips made healthy eating feel achievable. I now have more energy and confidence in my food choices. It’s amazing how small, consistent changes can lead to such big results. I’m so grateful!
</p>
            <div className="testi-down">
                <img src="./images/review-women-three.png" alt="woman" />
                <p className="review-author">Olivia Thompson</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <div className="testi-up">
           
              <p className="testi-text">
  Thanks to Nutritionist, I’ve completely transformed my lifestyle. Their tailored approach and motivational coaching kept me on track even during tough times. The journey wasn’t easy, but their support made all the difference. I’ve never felt healthier or happier, and I’m proud of what I’ve accomplished.
</p>
          <div className="testi-down">
                <img src="./images/review-man.png" alt="man" />
                <p className="review-author">Ethan Brooks</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-controls">
  <button className="swiper-button-prev">‹</button>
  <button className="swiper-button-next">›</button>
  <div className="swiper-pagination"></div>
</div>
    </div>
  );
}
