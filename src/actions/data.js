import {requestWrapper} from "./app";
import axios from "axios";
import * as types from "../const/actionTypes";
import {setUserMessage} from "./user";

export const loadSoldiers = () => {
    return dispatch => {
        return requestWrapper(
            () =>
                axios.get("/soldiers")
                    .then(response =>
                        dispatch({
                            type: types.SET_SOLDIERS,
                            payload: response.data
                        })
                    )
        );
    };
};

export const loadOrders = () => {
    return dispatch => {
        return requestWrapper(
            () =>
                axios.get("/orders")
                    .then(response =>
                        dispatch({
                            type: types.SET_ORDERS,
                            payload: response.data
                        })
                    )
        );
    };
};

export const loadFamilyBudget = familyName => {
    return dispatch => {
        return requestWrapper(
            () => axios.post("/families", {name: familyName})
                .then(response => dispatch(setFamilyBudget(response.data)))
                .catch(error => {
                    dispatch(setUserMessage("Budget load failed"));
                    dispatch(setFamilyBudget(null));
                    return Promise.reject(error);
                })
        );
    };
};

export const setFamilyBudget = payload => {
    return dispatch => {
        dispatch({
            type: types.SET_BUDGET,
            payload: payload
        })
    }
};