import * as types from "../const/actionTypes";
import {store} from "../index";

export const requestWrapper = request => {
    displayProgressBar(true);
    return Promise.all([request()])
        .finally(() =>
            displayProgressBar(false)
        );
};

const displayProgressBar = payload => {
    return store.dispatch({
        type: types.IS_FETCHING,
        payload
    });
};

export const setDeviceType = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(navigator.userAgent);
    return dispatch => dispatch({
        type: types.IS_MOBILE,
        payload: isMobile
    });
};

export const initApp = () => {
    return dispatch => dispatch({
        type: types.INIT_APP
    });
};