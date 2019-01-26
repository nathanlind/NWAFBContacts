import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import agencyReducer from "./agencyReducer";
import contactReducer from "./contactReducer";


export default combineReducers({
    errors: errorReducer,
    agency: agencyReducer,
    contact: contactReducer
});
