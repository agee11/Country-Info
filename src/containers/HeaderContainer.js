import {connect} from "react-redux";
import Header from "../components/Header";
import {toggleDarkMode} from "../actions";

function mapStateToProps(state){
  return {
    darkmode: state.darkmode
  }
}

function mapDispatchToProps(dispatch){
  return {
    toggleDarkMode: () => dispatch(toggleDarkMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
