import {connect} from "react-redux";
import CardContainer from "../components/CardContainer.js";

function mapStateToProps(state){
    return {
      darkmode: state.darkmode,
      region: state.filter
    }
}

export default connect(mapStateToProps)(CardContainer);
