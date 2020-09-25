import React from "react";
import Search from "./Search.js";
import FilterContainer from "../containers/FilterContainer.js";
import "../styles/SearchContainer.css"

class SearchSection extends React.Component{

  render(){
    return (
      <div className="search-container" style={this.props.darkmode ? {"background-color": "#212428"} : {"background-color": "#fff"}}>
        <Search darkmode={this.props.darkmode} updateSearch={this.props.updateSearch}/>
        <FilterContainer />
      </div>
    )
  }
}

export default SearchSection;
