import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.session.errors,
    headerText: "Member Login",
    footerText: "Not a member yet?",
    linkText: " Sign up now!",
    linkPath: "/signup",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
