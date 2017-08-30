import React from 'react';
import { connect } from 'react-redux';
import ExerciseDiary from './exercise_diary';
import { requestAllExercises } from '../../actions/exercise_actions';
import { requestSingleDiary, deleteExerciseEntry, findExerciseDiary } from '../../actions/exercise_diary_actions';
import { selectExerciseDiaryEntries } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const exerciseDiaryId = state.ui.currentExerciseDiary;

  return {
    currentUser: state.session.currentUser,
    exerciseDiary: state.entities.exerciseDiaries[exerciseDiaryId],
    exercises: state.entities.exercises,
    exerciseEntries: selectExerciseDiaryEntries(state, exerciseDiaryId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllExercises: () => dispatch(requestAllExercises()),
    requestSingleDiary: (diaryId) => dispatch(requestSingleDiary(diaryId)),
    deleteExerciseEntry: (diary, exerciseLogging) => dispatch(deleteExerciseEntry(diary, exerciseLogging)),
    findExerciseDiary: (date) => dispatch(findExerciseDiary(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseDiary);
