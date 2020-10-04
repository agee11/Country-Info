import React from "react";
import {Switch, Route, withRouter} from "react-router";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import FlagCards from "../containers/FlagCards";
import CountryPageContainer from "../containers/CountryPageContainer";

class ContentContainer extends React.Component{

  render(){
    return <TransitionGroup>
        <CSSTransition
          key={this.props.location.key}
          timeout={300}
          classNames="page"
        >
        <div className="content-container">
          <Switch location={this.props.location}>
            <Route exact path="/Country-Info/" component={FlagCards} />
            <Route path="/country/:code" component={CountryPageContainer} />
          </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
  }
}

export default withRouter(ContentContainer);
