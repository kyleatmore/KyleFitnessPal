import { combineReducers } from 'redux';
import foodsReducer from './foods_reducer';
import foodDiariesReducer from './food_diaries_reducer';
import foodLoggingsReducer from './food_loggings_reducer';
import exercisesReducer from './exercises_reducer';
import exerciseDiariesReducer from './exercise_diaries_reducer';
import exerciseLoggingsReducer from './exercise_loggings_reducer';

const entitiesReducer = combineReducers({
  foods: foodsReducer,
  foodDiaries: foodDiariesReducer,
  foodLoggings: foodLoggingsReducer,
  exercises: exercisesReducer,
  exerciseDiaries: exerciseDiariesReducer,
  exerciseLoggings: exerciseLoggingsReducer,
});

export default entitiesReducer;
