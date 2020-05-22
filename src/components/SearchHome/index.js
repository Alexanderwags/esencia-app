import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
import Search from "../Search";
import img from "../../assests/Home/portada.png";
import Linea from "./../../assests/Svg/Linea";
function SearchHome(props) {
  return (
    <section
      className={Styles.container}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className={Styles.circle}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={Styles.search}>
        <div className={Styles.nav}>
          <Link to="/">Venta</Link>
          <Link to="/">Arriendo</Link>
          <Link to="/">Publicar</Link>
        </div>
        <Search />
        <div className={Styles.info}>
          <h1>
            Encontrar tu próximo hogar es esencial,
            <em>
              hacerlo fácil es nuestra{" "}
              <span className={Styles.letra2}>esencia</span>
            </em>
          </h1>
        </div>
      </div>
      <Linea />
    </section>
  );
}

SearchHome.propTypes = {
  props: PropTypes.string,
};

export default SearchHome;
