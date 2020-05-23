import React from "react";
import PropTypes from "prop-types";
import SearchHome from "../components/SearchHome";
import RealState from "../components/RealState";
import WhatMake from "../components/WhatMake";
const Home = (props) => {
  return (
    <div>
      <SearchHome />
      <RealState />
      <WhatMake />
    </div>
  );
};

Home.propTypes = {
  props: PropTypes.string,
};

export default Home;
