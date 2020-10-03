import React from "react";
import {withRouter} from "react-router";
import Button from "react-bootstrap/Button";
import "../styles/CountryPage.css";
import BorderLink from "./BorderLink";
import "../styles/BackButton.css";


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
    if(this.props.match)
    {
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

  componentDidUpdate(nextProps){
    // if(nextProps !== this.props && this.props.match){
    //   fetch("https://restcountries.eu/rest/v2/alpha/"+this.props.match.params.code)
    //     .then(res => res.json())
    //     .then(result => {
    //       this.setState({
    //         countryInfo: result
    //       })
    //     }, error => {
    //       console.log(error);
    //     })
    // }
  }

  render(){
    return (
      <div>
        <div className={"back-button-section" + (this.props.darkmode ? " darkmode" : "")}>
          <Button className="back-button" onClick={() => {this.props.history.goBack()}} variant={this.props.darkmode ? "dark" : "light"}><i className="fas fa-arrow-left"></i> Back</Button>
        </div>
        <div className={"country-page" + (this.props.darkmode ? " darkmode" : "")}>
          <img className="flag-img" src={this.state.countryInfo.flag} alt="flag"/>
          <div className="country-info">
            <h3><strong>{this.state.countryInfo.name}</strong></h3>
            <div>
              <p><strong>Native Name: </strong>{this.state.countryInfo.nativeName}</p>
              <p><strong>Population: </strong>{this.state.countryInfo.population}</p>
              <p><strong>Region: </strong>{this.state.countryInfo.region}</p>
              <p><strong>Sub Region: </strong>{this.state.countryInfo.subregion}</p>
              <p><strong>Capital: </strong>{this.state.countryInfo.capital}</p>
            </div>
            <div>
              <p><strong>Top Level Domain: </strong>{this.state.countryInfo.topLevelDomain}</p>
              <p><strong>Currencies: </strong>{this.state.countryInfo.currencies.map(item => {return item.name})}</p>
              <p><strong>Languages: </strong>{this.state.countryInfo.languages.map((item,index) => {return item.name+(index < this.state.countryInfo.languages.length-1 ? ", " : "")})}</p>
            </div>
            <div>
              <p><strong>Border Countries: </strong>
                {this.state.countryInfo.borders.map((country, index) => { return <BorderLink key={index} darkmode={this.props.darkmode} code={country}/>})}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CountryPage);
