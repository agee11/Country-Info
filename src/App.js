import React from 'react';
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderContainer />
      </header>
      <BrowserRouter>
        <ContentContainer />
      </BrowserRouter>

    </div>
  );
}

export default App;
