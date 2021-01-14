import * as types from "../const/actionTypes";
import * as families from "../const/families";

const initialState = {
    selectedFamily: families.Corleone,
    selectedOrder: null,
    selectedSoldier: null
};

export const orderForm = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SELECTED_FAMILY:
            return {...state, selectedFamily: action.payload};
        case types.SET_SELECTED_ORDER:
            return {...state, selectedOrder: action.payload};
        case types.SET_SELECTED_SOLDIER:
            return {...state, selectedSoldier: action.payload};
        default:
            return {...state};
    }
};