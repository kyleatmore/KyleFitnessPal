import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (payload) => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload,
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

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
    .then(
      user => {
        dispatch(receiveCurrentUser(user));
      },
      errors => {
        dispatch(receiveErrors(errors.responseJSON));
      }
    );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then(
      () => dispatch(logoutCurrentUser()),
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
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
};
