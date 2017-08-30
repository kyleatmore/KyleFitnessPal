import React from 'react';
import { connect } from 'react-redux';
import { selectAllExercises } from '../../reducers/selectors';
import { requestAllExercises } from '../../actions/exercise_actions';
import { requestSingleDiary } from '../../actions/exercise_diary_actions';
import ExerciseSearch from './exercise_search';


const mapStateToProps = (state, ownProps) => {
  const diaryId = ownProps.match.params.diaryId;

  return {
    exercises: selectAllExercises(state),
    diary: state.entities.exerciseDiaries[diaryId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllExercises: () => dispatch(requestAllExercises()),
    requestSingleDiary: (diaryId) => dispatch(requestSingleDiary(diaryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseSearch);
