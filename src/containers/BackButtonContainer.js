import {connect} from "react-redux";
import BackButton from "../components/BackButton";

function mapStateToProps(state){
  return {
    darkmode: state.darkmode
  }
}

export default connect(mapStateToProps)(BackButton);
