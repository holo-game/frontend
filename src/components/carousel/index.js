import React from "react";
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([EffectCoverflow, Autoplay]);

export default function Carousel({ slides, ...props }) {
  return (
    <Swiper
      className="main-carousel py-4"
      spaceBetween={30}
      slidesPerView={2}
      effect="coverflow"
      loop={true}
      loopFillGroupWithBlank={true}
      centeredSlides={true}
      grabCursor={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 100,
        scale: 0.9,
        modifier: 1,
        slideShadows: true,
      }}
      {...props}
    >
      <SwiperSlide className="main-carousel-item">
        <a href="#">
          <img src="https://via.placeholder.com/900x400.png/eee/ccc/" />
        </a>
      </SwiperSlide>
      <SwiperSlide className="main-carousel-item">
        <a href="#">
          <img src="https://via.placeholder.com/900x400.png/eee/ccc/" />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}
