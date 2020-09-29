import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchContainer from "./containers/SearchContainer";
import FlagCards from "./containers/FlagCards";
import CountryPageContainer from "./containers/CountryPageContainer";
import BackButtonContainer from "./containers/BackButtonContainer";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderContainer />
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/country/:code">
            <BackButtonContainer />
            <CountryPageContainer />
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
