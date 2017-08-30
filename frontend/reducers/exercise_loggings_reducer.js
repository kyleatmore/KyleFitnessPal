import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SINGLE_EXERCISE_DIARY } from '../actions/exercise_diary_actions';
import merge from 'lodash/merge';

const exerciseLoggingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      action.payload.exerciseLoggings.forEach((logging) => {
        nextState[logging.id] = logging;
      });
      return nextState;
    case RECEIVE_SINGLE_EXERCISE_DIARY:
      action.payload.exerciseLoggings.forEach((logging) => {
        nextState[logging.id] = logging;
      });
      return merge({}, state, nextState);
    default:
      return state;
  }
};

export default exerciseLoggingsReducer;
