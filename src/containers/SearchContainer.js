import {connect} from "react-redux";
import SearchSection from "../components/SearchSection.js";

function mapStateToProps(state){
  return {
    darkmode: state.darkmode
  }
}


export default connect(mapStateToProps)(SearchSection);
