import React from 'react';
import { connect } from 'react-redux';
import FoodDiary from './food_diary';
import { requestAllFoods } from '../../actions/food_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUser: state.session.currentUser,
    diary: state.entities.foodDiaries[ownProps.match.params.diaryId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllFoods: () => dispatch(requestAllFoods()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDiary);
