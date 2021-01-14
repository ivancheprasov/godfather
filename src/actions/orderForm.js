import * as types from "../const/actionTypes";
import {requestWrapper} from "./app";
import axios from "axios";

export const handleFamilyChange = value => {
    return dispatch => dispatch({
        type: types.SET_SELECTED_FAMILY,
        payload: value
    })
};

export const recruit = (family, soldierId) => {
    return dispatch => {
        return requestWrapper(
            () => axios.post("/recruit", {family, soldierId})
                .then(() => dispatch(setSelectedSoldier(null)))
        );
    };
};

export const giveOrder = (family, orderId) => {
    return dispatch => {
        return requestWrapper(
            () => axios.post("/order", {family, orderId})
                .then(() => dispatch(setSelectedOrder(null)))
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