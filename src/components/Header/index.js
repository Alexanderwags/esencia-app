import React from "react";
import PropTypes from "prop-types";
import Menu from "../Menu";
function Header(props) {
  return (
    <div>
      <Menu />
    </div>
  );
}

Header.propTypes = {
  props: PropTypes.string,
};

export default Header;
