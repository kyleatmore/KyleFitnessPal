import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  entities: entitiesReducer
});

export default rootReducer;
