import React from "react";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router";
import "../styles/BackButton.css"

class BackButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={"back-button-section" + (this.props.darkmode ? " darkmode" : "")}>
        <Button className="back-button" onClick={() => {this.props.history.goBack()}} variant={this.props.darkmode ? "dark" : "light"}><i class="fas fa-arrow-left"></i> Back</Button>
      </div>
    )
  }
}

export default withRouter(BackButton);
