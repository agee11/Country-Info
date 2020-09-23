import React from "react";
import Search from "./Search.js";
import FilterContainer from "../containers/FilterContainer.js";
import "../styles/SearchContainer.css"

class SearchContainer extends React.Component{

  render(){
    return (
      <div className="search-container">
        <Search />
        <FilterContainer />
      </div>
    )
  }
}

export default SearchContainer;
