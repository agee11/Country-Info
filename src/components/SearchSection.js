import React from "react";
import Search from "./Search";
import FilterContainer from "../containers/FilterContainer";
import "../styles/SearchContainer.css"

class SearchSection extends React.Component{

  render(){
    return (
      <div className="search-container" style={this.props.darkmode ? {"backgroundColor": "#212428"} : {"backgroundColor": "#fff"}}>
        <Search darkmode={this.props.darkmode} updateSearch={this.props.updateSearch}/>
        <FilterContainer />
      </div>
    )
  }
}

export default SearchSection;
