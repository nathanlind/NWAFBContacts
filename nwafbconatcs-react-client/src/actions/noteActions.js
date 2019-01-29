import axios from "axios";
import {GET_ERRORS, GET_NOTES, DELETE_NOTE} from "./types";

export const createNote = (agencyAccountNumber, note, history) => async dispatch => {
    try{
        await axios.post(`/api/agency/${agencyAccountNumber}/note`, note);
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};

export const getNotes = agencyAccountNumber => async dispatch => {
    const res = await axios.get(`/api/agency/${agencyAccountNumber}/note/all`);
    dispatch({
        type: GET_NOTES,
        payload: res.data
    })
};

export const deleteNote = (agencyAccountNumber, noteId) => async dispatch => {
    if(window.confirm("Delete Note?")) {
        await axios.delete(`/api/agency${agencyAccountNumber}/note/${noteId}`);
        dispatch({
            type: DELETE_NOTE,
            payload: noteId
        })
    }
};