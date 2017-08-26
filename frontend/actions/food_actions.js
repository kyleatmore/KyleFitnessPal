import * as APIUtil from '../util/foods_api_util';

export const RECEIVE_ALL_FOODS = "RECEIVE_ALL_FOODS";

export const receiveAllFoods = (foods) => {
  return {
    type: RECEIVE_ALL_FOODS,
    foods
  };
};

export const requestAllFoods = () => (dispatch) => {
  return APIUtil.fetchAllFoods()
    .then(
      foods => {
        dispatch(receiveAllFoods(foods));
      }
    );
};
