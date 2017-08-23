import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const login = (user) => (dispatch) => {
  debugger
  return APIUtil.login(user)
    .then(
      user => {
        debugger
        dispatch(receiveCurrentUser(user));
      },
      errors => {
        debugger
        dispatch(receiveErrors(errors.responseJSON));
      }
    );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const trySignup = (user) => (dispatch) => {
  return APIUtil.trySignup(user)
    .then(
      () => dispatch(clearErrors()),
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};
