import {DELETE_NOTE, GET_NOTES, GET_NOTE} from "../actions/types";

const initialState = {
    note: [],
    notes: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload
            };
        case GET_NOTE:
            return {
                ...state,
                notes: action.payload
            };
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(
                    note => note.id !== action.payload
                )
            };
        default:
            return state;
    }
}