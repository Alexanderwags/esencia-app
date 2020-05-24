import React from "react";
import PropTypes from "prop-types";
import SearchHome from "../components/SearchHome";
import RealState from "../components/RealState";
import WhatMake from "../components/WhatMake";
import HomeContact from "../components/HomeContact";
import Allies from "./../components/Allies";
import Comments from "../components/Comments";
import BlogInfo from "./../components/BlogInfo/index";
import Subscribe from "./../components/Subscribe/index";
const Home = (props) => {
  return (
    <div>
      <SearchHome />
      <RealState />
      <WhatMake />
      <HomeContact />
      <Allies />
      <Comments />
      <BlogInfo />
      <Subscribe />
    </div>
  );
};

Home.propTypes = {
  props: PropTypes.string,
};

export default Home;
