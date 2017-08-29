import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  entities: entitiesReducer,
  ui: uiReducer
});

export default rootReducer;
