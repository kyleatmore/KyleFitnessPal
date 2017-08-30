import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SINGLE_EXERCISE_DIARY, REMOVE_EXERCISE_ENTRY } from '../actions/exercise_diary_actions';

import merge from 'lodash/merge';

const exerciseDiariesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      action.payload.exerciseDiaries.forEach((diary) => {
        nextState[diary.id] = diary;
      });
      return nextState;
    case RECEIVE_SINGLE_EXERCISE_DIARY:
      const nextDiary = { [action.payload.exerciseDiary.id]: action.payload.exerciseDiary };
      nextState = Object.assign({}, state, nextDiary);
      return nextState;
    default:
      return state;
  }
};

export default exerciseDiariesReducer;
