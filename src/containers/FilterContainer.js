import {connect} from "react-redux";
import Filter from "../components/Filter.js";
import {setFilter} from "../actions";


function mapStateToProps(state){
  return {
    darkmode: state.darkmode,
    region: state.filter
  }
}

function mapDispatchToProps(dispatch){
  return {
    setFilter: (region) => dispatch(setFilter(region))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
