import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

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
    case CLEAR_ERRORS:
      nextState = Object.assign({}, state, { errors: [] });
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;
