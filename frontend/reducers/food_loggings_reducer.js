import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const foodLoggingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      action.payload.foodLoggings.forEach((logging) => {
        nextState[logging.id] = logging;
      });
      return nextState;
    default:
      return state;
  }
};

export default foodLoggingsReducer;
