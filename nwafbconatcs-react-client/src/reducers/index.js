import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import agencyReducer from "./agencyReducer";
import contactReducer from "./contactReducer";
import noteReducer from "./noteReducer";
import securityReducer from "./securityReducer";


export default combineReducers({
    errors: errorReducer,
    agency: agencyReducer,
    contact: contactReducer,
    note: noteReducer,
    security: securityReducer
});
