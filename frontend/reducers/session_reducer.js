import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  errors: [],
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;
  
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = { currentUser: action.user, errors: [] };
      return nextState;
    case RECEIVE_ERRORS:
      nextState = { currentUser: null, errors: action.errors };
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;
