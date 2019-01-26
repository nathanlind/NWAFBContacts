import axios from "axios";
import {GET_ERRORS, GET_CONTACT, GET_CONTACTS, DELETE_CONTACT} from "./types";


export const createContact = (contact, agencyAccountNumber) => async dispatch => {
    try{
        const res = await axios.post(`/api/agency/${agencyAccountNumber}/contact`);
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

export const getContacts = (agencyAccountNumber) => async dispatch => {
    const res = await axios.get(`/api/agency/${agencyAccountNumber}/contact/all`);
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    })
};

export const getContact = (contactId, agencyAccountNumber) => async dispatch => {
    try {
        const res = await axios.get(`/api/agency/${agencyAccountNumber}/contact/${contactId}`);
        dispatch({
            type: GET_CONTACT,
            payload: res.data
        })
    } catch (error) {

    }
};


export const deleteContacts = (contactId, agencyAccountNumber) => async dispatch => {
    if(window.confirm("Delete Contact?")) {
        await axios.delete(`/api/agency/${agencyAccountNumber}/contact/${contactId}`);
        dispatch({
            type: DELETE_CONTACT,
            payload: contactId
        })
    }
};