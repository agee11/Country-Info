import React from "react";
import Card from 'react-bootstrap/Card';
import "../styles/CountryCard.css";

class CountryCard extends React.Component{

  render(props){
    return (
      <Card className="country-card" style={{ width: '18rem' }}>
        <Card.Img className="card-img" variant="top" style={{ height: '11rem'}} src={this.props.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{this.props.countryInfo.name}</Card.Title>
          <Card.Text>
            <p><strong>Population: </strong>{this.props.countryInfo.population.toLocaleString()}</p>
            <p><strong>Region: </strong>{this.props.countryInfo.region}</p>
            <p><strong>Capital: </strong>{this.props.countryInfo.capital}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default CountryCard;
