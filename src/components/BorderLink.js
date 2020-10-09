import React from "react";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router";
import "../styles/BorderLink.css";

class BorderLink extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      countryInfo: {
        name: ""
      }
    }
  }

//Retrieve country information on mount in order to setup the button in render
  componentDidMount(){
    fetch("https://restcountries.eu/rest/v2/alpha/" + this.props.code)
      .then(res => res.json())
      .then(result => {
        this.setState({
          countryInfo: result
        })
      }, error => {
        console.log(error);
      });
  }

  render(){
    return(
      <Button className="border-link" variant={this.props.darkmode ? "dark" : "light"} onClick={() => {this.props.history.push("/country/"+this.props.code)}}>{this.state.countryInfo.name}</Button>
    )
  }
}

export default withRouter(BorderLink);
