import React from "react";
import CountryCard from "./CountryCard";
import "../styles/CardContainer.css";
import SearchContainer from "../containers/SearchContainer";
import {withRouter} from "react-router";

class CardContainer extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      cards: []
    }
  }

  componentDidMount(){
    //Grab all country information from server and store in state
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(result => {
        this.setState({
          cards: result
        })
      }, error => {
        console.log(error);
      })
  }

  render(){
    //Filter cards by region if applied
    let deck;
    if(this.props.region){
      deck = this.state.cards.filter(country => country.region === this.props.region);
    }else{
      deck = this.state.cards;
    }

    //Filter cards by search input if applied
    if(this.props.search){
      deck = deck.filter(country => country.name.toLowerCase().includes(this.props.search.toLowerCase()));
    }

    return (
      <div>
        <SearchContainer />
        <div className="card-container" style={this.props.darkmode ? {"backgroundColor": "#212428"} : {"backgroundColor" : "#fff"}}>
          {deck.map((country,index) => {
            return <CountryCard key={index} darkmode={this.props.darkmode} countryInfo={country}/>
          })}
        </div>
      </div>
    )
  }
}

export default withRouter(CardContainer);
