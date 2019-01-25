import { GET_AGENCIES } from "../actions/types";

const initialState = {
    agencies: [],
    agency: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_AGENCIES:
            return {
                ...state,
                agencies:action.payload
            };
        default:
            return state;
    }
}