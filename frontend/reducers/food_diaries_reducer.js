import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const foodDiariesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    default:
      return state;
  }
};

export default foodDiariesReducer;
