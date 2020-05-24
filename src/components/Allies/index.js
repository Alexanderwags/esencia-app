import React from "react";
import PropTypes from "prop-types";
import Slider from "../Slider";
import Imgs from "./Imgs";
import Styles from "./styles/Styles.module.scss";
import "./styles/config.scss";
function Allies(props) {
  return (
    <section className="allies">
      <div className={Styles.container}>
        <h1>Nuestros Aliados</h1>
        <Slider>
          {Imgs.map((inf) => (
            <div className={Styles.item} key={inf.id}>
              <img src={inf.img} alt={inf.id} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

Allies.propTypes = {
  props: PropTypes.string,
};

export default Allies;
