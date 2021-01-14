import * as types from "../const/actionTypes";
import axios from "axios";
import {requestWrapper} from "./app";

export const login = (username, password) => {
    return dispatch => {
        return requestWrapper(
            () =>
                axios.post("/login", {username, password})
                    .then(
                        () => {
                            dispatch({
                                type: types.SET_USERNAME,
                                payload: username
                            });
                            dispatch({
                                type: types.IS_AUTHORIZED,
                                payload: true
                            });
                            dispatch(setUserMessage(""));
                            const savedUsername = localStorage.getItem("username");
                            const savedPassword = localStorage.getItem("password");
                            if (!savedUsername) {
                                localStorage.setItem("username", savedUsername);
                            }
                            if (!savedPassword) {
                                localStorage.setItem("password", savedPassword);
                            }
                        }
                    )
                    .catch(
                        error => {
                            switch (error.response.status) {
                                case 403:
                                    dispatch(setUserMessage("Provided credentials are incorrect"));
                                    break;
                                default:
                                    dispatch(setUserMessage("Login failed"));
                            }
                            return Promise.reject(error);
                        }
                    )
        );
    }
};

export const setUserMessage = message => {
    return dispatch =>
        dispatch({
            type: types.SET_USER_MESSAGE,
            payload: message
        });
};

export const logout = () => {
    return dispatch => {
        dispatch({
            type: types.IS_AUTHORIZED,
            payload: false
        });
        dispatch({
            type: types.SET_USERNAME,
            payload: null
        })
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
}