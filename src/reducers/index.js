import {combineReducers} from "redux";
import {user} from "./user";
import {reducer as formReducer} from 'redux-form';
import {app} from "./app";

export const reducer = combineReducers({
    user,
    app,
    form: formReducer
});