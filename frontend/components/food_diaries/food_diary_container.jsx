import React from 'react';
import { connect } from 'react-redux';
import FoodDiary from './food_diary';
import { requestAllFoods } from '../../actions/food_actions';
import { requestSingleDiary, deleteFoodEntry, findDiary } from '../../actions/food_diary_actions';
import { findExerciseDiary } from '../../actions/exercise_diary_actions';
import { selectDiaryEntries } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const diaryId = state.ui.currentDiary;
  const exerciseDiaryId = state.ui.currentExerciseDiary;
  
  return {
    currentUser: state.session.currentUser,
    diary: state.entities.foodDiaries[diaryId],
    breakfastEntries: selectDiaryEntries(state, diaryId, "breakfast"),
    lunchEntries: selectDiaryEntries(state, diaryId, "lunch"),
    dinnerEntries: selectDiaryEntries(state, diaryId, "dinner"),
    foods: state.entities.foods,
    exerciseDiary: state.entities.exerciseDiaries[exerciseDiaryId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllFoods: () => dispatch(requestAllFoods()),
    requestSingleDiary: (diaryId) => dispatch(requestSingleDiary(diaryId)),
    deleteFoodEntry: (diary, foodLogging) => dispatch(deleteFoodEntry(diary, foodLogging)),
    findDiary: (date) => dispatch(findDiary(date)),
    findExerciseDiary: (date) => dispatch(findExerciseDiary(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDiary);
