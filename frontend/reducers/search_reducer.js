import { RECEIVE_SEARCHED_FOODS, CLEAR_SEARCHED_FOODS } from '../actions/food_actions';
import { RECEIVE_SEARCHED_EXERCISES, CLEAR_SEARCHED_EXERCISES } from '../actions/exercise_actions';

const initialState = {
  searchedFoodIds: [],
  searchedExerciseIds: [],
};

const searchReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_SEARCHED_FOODS:
      const foodIds = Object.keys(action.foods);
      nextState = Object.assign({}, state, { searchedFoodIds: foodIds });
      return nextState;
    case CLEAR_SEARCHED_FOODS:
      nextState = Object.assign({}, state, { searchedFoodIds: [] });
      return nextState;
      case RECEIVE_SEARCHED_EXERCISES:
        const exerciseIds = Object.keys(action.exercises);
        nextState = Object.assign({}, state, { searchedExerciseIds: exerciseIds });
        return nextState;
      case CLEAR_SEARCHED_EXERCISES:
        nextState = Object.assign({}, state, { searchedExerciseIds: [] });
        return nextState;
    default:
      return state;
  }
};

export default searchReducer;
