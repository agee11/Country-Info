import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../styles/Header.css";

class Header extends React.Component{
  constructor(props){
    super(props);

    this.handleDarkMode = this.handleDarkMode.bind(this);
  }

  handleDarkMode(){
    this.props.toggleDarkMode();
  }

  render(){
    return (
    <Navbar expand="true" bg={this.props.darkmode ? "dark" : "light"} variant={this.props.darkmode ? "dark" : "light"}>
      <Navbar.Brand>Where in the world?</Navbar.Brand>
      <Button onClick={this.handleDarkMode} variant={this.props.darkmode ? "dark" : "light"}><i className="fas fa-moon"></i> Dark Mode</Button>
    </Navbar>
  )
  }
}

export default Header;
