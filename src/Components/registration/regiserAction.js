import {SAVED_REGISTERED_DATA, ERROR_REGISTERED_DATA} from './actionTypes';
import {navigate} from '../../navigationRef';

export const registerData = (email, password) => async dispatch => {
  let data = {
    email: email,
    password: password,
  };
  dispatch({
    type: SAVED_REGISTERED_DATA,
    payload: data,
  });
  navigate('authStack');
};
