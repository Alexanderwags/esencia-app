import React from "react";
import fondo from "../../assests/Footer/fondo-footer.jpg";
import Styles from "./styles/Styles.module.scss";
import Location from "./../../assests/Footer/svg/location";
import Phone from "./../../assests/Footer/svg/phone";
import Messages from "./../../assests/Footer/svg/messages";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Facebook from "./../../assests/Footer/svg/Facebook";
import Instagram from "./../../assests/Footer/svg/Instagram";

function Footer() {
  return (
    <Router>
      <div
        className={Styles.footer}
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className={Styles.container}>
          <div className={Styles.info}>
            <div className={Styles.redesociales}>
              <Link to="/" className={Styles.linn}>
                <Facebook />
              </Link>
              <Link to="/" className={Styles.linn}>
                <Instagram />
              </Link>

              <Link to="/"> @esenciainmobiliaria</Link>
            </div>

            <div className={Styles.text}>
              <Location />
              <Link to="/" className={Styles.link}>
                Teléfono: (+574) 589 7888 – Móvil: (+57) 312 871 8831 – 311 729
                5694
              </Link>
            </div>

            <div className={Styles.text}>
              <Phone />
              <Link to="/" className={Styles.link}>
                Carrera 43 B # 14 – 51, Oficina 710 Centro de negocios Alcala,
                El poblado Medellín, Colombia.
              </Link>
            </div>
            <div className={Styles.text}>
              <Messages />
              <Link to="/" className={Styles.link}>
                Correo: asis.comercial@esenciainm.com
              </Link>
            </div>
          </div>
          <div className={Styles.infored}>
            <Instagram />
          </div>
        </div>
      </div>
      <div className={Styles.end}>
        <p>
          2020 Desarrollado por: <Link>William_ws7</Link>
        </p>
      </div>
    </Router>
  );
}

export default Footer;
