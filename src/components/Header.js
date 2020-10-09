import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../styles/Header.css";
import {withRouter} from "react-router";

class Header extends React.Component{
  constructor(props){
    super(props);

    this.handleDarkMode = this.handleDarkMode.bind(this);
  }

  handleDarkMode(){
    //Toggles the global darkmode state
    this.props.toggleDarkMode();
  }

  render(){
    return (
    <Navbar expand="true" bg={this.props.darkmode ? "dark" : "light"} variant={this.props.darkmode ? "dark" : "light"}>
      <Navbar.Brand><strong onClick={() => {this.props.history.push("/Country-Info/")}} className="brand">Where in the world?</strong></Navbar.Brand>
      <Button onClick={this.handleDarkMode} variant={this.props.darkmode ? "dark" : "light"}><i className="fas fa-moon"></i> Dark Mode</Button>
    </Navbar>
  )
  }
}

export default withRouter(Header);
