import React from "react";
import Card from 'react-bootstrap/Card';
import "../styles/CountryCard.css";
import {withRouter} from "react-router";

class CountryCard extends React.Component{

  render(props){
    return (
      <Card onClick={() => {this.props.history.push("/country/"+this.props.countryInfo.name)}}bg={this.props.darkmode ? "dark" : "light"} text={this.props.darkmode ? "white" : "black"} className="country-card" style={{ width: '18rem' }}>
        <Card.Img className="card-img" variant="top" style={{ height: '11rem'}} src={this.props.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{this.props.countryInfo.name}</Card.Title>
          <Card.Text>
            <span><strong>Population: </strong>{this.props.countryInfo.population.toLocaleString()}</span><br/>
            <span><strong>Region: </strong>{this.props.countryInfo.region}</span><br/>
            <span><strong>Capital: </strong>{this.props.countryInfo.capital}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default withRouter(CountryCard);
