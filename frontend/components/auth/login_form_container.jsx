import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.session.errors,
    headerText: "Member Login",
    footerText: "Not a member yet?",
    linkText: " Sign up now!",
    linkPath: "/signup",
    buttonText: "Log In",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const demo = { email: "kyledemo@gmail.com", password: "password" };

  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: () => dispatch(login(demo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
