import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";


export const createNewUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("http://Nwafbcontacts-env.z5bpt3xuzs.us-east-2.elasticbeanstalk.com/api/user/register", newUser);
        history.push("/login");
        dispatch ({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch ({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};


export const login = loginRequest => async dispatch => {
    try {
        // post => Login Request
        const res = await axios.post("http://Nwafbcontacts-env.z5bpt3xuzs.us-east-2.elasticbeanstalk.com/api/user/login", loginRequest);
        // extract token from res.data
        const { token } = res.data;
        // store token in localStorage
        localStorage.setItem("jwtToken", token);
        // set the token in header ***
        setJWTToken(token);
        // decode token on React
        const decoded_jwtToken = jwt_decode(token);
        // dispatch to our securityReducer
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded_jwtToken
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false)
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })
};