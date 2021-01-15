import * as types from "../const/actionTypes";
import axios from "axios";
import {requestWrapper} from "./app";

export const login = (username, password) => {
    return dispatch => {
        return requestWrapper(
            () =>
                axios.post("/login", {username, password})
                    .then(
                        response => {
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
                                localStorage.setItem("username", username);
                            }
                            if (!savedPassword) {
                                localStorage.setItem("password", password);
                            }
                            if(response.status === 200){
                                dispatch(isAdmin(true));
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
        dispatch(isAdmin(false));
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
};

export const isAdmin = flag => {
    return dispatch => {
        dispatch({
            type: types.IS_ADMIN,
            payload: flag
        })
    }
}