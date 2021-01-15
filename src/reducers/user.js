import * as types from "../const/actionTypes";

const initialState = {
    isAuthorized: false,
    username: null,
    userMessage: "",
    isAdmin: false
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case types.IS_AUTHORIZED:
            return {...state, isAuthorized: action.payload};
        case types.SET_USER_MESSAGE:
            return {...state, userMessage: action.payload};
        case types.SET_USERNAME:
            return {...state, username: action.payload};
        case types.IS_ADMIN:
            return {...state, isAdmin: action.payload};
        default:
            return {...state};
    }
};