import { combineReducers } from 'redux';
import foodsReducer from './foods_reducer';
import foodDiariesReducer from './food_diaries_reducer';
import foodLoggingsReducer from './food_loggings_reducer';

const entitiesReducer = combineReducers({
  foods: foodsReducer,
  foodDiaries: foodDiariesReducer,
  foodLoggings: foodLoggingsReducer,
});

export default entitiesReducer;
