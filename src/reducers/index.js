import {combineReducers} from "redux";
import filter from "./filter.js";
import darkmode from "./darkmode.js";
import search from "./search.js";

export default combineReducers({filter, darkmode, search});
