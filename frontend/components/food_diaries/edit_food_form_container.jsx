import React from 'react';
import { connect } from 'react-redux';
import { updateFoodEntry } from '../../actions/food_diary_actions';
import EditFoodForm from './edit_food_form';


const mapStateToProps = (state) => {
  return {
    errors: state.ui.errors,
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
