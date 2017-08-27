import React from 'react';
import { connect } from 'react-redux';
import { addFoodEntryToDiary } from '../../actions/food_diary_actions';
import AddFoodForm from './add_food_form';


const mapStateToProps = (state) => {
  return {
    food: state.entities.foods[state.ui.currentFood],
    diary: state.entities.foodDiaries[state.ui.currentDiary]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFoodEntry: (diary, foodLogging) => {
      dispatch(addFoodEntryToDiary(diary, foodLogging));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFoodForm);
