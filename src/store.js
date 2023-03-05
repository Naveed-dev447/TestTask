import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import registerReducer from './Components/registration/registerReducer';
import authReducer from './Components/auth/authReducer';

const appReducer = combineReducers({
  registerReducer: registerReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGGED_OUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
