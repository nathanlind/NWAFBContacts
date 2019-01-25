import {DELETE_AGENCY, GET_AGENCIES, GET_AGENCY} from "../actions/types";

const initialState = {
    agencies: [],
    agency: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_AGENCIES:
            return {
                ...state,
                agencies: action.payload
            };
        case GET_AGENCY:
            return {
                ...state,
                agency: action.payload
            };
        case DELETE_AGENCY:
            return {
                ...state,
                agencies: state.agencies.filter(
                    agency => agency.agencyAccountNumber !== action.payload
                )
            };
        default:
            return state;
    }
}