import React from "react";
import Form from "react-bootstrap/Form";

class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      input: ""
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event){
    //Set the global search state to input value
    this.props.updateSearch(event.target.value);
  }

  render(){
    return (
      <Form.Control style={this.props.darkmode ? {"backgroundColor" : "#343a40", "color": "#fff"} : {"backgroundColor" : "#fff"}}className="flex-40" type="input" placeholder="Search for a country..." onChange={this.handleSearch}/>
    );
  }
}

export default Search;
