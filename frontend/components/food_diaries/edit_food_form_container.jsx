import React from 'react';
import { connect } from 'react-redux';
import { updateFoodEntry } from '../../actions/food_diary_actions';
import EditFoodForm from './edit_food_form';


const mapStateToProps = (state, ownProps) => {
  return {
    entry: ownProps.selectedEntry,
    diary: ownProps.diary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFoodEntry: (diary, foodLogging) => {
      return dispatch(updateFoodEntry(diary, foodLogging));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFoodForm);
