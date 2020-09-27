import React from "react";

class CountryPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(props){
    return (
      <div>
        <img src={this.props.country.flag} alt="flag">
        <h3>{this.props.country.name}</h3>
        <div>
          <div>
            <p><strong>Native Name: </strong>{this.props.country.nativeName}</p>
            <p><strong>Population: </strong>{this.props.country.population}</p>
            <p><strong>Region: </strong>{this.props.country.region}</p>
            <p><strong>Sub Region: </strong>{this.props.country.subregion}</p>
            <p><strong>Capital: </strong>{this.props.country.capital}</p>
            <p><strong>Top Level Domain: </strong>{this.props.country.topLevelDomain}</p>
            <p><strong>Currencies: </strong>{this.props.country.currencies}</p>
            <p><strong>Languages: </strong>{this.props.country.languages}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CountryPage;
