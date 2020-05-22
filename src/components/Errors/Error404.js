import React from "react";
import PropTypes from "prop-types";

function Error404(props) {
  return (
    <div>
      <h1>Not found</h1>
    </div>
  );
}

Error404.propTypes = {
  props: PropTypes.string,
};

export default Error404;
