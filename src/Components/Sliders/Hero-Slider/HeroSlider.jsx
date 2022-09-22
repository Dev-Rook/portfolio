import React, { useState } from "react";
import Styles from "./Styles/HeroSlider.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

const HeroSlider = () => {
  return (
    <div className={Styles.HeroSliderContainer}>
      <Swiper
        speed={800}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation, FreeMode, Mousewheel]}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
      >
        <SwiperSlide className={Styles.Slide}>
          <img src={require("../../../Assets/Images/Brown-Topography-Map.jpg")} alt="" className={Styles.Slide_Image} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
