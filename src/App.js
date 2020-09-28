import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchContainer from "./containers/SearchContainer.js";
import FlagCards from "./containers/FlagCards.js";
import CountryPage from "./components/CountryPage.js";
import BackButton from "./components/BackButton";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderContainer />
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/country/:code">
            <BackButton />
            <CountryPage />
          </Route>
          <Route path="/">
            <SearchContainer />
            <FlagCards />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
