import axios from "axios";
import {GET_ERRORS, GET_NOTE, GET_NOTES, DELETE_NOTE} from "./types";

export const createNote = (agencyAccountNumber, note, history) => async dispatch => {
    try{
        await axios.post(`http://Nwafbcontacts-env.z5bpt3xuzs.us-east-2.elasticbeanstalk.com/api/agency/${agencyAccountNumber}/note`, note);
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
    const res = await axios.get(`http://Nwafbcontacts-env.z5bpt3xuzs.us-east-2.elasticbeanstalk.com/api/agency/${agencyAccountNumber}/note/all`);
    dispatch({
        type: GET_NOTES,
        payload: res.data
    })
};

export const getNote = (agencyAccountNumber, noteId, history) => async dispatch => {
    try {
        const res = await axios.get(`http://Nwafbcontacts-env.z5bpt3xuzs.us-east-2.elasticbeanstalk.com/api/agency/${agencyAccountNumber}/note/${noteId}`);
        dispatch({
            type: GET_NOTE,
            payload: res.data
        })
    } catch (error) {
        history.push("/dashboard");
    }
};


export const deleteNote = (agencyAccountNumber, noteId) => async dispatch => {
    if(window.confirm("Delete Note?")) {
        await axios.delete(`http://Nwafbcontacts-env.z5bpt3xuzs.us-east-2.elasticbeanstalk.com/api/agency/${agencyAccountNumber}/note/${noteId}`);
        dispatch({
            type: DELETE_NOTE,
            payload: noteId
        })
    }
};