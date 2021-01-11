import "../const/actionTypes";
import * as types from "../const/actionTypes";
import {requestWrapper} from "../utils";
import axios from "axios";
import {store} from "../index";

export const login = (username, password) => {
    return dispatch => {
        return requestWrapper(
            () =>
                axios.post("/login", {username, password})
                    .finally(
                        () => {
                            dispatch({
                                type: types.SET_USERNAME,
                                payload: username
                            });
                            dispatch({
                                type: types.IS_AUTHORIZED,
                                payload: true
                            });
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