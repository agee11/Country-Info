import {connect} from "react-redux";
import SearchSection from "../components/SearchSection";
import {updateSearch} from "../actions";

function mapStateToProps(state){
  return {
    darkmode: state.darkmode
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateSearch: (text) => dispatch(updateSearch(text))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
