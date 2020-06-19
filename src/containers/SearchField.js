import React from "react";
import "./SearchField.css";

const SearchField = (props) => {
  return (
    <input
      className="input"
      type="search"
      onChange={props.search}
      placeholder="Search for Pokemon"
    ></input>
  );
};

export default SearchField;
