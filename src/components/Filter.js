import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

class Filter extends React.Component{
  constructor(props){
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event){
    console.log(event);
    this.props.setFilter(event);
  }

  render(){
    return (
      <div>
        <DropdownButton variant={this.props.darkmode ? "dark" : "light"} title="Filter by Region">
          <Dropdown.Item onSelect={this.handleFilter} eventKey="">None</Dropdown.Item>
          <Dropdown.Item onSelect={this.handleFilter} eventKey="Africa">Africa</Dropdown.Item>
          <Dropdown.Item onSelect={this.handleFilter} eventKey="Americas">Americas</Dropdown.Item>
          <Dropdown.Item onSelect={this.handleFilter} eventKey="Asia">Asia</Dropdown.Item>
          <Dropdown.Item onSelect={this.handleFilter} eventKey="Europe">Europe</Dropdown.Item>
          <Dropdown.Item onSelect={this.handleFilter} eventKey="Oceania">Oceania</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default Filter;
