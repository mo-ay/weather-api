import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="search">
      <input type="text"
      id="searchfi"/>
      <button id="serBtn">FIND WEATHER</button>
    </div>
    );
  }
}
export default Search;
