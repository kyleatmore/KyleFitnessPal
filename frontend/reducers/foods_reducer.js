import { RECEIVE_ALL_FOODS } from '../actions/food_actions';
import merge from 'lodash/merge';

const foodsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_ALL_FOODS:
      nextState = merge({}, state, action.foods);
      return nextState;
    default:
      return state;
  }
};

export default foodsReducer;
