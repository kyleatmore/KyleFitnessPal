import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { requestAllFoods } from '../../actions/food_actions';
import { findDiary } from '../../actions/food_diary_actions';
import { addAvatar } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    diary: state.entities.foodDiaries[state.ui.currentDiary]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllFoods: () => dispatch(requestAllFoods()),
    findDiary: (date) => dispatch(findDiary(date)),
    addAvatar: (formData, user) => dispatch(addAvatar(formData, user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
