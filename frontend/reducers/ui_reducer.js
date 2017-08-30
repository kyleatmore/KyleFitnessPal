import { RECEIVE_SINGLE_DIARY, RECEIVE_DIARY_ERRORS } from '../actions/food_diary_actions';
import { RECEIVE_SINGLE_FOOD, RECEIVE_FOOD_ERRORS } from '../actions/food_actions';
import { RECEIVE_SINGLE_EXERCISE_DIARY } from '../actions/exercise_diary_actions';

import merge from 'lodash/merge';

const initialState = {
  currentDiary: null,
  currentFood: null,
  currentExerciseDiary: null,
  errors: [],
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_SINGLE_DIARY:
      nextState = {
        currentDiary: action.payload.foodDiary.id,
        errors: []
      };
      return merge({}, state, nextState);
    case RECEIVE_SINGLE_EXERCISE_DIARY:
      nextState = {
        currentExerciseDiary: action.payload.exerciseDiary.id,
        errors: []
      };
      return merge({}, state, nextState);
    case RECEIVE_SINGLE_FOOD:
      nextState = merge({}, state, { currentFood: action.food.id });
      return nextState;
    case RECEIVE_FOOD_ERRORS:
      nextState = Object.assign({}, state, { errors: action.errors });
      return nextState;
    case RECEIVE_DIARY_ERRORS:
      nextState = Object.assign({}, state, { errors: action.errors });
      return nextState;
    default:
      return state;
  }
};

export default uiReducer;
