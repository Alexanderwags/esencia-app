import React from "react";
import PropTypes from "prop-types";
import Styles from "./styles/Styles.module.scss";
function CardBlog(props) {
  return (
    <div className={Styles.card}>
      <div
        className={Styles.img}
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className={Styles.content}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

CardBlog.propTypes = {
  props: PropTypes.string,
};

export default CardBlog;
