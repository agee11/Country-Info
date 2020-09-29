import {connect} from "react-redux";
import CountryPage from "../components/CountryPage";

function mapStateToProps(state){
  return {
    darkmode: state.darkmode
  }
}

export default connect(mapStateToProps)(CountryPage);
