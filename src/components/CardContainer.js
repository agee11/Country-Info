import React from "react";
import CountryCard from "./CountryCard";
import "../styles/CardContainer.css";

class CardContainer extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      cards: []
    }
  }

  componentDidMount(){
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
      <div className="card-container" style={this.props.darkmode ? {"background-color": "#212428"} : {"background-color" : "#fff"}}>
        {deck.map((country,index) => {
          return <CountryCard key={index} darkmode={this.props.darkmode} countryInfo={country}/>
        })}
      </div>
    )
  }
}

export default CardContainer;
