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
    this.setState({
      input: event.target.value
    });
  }

  render(){
    return (
      <Form.Control className="flex-40" type="input" placeholder="Search for a country..." onChange={this.handleSearch}/>
    );
  }
}

export default Search;
