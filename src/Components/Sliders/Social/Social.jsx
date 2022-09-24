import React, { useState } from "react";
import Styles from "./Styles/Social.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import SocialData from "./SocialData";

const Youtube = () => {
  const [cardData, setCardData] = useState(SocialData);

  return (
    <div className={Styles.Rack}>
      <h3 className={Styles.Rack_Title}>Social</h3>
      <Swiper
        speed={800}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
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
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          380: {
            width: 380,
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          480: {
            width: 480,
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        <div className={Styles.Tray}>
          {cardData.map((slide) => {
            const { id, Thumbnail, Title, Link } = slide;

            return (
              <SwiperSlide className={Styles.Slide}>
                <a target={"_blank"} href={Link} className={Styles.Link}>
                  <div className={Styles.Card} key={id}>
                    <img src={Thumbnail} alt="" className={Styles.Image} />
                    <h3 className={Styles.Title}>{Title}</h3>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Youtube;
