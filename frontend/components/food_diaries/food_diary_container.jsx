import React from 'react';
import { connect } from 'react-redux';
import FoodDiary from './food_diary';
import { requestAllFoods } from '../../actions/food_actions';
import { requestSingleDiary, deleteFoodEntry } from '../../actions/food_diary_actions';
import { selectDiaryEntries } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const diaryId = ownProps.match.params.diaryId;

  return {
    currentUser: state.session.currentUser,
    diary: state.entities.foodDiaries[diaryId],
    breakfastEntries: selectDiaryEntries(state, diaryId, "breakfast"),
    lunchEntries: selectDiaryEntries(state, diaryId, "lunch"),
    dinnerEntries: selectDiaryEntries(state, diaryId, "dinner"),
    currentDate: state.ui.currentDate,
    foods: state.entities.foods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllFoods: () => dispatch(requestAllFoods()),
    requestSingleDiary: (diaryId) => dispatch(requestSingleDiary(diaryId)),
    deleteFoodEntry: (diary, foodLogging) => dispatch(deleteFoodEntry(diary, foodLogging)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDiary);
