import React from 'react';
import { connect } from 'react-redux';
import { addNewFood } from '../../actions/food_actions';
import NewFoodForm from './new_food_form';


const mapStateToProps = (state) => {
  const diaryId = state.ui.currentDiary;

  return {
    diary: state.entities.foodDiaries[diaryId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewFood: (diary, food) => {
      return dispatch(addNewFood(diary, food));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFoodForm);
