import axios from "axios";
import {GET_ERRORS, GET_AGENCIES, GET_AGENCY, DELETE_AGENCY} from "./types";


export const createAgency = (agency, agencyAccountNumber, history) => async dispatch => {
    try {
        await axios.post("/api/agency", agency);
        const res = await axios.get(`/api/agency/${agencyAccountNumber}`);
        history.push("/dashboard");
        dispatch({
            type: GET_AGENCY,
            payload: res.data
        });
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

export const getAgencies = () => async dispatch => {
    const res = await axios.get("/api/agency/all");
    dispatch ({
        type: GET_AGENCIES,
        payload: res.data
    })
};

export const getAgency = (agencyAccountNumber) => async dispatch => {
    try {
        const res = await axios.get(`/api/agency/${agencyAccountNumber}`);
        dispatch({
            type: GET_AGENCY,
            payload: res.data
        });
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};

export const deleteAgency = (agencyAccountNumber) => async dispatch => {
    if(window.confirm("Delete Agency?")) {
        await axios.delete(`/api/agency/${agencyAccountNumber}`);
        dispatch({
            type: DELETE_AGENCY,
            payload: agencyAccountNumber
        })
    }
};