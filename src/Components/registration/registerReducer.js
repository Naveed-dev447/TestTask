import {SAVED_REGISTERED_DATA, ERROR_REGISTERED_DATA} from './actionTypes';
const initialState = {
  registerData: [],
  registerDateError: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVED_REGISTERED_DATA:
      return {
        ...state,
        registerData: action.payload,
      };
    case ERROR_REGISTERED_DATA:
      return {
        ...state,
        registerDateError: action.payload.data,
      };
    default:
      return state;
  }
};
