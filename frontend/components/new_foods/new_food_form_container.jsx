import React from 'react';
import { connect } from 'react-redux';
import { addNewFood } from '../../actions/food_actions';
import { addFoodEntryToDiary } from '../../actions/food_diary_actions';
import NewFoodForm from './new_food_form';


const mapStateToProps = (state) => {
  const diaryId = state.ui.currentDiary;
  const foodId = state.ui.currentFood;

  return {
    diary: state.entities.foodDiaries[diaryId],
    errors: state.session.errors,
    food: state.entities.foods[foodId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewFood: (diary, food) => dispatch(addNewFood(diary, food)),
    addFoodEntry: (diary, foodLogging) => dispatch(addFoodEntryToDiary(diary, foodLogging))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFoodForm);
