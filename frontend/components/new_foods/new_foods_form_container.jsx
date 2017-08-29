import React from 'react';
import { connect } from 'react-redux';
import { addFoodEntryToDiary } from '../../actions/food_diary_actions';
import NewFoodForm from './new_food_form';


const mapStateToProps = (state, ownProps) => {
  return {
    diary: ownProps.diary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFoodEntry: (diary, foodLogging) => {
      return dispatch(addFoodEntryToDiary(diary, foodLogging));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFoodForm);
