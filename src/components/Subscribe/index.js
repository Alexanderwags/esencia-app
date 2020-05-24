import React from "react";
import PropTypes from "prop-types";
import fondo from "../../assests/suscribed/newsleeter-bg_footer-tiny.jpg";
import Styles from "./styles/Styles.module.scss";
function Subscribe(props) {
  return (
    <section
      className={Styles.subscribe}
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <h1>Entérate de nuestras últimas noticias</h1>
      <form>
        <input type="text" placeholder="Email" />
        <button type="submit">¡Quiero Subscribirme!</button>
      </form>
    </section>
  );
}

Subscribe.propTypes = {
  props: PropTypes.string,
};

export default Subscribe;
