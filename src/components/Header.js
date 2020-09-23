import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../styles/Header.css";

class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      darkMode: true
    }

    this.handleDarkMode = this.handleDarkMode.bind(this);
  }

  handleDarkMode(){
    this.setState(prevState => {
      return {darkMode: !prevState.darkMode}
    })
  }

  render(){
    return (
    <Navbar expand="true" bg={this.state.darkMode ? "dark" : "light"} variant={this.state.darkMode ? "dark" : "light"}>
      <Navbar.Brand>Where in the world?</Navbar.Brand>
      <Button onClick={this.handleDarkMode} variant={this.state.darkMode ? "dark" : "light"}><i className="fas fa-moon"></i> Dark Mode</Button>
    </Navbar>
  )
  }
}

export default Header;
