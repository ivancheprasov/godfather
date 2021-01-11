import {IS_FETCHING} from "../const/actionTypes";
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
        type: IS_FETCHING,
        payload
    });
};