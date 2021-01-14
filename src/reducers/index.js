import {combineReducers} from "redux";
import {user} from "./user";
import {reducer as formReducer} from 'redux-form';
import {app} from "./app";
import {data} from "./data";
import {orderForm} from "./orderForm";

export const reducer = combineReducers({
    user,
    app,
    data,
    orderForm,
    form: formReducer
});