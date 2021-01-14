import * as types from "../const/actionTypes";

const initialState = {
    orders: [],
    soldiers: []
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ORDERS:
            return {...state, orders: action.payload};
        case types.SET_SOLDIERS:
            return {...state, soldiers: action.payload};
        default:
            return {...state};
    }
};