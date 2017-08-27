import * as APIUtil from '../util/food_diary_api_util';

export const RECEIVE_SINGLE_DIARY = "RECEIVE_SINGLE_DIARY";

export const receiveSingleDiary = (diary) => {
  return {
    type: RECEIVE_SINGLE_DIARY,
    diary
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
