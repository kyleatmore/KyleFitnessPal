import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearErrors, trySignup, login } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.session.errors,
    headerText: "Your Account Information",
    footerText: "Already a member?",
    linkText: " Click here to log in.",
    linkPath: "/login",
    buttonText: "Continue »",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const demo = { email: "kyledemo@gmail.com", password: "password" };

  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    trySignup: (user) => dispatch(trySignup(user)),
    demoLogin: () => dispatch(login(demo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
