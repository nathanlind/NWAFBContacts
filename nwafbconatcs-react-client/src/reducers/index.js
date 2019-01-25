import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import agencyReducer from "./agencyReducer";


export default combineReducers({
    errors: errorReducer,
    agency: agencyReducer
});
