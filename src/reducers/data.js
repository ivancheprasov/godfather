import * as types from "../const/actionTypes";

const initialState = {
    orders: []
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ORDERS:
            return {...state, orders: action.payload};
        default:
            return {...state};
    }
};