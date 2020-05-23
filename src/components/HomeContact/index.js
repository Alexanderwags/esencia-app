import React from "react";
import PropTypes from "prop-types";
import Styles from "./styles/Styles.module.scss";
import fondo from "../../assests/Home/cajas-home_cajas-tiny-1.png";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Img from "../../assests/Home/man-suit_foto-del-home-cambiar.jpg";
function HomeContact(props) {
  return (
    <section
      className={Styles.contact}
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className={Styles.container}>
        <Grid container={true} xs={12}>
          <Grid xs={12} lg={6} className={Styles.image}>
            <img src={Img} alt="ima" />
          </Grid>
          <Grid xs={12} lg={6} className={Styles.content}>
            <div className={Styles.text}>
              <h3>
                Contamos con expertos que le ayudarán a vender o arrendar su
                inmueble
              </h3>
              <p>
                Nuestro talentoso equipo te acompaña en cada etapa del proceso,
                para crear una experiencia exitosa, satisfactoria y agradable,
                enfocados en las necesidades a la medida de cada cliente.
              </p>
            </div>
            <Link to="/" className={Styles.btn}>
              Contáctanos
            </Link>
          </Grid>
        </Grid>
      </div>
      ;
    </section>
  );
}

HomeContact.propTypes = {
  props: PropTypes.string,
};

export default HomeContact;
