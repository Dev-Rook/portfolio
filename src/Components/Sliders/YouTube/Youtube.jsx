import React, { useState } from "react";
import Styles from "./Styles/Youtube.module.css";

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

import YoutubeData from "./YoutubeData";

const Youtube = () => {
    const [cardData, setCardData] = useState(YoutubeData);

  return (
    <div className={Styles.Rack}>
      <h3 className={Styles.Rack_Title}>YouTube</h3>
      <Swiper
        speed={800}
        modules={[Navigation, FreeMode, Mousewheel]}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          380: {
            width: 380,
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            width: 480,
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        <div className={Styles.Tray}>
          {cardData.map((slide) => {
            const { id, Thumbnail, Title } = slide;

            return (
              <SwiperSlide className={Styles.Slide}>
                <div className={Styles.Card} key={id}>
                    <img src={Thumbnail} alt="" className={Styles.Image} />
                    <h3 className={Styles.Title}>{Title}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Youtube;
