import { RECEIVE_SINGLE_DIARY } from '../actions/food_diary_actions';
import merge from 'lodash/merge';

const initialState = {
  currentDiary: null,
  errors: {},
};

const uiReducer = (state = initialState, action) => {
  let nextState;
  switch(action.type) {
    case RECEIVE_SINGLE_DIARY:
      nextState = merge({}, state, { currentDiary: action.payload.foodDiary.id });
      return nextState;
    default:
      return state;
  }
};

export default uiReducer;
