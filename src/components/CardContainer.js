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

    this.handleCardClicked = this.handleCardClicked.bind(this);
  }

  componentDidMount(){
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(result => {
        this.setState({
          cards: result,
          inProp: true
        })
      }, error => {
        console.log(error);
      })
  }

  handleCardClicked(countryCode){
    this.setState({
      countryCode: countryCode
    })
  }

  render(){
    let deck;
    if(this.props.region){
      deck = this.state.cards.filter(country => country.region === this.props.region);
    }else{
      deck = this.state.cards;
    }

    if(this.props.search){
      deck = deck.filter(country => country.name.toLowerCase().includes(this.props.search));
    }

    return (
      <div>
        <SearchContainer />
        <div className="card-container" style={this.props.darkmode ? {"backgroundColor": "#212428"} : {"backgroundColor" : "#fff"}}>
          {deck.map((country,index) => {
            return <CountryCard key={index} handleClick={this.handleCardClicked} darkmode={this.props.darkmode} countryInfo={country}/>
          })}
        </div>
      </div>
    )
  }
}

export default withRouter(CardContainer);
