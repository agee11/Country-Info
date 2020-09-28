import React from "react";
import {withRouter} from "react-router";
import "../styles/CountryPage.css";
import BorderLink from "./BorderLink";

class CountryPage extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      countryInfo:
        {
          flag: "",
          name: "",
          nativeName: "",
          population: "",
          region: "",
          subregion: "",
          capital: "",
          topLevelDomain: "",
          currencies: [{name: ""}],
          languages: [{name: ""}],
          borders: []
        }
    }
  }

  componentDidMount(props){
    fetch("https://restcountries.eu/rest/v2/alpha/"+this.props.match.params.code)
      .then(res => res.json())
      .then(result => {
        this.setState({
          countryInfo: result
        })
      }, error => {
        console.log(error);
      })
  }

  componentDidUpdate(nextProps){
    if(nextProps !== this.props){
      fetch("https://restcountries.eu/rest/v2/alpha/"+this.props.match.params.code)
        .then(res => res.json())
        .then(result => {
          this.setState({
            countryInfo: result
          })
        }, error => {
          console.log(error);
        })
    }
  }

  render(props){
    console.log("render");
    return (
      <div className="country-page">
        <img className="flag-img" src={this.state.countryInfo.flag} alt="flag"/>
        <div className="country-info">
          <h3>{this.state.countryInfo.name}</h3>
          <div>
            <p><strong>Native Name: </strong>{this.state.countryInfo.nativeName}</p>
            <p><strong>Population: </strong>{this.state.countryInfo.population}</p>
            <p><strong>Region: </strong>{this.state.countryInfo.region}</p>
            <p><strong>Sub Region: </strong>{this.state.countryInfo.subregion}</p>
            <p><strong>Capital: </strong>{this.state.countryInfo.capital}</p>
            <p><strong>Top Level Domain: </strong>{this.state.countryInfo.topLevelDomain}</p>
            <p><strong>Currencies: </strong>{this.state.countryInfo.currencies.map(item => {return item.name})}</p>
            <p><strong>Languages: </strong>{this.state.countryInfo.languages.map(item => {return item.name})}</p>
          </div>
          <div>
            <p><strong>Border Countries: </strong>
              {this.state.countryInfo.borders.map(country => { return <BorderLink code={country}/>})}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CountryPage);
