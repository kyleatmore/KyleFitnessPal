import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import { findDiary } from '../../actions/food_diary_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentDiary: state.ui.currentDiary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findDiary: (date) => dispatch(findDiary(date))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
