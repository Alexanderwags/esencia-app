import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Styles from "./styles/Styles.module.scss";
function Search(props) {
  return (
    <form className={Styles.form}>
      <input type="text" className={Styles.search} placeholder="search" />
      <button type="submit" className={Styles.btn}>
        <SearchIcon />
      </button>
    </form>
  );
}

Search.propTypes = {
  props: PropTypes.string,
};

export default Search;
