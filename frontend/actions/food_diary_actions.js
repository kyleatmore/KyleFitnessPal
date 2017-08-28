import * as APIUtil from '../util/food_diary_api_util';

export const RECEIVE_SINGLE_DIARY = "RECEIVE_SINGLE_DIARY";
export const REMOVE_FOOD_ENTRY = "REMOVE_FOOD_ENTRY";

export const receiveSingleDiary = (payload) => {
  return {
    type: RECEIVE_SINGLE_DIARY,
    payload
  };
};

export const removeFoodEntry = (payload) => {
  return {
    type: REMOVE_FOOD_ENTRY,
    payload
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

export const addFoodEntryToDiary = (diary, foodLogging) => (dispatch) => {
  return APIUtil.addFoodEntryToDiary(diary.id, foodLogging)
    .then(
      diary => {
        dispatch(receiveSingleDiary(diary));
      }
    );
};

export const deleteFoodEntry = (diary, foodLogging) => (dispatch) => {
  return APIUtil.deleteFoodEntry(diary, foodLogging)
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
