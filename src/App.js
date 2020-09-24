import React from 'react';
import HeaderContainer from "./containers/HeaderContainer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchContainer from "./containers/SearchContainer.js";
import FlagCards from "./containers/FlagCards.js";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderContainer />
      </header>
      <SearchContainer />
      <FlagCards />
    </div>
  );
}

export default App;
