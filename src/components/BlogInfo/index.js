import React from "react";
import Styles from "./styles/Styles.module.scss";
import Imgs from "./Imgs";
import CardBlog from "./../CardBlog/index";
import { Link } from "react-router-dom";

function BlogInfo() {
  return (
    <section className={Styles.blog}>
      <div className={Styles.container}>
        <div className={Styles.title}>
          <span className={Styles.t1}>Blog </span>
          <span className={Styles.t2}>Blog</span>
        </div>
        <div className={Styles.img}>
          {Imgs.map((inf) => (
            <CardBlog {...inf} key={inf.id} />
          ))}
        </div>
      </div>
      <Link to="/" className={Styles.btn}>
        Ver todos los artículos
      </Link>
    </section>
  );
}

export default BlogInfo;
