import axios from "axios";
import {GET_ERRORS, GET_CONTACT, GET_CONTACTS, DELETE_CONTACT} from "./types";


export const createContact = (agencyAccountNumber, contact, history) => async dispatch => {
    try{
        await axios.post(`http://Nwafbcontacts-env.z5bpt3xuzs.us-east-2.elasticbeanstalk.com/api/agency/${agencyAccountNumber}/contact`, contact);
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


export const getContacts = agencyAccountNumber => async dispatch => {
    const res = await axios.get(`http://Nwafbcontacts-env.z5bpt3xuzs.us-east-2.elasticbeanstalk.com/api/agency/${agencyAccountNumber}/contact/all`);
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    })
};


export const getContact = (agencyAccountNumber, contactId, history) => async dispatch => {
    try {
        const res = await axios.get(`http://Nwafbcontacts-env.z5bpt3xuzs.us-east-2.elasticbeanstalk.com/api/agency/${agencyAccountNumber}/contact/${contactId}`);
        dispatch({
            type: GET_CONTACT,
            payload: res.data
        })
    } catch (error) {
        history.push("/dashboard");
    }
};


export const deleteContact = (agencyAccountNumber, contactId) => async dispatch => {
    if(window.confirm("Delete Contact?")) {
        await axios.delete(`http://Nwafbcontacts-env.z5bpt3xuzs.us-east-2.elasticbeanstalk.com/api/agency/${agencyAccountNumber}/contact/${contactId}`);
        dispatch({
            type: DELETE_CONTACT,
            payload: contactId
        })
    }
};