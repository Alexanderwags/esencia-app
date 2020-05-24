import React from "react";
import PropTypes from "prop-types";
import Styles from "./styles/Styles.module.scss";
import Slider from "../Slider/Autoplay.js";
import Quotesmall from "./../../assests/Comments/Quotesmall";
import QuoteBig from "./../../assests/Comments/QuoteBig";
import Info from "./Info";
function Comments(props) {
  return (
    <section className={Styles.comments}>
      <div className={Styles.container}>
        <Slider>
          {Info.map((inf) => (
            <div className={Styles.infotext} key={inf.id}>
              <div className={Styles.contimg}>
                <img src={inf.img} alt={inf.id} />
              </div>
              <p>{inf.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

Comments.propTypes = {
  props: PropTypes.string,
};

export default Comments;
