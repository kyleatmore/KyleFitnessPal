import * as APIUtil from '../util/exercises_api_util';

export const RECEIVE_ALL_EXERCISES = "RECEIVE_ALL_EXERCISES";

export const receiveAllExercises = (exercises) => {
  return {
    type: RECEIVE_ALL_EXERCISES,
    exercises
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
