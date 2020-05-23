import React from "react";
import PropTypes from "prop-types";
import SearchHome from "../components/SearchHome";
import RealState from "../components/RealState";
import WhatMake from "../components/WhatMake";
import HomeContact from "../components/HomeContact";
const Home = (props) => {
  return (
    <div>
      <SearchHome />
      <RealState />
      <WhatMake />
      <HomeContact />
    </div>
  );
};

Home.propTypes = {
  props: PropTypes.string,
};

export default Home;
