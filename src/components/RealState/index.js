import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Styles from "./styles/Styles.module.scss";
import Slider from "../Slider";
import capa from "../../assests/capa.png";
import Card from "./../Card/index";
import Info from "./ImgInfo/Info";
function RealState(props) {
  return (
    <section
      className={Styles.info}
      style={{ backgroundImage: `url(${capa})` }}
    >
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
        <Slider className="quepasa" style={{ width: "100%" }}>
          {Info.map((info) => (
            <div>
              <Card {...info} key={info.id} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

RealState.propTypes = {
  props: PropTypes.string,
};

export default RealState;
