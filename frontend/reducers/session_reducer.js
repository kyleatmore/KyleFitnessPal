import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_FOOD_ERRORS } from '../actions/food_actions';

const initialState = {
  currentUser: null,
  errors: [],
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = { currentUser: action.payload.user, errors: [] };
      return nextState;
    case LOGOUT_CURRENT_USER:
      return initialState;
    case RECEIVE_ERRORS:
      nextState = { currentUser: null, errors: action.errors };
      return nextState;
    case CLEAR_ERRORS:
      nextState = Object.assign({}, state, { errors: [] });
      return nextState;
    case RECEIVE_FOOD_ERRORS:
      nextState = Object.assign({}, state, { errors: action.errors });
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;
