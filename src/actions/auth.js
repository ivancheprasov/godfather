import "../const/actionTypes";
import * as types from "../const/actionTypes";

export const login = (username, password) => {
  return dispatch => {
      return setTimeout(() => dispatch({
          type: types.IS_AUTHORIZED,
          payload: true
      }), 6000);
  }
};

export const setUserMessage = message => {
  return dispatch => {
    dispatch({
        type: types.SET_USER_MESSAGE,
        payload: message
    });
  };
};