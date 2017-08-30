import React from 'react';
import { connect } from 'react-redux';
import { selectAllFoods } from '../../reducers/selectors';
import { requestAllFoods } from '../../actions/food_actions';
import { requestSingleDiary } from '../../actions/food_diary_actions';
import Search from './search';


const mapStateToProps = (state, ownProps) => {
  const diaryId = ownProps.match.params.diaryId;

  return {
    foods: selectAllFoods(state),
    diary: state.entities.foodDiaries[diaryId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllFoods: () => dispatch(requestAllFoods()),
    requestSingleDiary: (diaryId) => dispatch(requestSingleDiary(diaryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
