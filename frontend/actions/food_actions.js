import * as APIUtil from '../util/foods_api_util';

export const RECEIVE_ALL_FOODS = "RECEIVE_ALL_FOODS";
export const RECEIVE_SINGLE_FOOD = "RECEIVE_SINGLE_FOOD";
export const RECEIVE_FOOD_ERRORS = "RECEIVE_FOOD_ERRORS";

export const receiveAllFoods = (foods) => {
  return {
    type: RECEIVE_ALL_FOODS,
    foods
  };
};

export const receiveSingleFood = (food) => {
  return {
    type: RECEIVE_SINGLE_FOOD,
    food
  };
};

export const receiveFoodErrors = (errors) => {
  return {
    type: RECEIVE_FOOD_ERRORS,
    errors
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

export const addNewFood = (diary, food) => (dispatch) => {
  return APIUtil.addNewFood(diary.id, food)
    .then(
      food => {
        dispatch(receiveSingleFood(food));
      },
      errors => {
        dispatch(receiveFoodErrors(errors.responseJSON));
      }
    );
};
