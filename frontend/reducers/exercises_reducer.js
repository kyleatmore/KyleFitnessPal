import { RECEIVE_ALL_EXERCISES } from '../actions/exercise_actions';
import { RECEIVE_SINGLE_EXERCISE_DIARY } from '../actions/exercise_diary_actions';
import merge from 'lodash/merge';

const exercisesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_ALL_EXERCISES:
      nextState = merge({}, state, action.exercises);
      return nextState;
    case RECEIVE_SINGLE_EXERCISE_DIARY:
      const nextExercises = {};
      action.payload.exercises.forEach((exercise) => {
        nextExercises[exercise.id] = exercise;
      });
      return merge({}, state, nextExercises);
    default:
      return state;
  }
};

export default exercisesReducer;
