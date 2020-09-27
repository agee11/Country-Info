import React from "react";
import {withRouter} from "react-router";

class CountryPage extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      countryInfo: [
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
          languages: [{name: ""}]
        }
      ]
    }
  }

  componentDidMount(props){
    fetch("https://restcountries.eu/rest/v2/name/"+this.props.match.params.name+"?fullText=true")
      .then(res => res.json())
      .then(result => {
        this.setState({
          countryInfo: result
        })
      }, error => {
        console.log(error);
      })
  }

  render(props){
    console.log(this.props.location.pathname);
    return (
      <div>
        <img src={this.state.countryInfo[0].flag} alt="flag"/>
        <h3>{this.state.countryInfo[0].name}</h3>
        <div>
          <div>
            <p><strong>Native Name: </strong>{this.state.countryInfo[0].nativeName}</p>
            <p><strong>Population: </strong>{this.state.countryInfo[0].population}</p>
            <p><strong>Region: </strong>{this.state.countryInfo[0].region}</p>
            <p><strong>Sub Region: </strong>{this.state.countryInfo[0].subregion}</p>
            <p><strong>Capital: </strong>{this.state.countryInfo[0].capital}</p>
            <p><strong>Top Level Domain: </strong>{this.state.countryInfo[0].topLevelDomain}</p>
            <p><strong>Currencies: </strong>{this.state.countryInfo[0].currencies.map(item => {return item.name})}</p>
            <p><strong>Languages: </strong>{this.state.countryInfo[0].languages.map(item => {return item.name})}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CountryPage);
