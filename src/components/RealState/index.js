import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
function RealState(props) {
  return (
    <div className={Styles.container}>
      <h2>Inmuebles recientes </h2>
      <div className={Styles.text}>
        <p>
          Encuentra apartamentos, casas, oficinas, lotes y otras propiedades
          para comprar y arrendar.
        </p>
        <div className={Styles.link}>
          <Link to="/" className={Styles.btn}>
            Venta
          </Link>
          <Link to="/" className={Styles.btn}>
            Arriendo
          </Link>
        </div>
      </div>
    </div>
  );
}

RealState.propTypes = {
  props: PropTypes.string,
};

export default RealState;
