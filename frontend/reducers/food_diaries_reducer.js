import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const foodDiariesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      action.payload.foodDiaries.forEach((diary) => {
        nextState[diary.id] = diary;
      });
      return nextState;
    default:
      return state;
  }
};

export default foodDiariesReducer;
