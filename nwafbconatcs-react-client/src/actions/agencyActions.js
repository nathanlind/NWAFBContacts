import axios from "axios";
import {GET_ERRORS, GET_AGENCIES} from "./types";


export const createAgency = (agency, history) => async dispatch => {
    try {
        const res = await axios.post
        ("http://localhost:8080/api/agency", agency);
        history.push("/dashboard")
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const getAgencies = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/agency/all");
    dispatch ({
        type: GET_AGENCIES,
        payload: res.data
    })
};