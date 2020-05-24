import React from "react";
import Swiper from "react-id-swiper";
import Styles from "./styles/Styles.module.scss";
import "./styles/config.scss";
const Autoplay = ({ children }) => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //   delay: 12500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <div className={Styles.container}>
      <Swiper {...params}>{children}</Swiper>;
    </div>
  );
};
export default Autoplay;
