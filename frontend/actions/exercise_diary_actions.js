import * as APIUtil from '../util/exercise_diary_api_util';

export const RECEIVE_SINGLE_EXERCISE_DIARY = "RECEIVE_SINGLE_DIARY";
export const REMOVE_EXERCISE_ENTRY = "REMOVE_EXERCISE_ENTRY";
export const UPDATE_EXERCISE_ENTRY = "UPDATE_EXERCISE_ENTRY";
export const RECEIVE_DIARY_ERRORS = "RECEIVE_DIARY_ERRORS";

export const receiveSingleDiary = (payload) => {
  return {
    type: RECEIVE_SINGLE_EXERCISE_DIARY,
    payload
  };
};

export const removeExerciseEntry = (payload) => {
  return {
    type: REMOVE_EXERCISE_ENTRY,
    payload
  };
};

export const receiveDiaryErrors = (errors) => {
  return {
    type: RECEIVE_DIARY_ERRORS,
    errors
  };
};

export const requestSingleDiary = (diaryId) => (dispatch) => {
  return APIUtil.fetchSingleDiary(diaryId)
    .then(
      diary => {
        dispatch(receiveSingleDiary(diary));
      }
    );
};

export const addExerciseEntryToDiary = (diary, exerciseLogging) => (dispatch) => {
  return APIUtil.addExerciseEntryToDiary(diary.id, exerciseLogging)
    .then(
      diary => {
        dispatch(receiveSingleDiary(diary));
      },
      errors => dispatch(receiveDiaryErrors(errors.responseJSON))
    );
};

export const deleteExerciseEntry = (diary, exerciseLogging) => (dispatch) => {
  return APIUtil.deleteExerciseEntry(diary, exerciseLogging)
    .then(
      diary => {
        dispatch(receiveSingleDiary(diary));
      }
    );
};

export const findDiary = (date) => (dispatch) => {
  return APIUtil.findDiary(date)
    .then(
      diary => {
        dispatch(receiveSingleDiary(diary));
      }
    );
};

export const updateExerciseEntry = (diary, exerciseLogging) => (dispatch) => {
  return APIUtil.updateExerciseEntry(diary, exerciseLogging)
    .then(
      diary => {
        dispatch(receiveSingleDiary(diary));
      },
      errors => dispatch(receiveDiaryErrors(errors.responseJSON))
    );
};
