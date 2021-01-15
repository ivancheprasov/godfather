import * as types from "../const/actionTypes";
import {requestWrapper} from "./app";
import axios from "axios";
import {setUserMessage} from "./user";

export const handleFamilyChange = value => {
    return dispatch => {
        dispatch({
            type: types.SET_SELECTED_FAMILY,
            payload: value
        })
    }
};

export const recruit = (family, soldierId) => {
    return dispatch => {
        return requestWrapper(
            () => axios.post("/recruit", {family, soldierId})
                .then(() => dispatch(setSelectedSoldier(null)))
                .catch(error => {
                    dispatch(setUserMessage("Recruitment failed"));
                    return Promise.reject(error);
                })
        );
    };
};

export const giveOrder = (family, orderId) => {
    return dispatch => {
        return requestWrapper(
            () => axios.post("/orders", {family, orderId})
                .then(() => dispatch(setSelectedOrder(null)))
                .catch(error => {
                    dispatch(setUserMessage("Order failed"));
                    return Promise.reject(error);
                })
        );
    };
};

export const setSelectedSoldier = soldier => {
    return dispatch => dispatch({
        type: types.SET_SELECTED_SOLDIER,
        payload: soldier
    });
};

export const setSelectedOrder = order => {
    return dispatch => dispatch({
        type: types.SET_SELECTED_ORDER,
        payload: order
    });
};

export const addOrder = (formValues, family) => {
    const intValues = {};
    Object.entries(formValues).forEach(([key, value]) =>
        intValues[key] = parseInt(value.toString()) || 0
    );
    return dispatch => {
        return requestWrapper(
            () => axios.post("/orders/add", {family, ...intValues})
                .catch(error => {
                    dispatch(setUserMessage("Add failed"));
                    return Promise.reject(error);
                })
        );
    };
};