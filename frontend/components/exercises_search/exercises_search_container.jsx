import React from 'react';
import { connect } from 'react-redux';
import { selectAllExercises, selectSearchedExercises } from '../../reducers/selectors';
import { requestAllExercises, searchExercises, clearSearchedExercises } from '../../actions/exercise_actions';
import { requestSingleDiary } from '../../actions/exercise_diary_actions';
import ExerciseSearch from './exercise_search';


const mapStateToProps = (state, ownProps) => {
  const diaryId = ownProps.match.params.diaryId;

  return {
    exercises: selectAllExercises(state),
    diary: state.entities.exerciseDiaries[diaryId],
    searchedExercises: selectSearchedExercises(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllExercises: () => dispatch(requestAllExercises()),
    requestSingleDiary: (diaryId) => dispatch(requestSingleDiary(diaryId)),
    searchExercises: (searchVal) => dispatch(searchExercises(searchVal)),
    clearSearchedExercises: () => dispatch(clearSearchedExercises()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseSearch);
