import * as types from "../const/actionTypes";
import axios from "axios";
import {store} from "../index";
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
                            setUserMessage("");
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
                                    setUserMessage("Provided credentials are incorrect");
                                    break;
                                default:
                                    setUserMessage("Login failed");
                            }
                        }
                    )
        );
    }
};

export const setUserMessage = message => {
    return store.dispatch({
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