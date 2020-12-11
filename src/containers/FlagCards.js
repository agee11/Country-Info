import {connect} from "react-redux";
import CardContainer from "../components/CardContainer";

function mapStateToProps(state){
    return {
      darkmode: state.darkmode,
      region: state.filter,
      search: state.search
    }
}

export default connect(mapStateToProps)(CardContainer);
//Test comment
