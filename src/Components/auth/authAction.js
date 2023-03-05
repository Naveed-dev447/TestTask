import {replace} from '../../navigationRef';
import {SUCCESS_LOGIN, ERROR_LOGIN} from './actionTypes';

export const signIn = (email, password) => async dispatch => {
  let data = {
    email: email,
    password: password,
  };
  dispatch({
    type: SUCCESS_LOGIN,
    payload: data,
  });
  replace('timeLineStack');
};
