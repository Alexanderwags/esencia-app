import React, { useEffect } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Styles from "./styles/Styles.module.scss";
import "./styles/config.scss";
const SimpleSwiperWithParams = ({ children }) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 12500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  useEffect(() => {
    let pant = window.screen.width;
    if (pant < 575) {
      params.slidesPerView = 1;
    }
  }, [params.slidesPerView]);

  return (
    <div className={Styles.container}>
      <Swiper {...params} style={{ width: "100%" }}>
        {children}
      </Swiper>
    </div>
  );
};

export default SimpleSwiperWithParams;
