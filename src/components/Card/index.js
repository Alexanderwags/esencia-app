import React from "react";
import PropTypes from "prop-types";
import Tool from "./../../assests/Svg/Card/Tool";
import Bed from "./../../assests/Svg/Card/Bed";
import Lamp from "./../../assests/Svg/Card/Lamp";
import { Link } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
import Car from "./../../assests/Svg/Card/Car";

function Card(props) {
  return (
    <div className={Styles.card}>
      <img src={props.img} alt={props.id} />
      <div className={Styles.inf}>
        <div className={Styles.show}>
          <Tool className={Styles.tool} />
          <span>{props.tool}</span>
        </div>
        <div className={Styles.show}>
          <Bed className={Styles.tool} />
          <span>{props.bed}</span>
        </div>
        <div className={Styles.show}>
          <Lamp className={Styles.tool} />
          <span>{props.lamp}</span>
        </div>
        <div className={Styles.show}>
          <Car />
          <span>{props.car}</span>
        </div>
      </div>
      <Link to="/">{props.text}</Link>
    </div>
  );
}

Card.propTypes = {
  props: PropTypes.string,
};

export default Card;
