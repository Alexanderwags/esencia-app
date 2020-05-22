import React from "react";
import PropTypes from "prop-types";
import SearchHome from "../components/SearchHome";

const Home = (props) => {
  return (
    <div>
      <SearchHome />
      <div>
        loremdsnnvjkdfvnjkdf fdgdfgdfgdf dfgfdgdfg gfgfg fdgdfgdf gdfgdfgdfg
        gdfgdfgdf
      </div>
    </div>
  );
};

Home.propTypes = {
  props: PropTypes.string,
};

export default Home;
