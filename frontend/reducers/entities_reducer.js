import { combineReducers } from 'redux';
import foodsReducer from './foods_reducer';

const entitiesReducer = combineReducers({
  foods: foodsReducer,
});

export default entitiesReducer;
