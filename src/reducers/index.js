import {combineReducers} from "redux";
import {user} from "./user";
import {reducer as formReducer} from 'redux-form';
import {app} from "./app";
import {data} from "./data";

export const reducer = combineReducers({
    user,
    app,
    data,
    form: formReducer
});