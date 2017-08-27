import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SINGLE_DIARY } from '../actions/food_diary_actions';
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
    case RECEIVE_SINGLE_DIARY:
      action.payload.foodLoggings.forEach((logging) => {
        nextState[logging.id] = logging;
      });
      return merge({}, state, nextState);
    default:
      return state;
  }
};

export default foodLoggingsReducer;
