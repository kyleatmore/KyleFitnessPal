import * as APIUtil from '../util/exercises_api_util';

export const RECEIVE_ALL_EXERCISES = "RECEIVE_ALL_EXERCISES";
export const RECEIVE_SEARCHED_EXERCISES = "RECEIVE_SEARCHED_EXERCISES";
export const CLEAR_SEARCHED_EXERCISES = "CLEAR_SEARCHED_EXERCISES";

export const receiveAllExercises = (exercises) => {
  return {
    type: RECEIVE_ALL_EXERCISES,
    exercises
  };
};

export const receiveSearchedExercises = (exercises) => {
  return {
    type: RECEIVE_SEARCHED_EXERCISES,
    exercises
  };
};

export const clearSearchedExercises = () => {
  return {
    type: CLEAR_SEARCHED_EXERCISES,
  };
};

export const requestAllExercises = () => (dispatch) => {
  return APIUtil.fetchAllExercises()
    .then(
      exercises => {
        dispatch(receiveAllExercises(exercises));
      }
    );
};

export const searchExercises = (searchVal) => (dispatch) => {
  return APIUtil.searchExercises(searchVal)
    .then(
      exercises => {
        dispatch(receiveSearchedExercises(exercises));
      }
    );
};
