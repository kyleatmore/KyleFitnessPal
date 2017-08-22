import React from 'react';
import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { login, signup } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType;
  if (ownProps.location.pathname === "/signup") {
    formType = "signup";
  } else {
    formType = "login";
  }

  return {
    processForm: (user) => {
      if (formType === "login") {
        return dispatch(login(user));
      } else {
        return dispatch(signup(user));
      }
    },
    formType,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
