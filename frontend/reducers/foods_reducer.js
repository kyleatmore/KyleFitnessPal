import { RECEIVE_ALL_FOODS } from '../actions/food_actions';
import { RECEIVE_SINGLE_DIARY } from '../actions/food_diary_actions';
import merge from 'lodash/merge';

const foodsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_ALL_FOODS:
      nextState = merge({}, state, action.foods);
      return nextState;
    case RECEIVE_SINGLE_DIARY:
      const nextFoods = {};
      action.payload.foods.forEach((food) => {
        nextFoods[food.id] = food;
      });
      return merge({}, state, nextFoods);
    default:
      return state;
  }
};

export default foodsReducer;
