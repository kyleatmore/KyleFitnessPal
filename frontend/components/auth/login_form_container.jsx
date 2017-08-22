import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
