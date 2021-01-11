import * as types from "../const/actionTypes";

const initialState = {
    isAuthorized: false,
    isFetching: false,
    username: null,
    userMessage: ""
};

export const user = (state = initialState, action) => {
    switch (action.type){
        case types.IS_AUTHORIZED:
            return {...state, isAuthorized: action.payload};
        case types.IS_FETCHING:
            return {...state, isFetching: action.payload};
        case types.SET_USER_MESSAGE:
            return {...state, userMessage: action.payload};
        case types.SET_USERNAME:
            return {...state, username: action.payload};
        default:
            return {...state};
    }
};