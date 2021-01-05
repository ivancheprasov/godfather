import {IS_FETCHING} from "../const/actionTypes";

export const requestWrapper = request => {
    displayProgressBar(true);
    return Promise.all([request()]).finally(() => {
        displayProgressBar(false);
    });
};

const displayProgressBar = payload => {
    return dispatch => {
        dispatch({
            type: IS_FETCHING,
            payload
        });
    };
};