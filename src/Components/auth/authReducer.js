import {SUCCESS_LOGIN, ERROR_LOGIN} from './actionTypes';
const initialState = {
  authData: [],
  authDateError: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        authData: action.payload,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        authDateError: action.payload.data,
      };
    default:
      return state;
  }
};
