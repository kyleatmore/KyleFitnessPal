import { RECEIVE_SINGLE_DIARY } from '../actions/food_diary_actions';
import { RECEIVE_SINGLE_FOOD } from '../actions/food_actions';
import merge from 'lodash/merge';

const initialState = {
  currentDiary: null,
  currentFood: null,
  errors: {},
};

const uiReducer = (state = initialState, action) => {
  let nextState;
  switch(action.type) {
    case RECEIVE_SINGLE_DIARY:
      nextState = merge({}, state, { currentDiary: action.payload.foodDiary.id });
      return nextState;
    case RECEIVE_SINGLE_FOOD:
      nextState = merge({}, state, { currentFood: action.food.id });
      return nextState;
    default:
      return state;
  }
};

export default uiReducer;
