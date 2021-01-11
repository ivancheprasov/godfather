import * as types from "../const/actionTypes";

const initialState = {
    isFetching: false,
    isMobile: false,
    isLoading: true
};

export const app = (state = initialState, action) => {
    switch (action.type) {
        case types.INIT_APP:
            return {...state, isLoading: false};
        case types.IS_FETCHING:
            return {...state, isFetching: action.payload};
        case types.IS_MOBILE:
            return {...state, isMobile: action.payload};
        default:
            return {...state};
    }
};