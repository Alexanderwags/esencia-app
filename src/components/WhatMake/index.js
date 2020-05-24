import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Imgs from "./Imgs";
import Styles from "./styles/Styles.module.scss";
import { Link } from "react-router-dom";
import Box from "../../assests/Home/secc-3-r.png";
import img1 from "../../assests/Home/secc3-img-1.png";
import img2 from "../../assests/Home/secc3-img-2.png";

function WhatMake(props) {
  return (
    <section className={Styles.whatmake}>
      <div className={Styles.container}>
        <Grid container={true} xs={12}>
          <Grid item={true} xs={12} lg={6} className={Styles.text}>
            <h1>¿Qué hacemos?</h1>
            <p>
              Facilitamos todos los procesos de gestión inmobiliaria que
              necesites, apoyados en nuestro equipo de expertos que te ayudarán
              a encontrar los clientes potenciales que necesitas.
            </p>
            <Grid xs={12} container={true} className={Styles.galery}>
              {Imgs.map((im) => (
                <Grid
                  item={true}
                  xs={12}
                  sm={6}
                  key={im.id}
                  className={Styles.imgflex}
                >
                  <div className={Styles.contentimg}>
                    <img src={im.img} alt={im.id} />
                  </div>
                  <div className={Styles.contenttext}>{im.text}</div>
                </Grid>
              ))}
            </Grid>
            <Link to="/" className={Styles.btn}>
              Ver mas
            </Link>
          </Grid>
          <Grid
            item={true}
            xs={12}
            lg={6}
            style={{ backgroundImage: `url(${Box})` }}
            className={Styles.image}
          >
            <div className={Styles.im1}>
              <img src={img1} alt="im1" />
            </div>
            <div className={Styles.im2}>
              <img src={img2} alt="im2" />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

WhatMake.propTypes = {
  props: PropTypes.string,
};

export default WhatMake;
