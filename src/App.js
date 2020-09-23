import React from 'react';
import Header from "./components/Header.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchContainer from "./components/SearchContainer.js";
import FlagCards from "./containers/FlagCards.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <SearchContainer />
      <FlagCards />
    </div>
  );
}

export default App;
