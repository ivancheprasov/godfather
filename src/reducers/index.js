import {combineReducers} from "redux";
import {user} from "./user";
import { reducer as formReducer } from 'redux-form';

export const reducer = combineReducers({
    user: user,
    form: formReducer
});