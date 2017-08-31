import React from 'react';
import { connect } from 'react-redux';
import { selectAllFoods, selectSearchedFoods } from '../../reducers/selectors';
import { requestAllFoods, searchFoods } from '../../actions/food_actions';
import { requestSingleDiary } from '../../actions/food_diary_actions';
import Search from './search';


const mapStateToProps = (state, ownProps) => {
  const diaryId = ownProps.match.params.diaryId;

  return {
    foods: selectAllFoods(state),
    diary: state.entities.foodDiaries[diaryId],
    searchedFoods: selectSearchedFoods(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllFoods: () => dispatch(requestAllFoods()),
    requestSingleDiary: (diaryId) => dispatch(requestSingleDiary(diaryId)),
    searchFoods: (searchVal) => dispatch(searchFoods(searchVal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
