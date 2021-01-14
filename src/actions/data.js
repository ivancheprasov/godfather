import {requestWrapper} from "./app";
import axios from "axios";
import * as types from "../const/actionTypes";

export const loadSoldiers = () => {
    return dispatch => {
        return requestWrapper(
            () =>
                axios.get("/soldiers")
                    .then(response =>
                        dispatch({
                            type: types.SET_SOLDIERS,
                            payload: response.data.soldiers
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
                            payload: response.data.soldiers
                        })
                    )
        );
    };
};