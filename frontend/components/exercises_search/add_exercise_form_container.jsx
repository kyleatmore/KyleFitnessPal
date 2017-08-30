import React from 'react';
import { connect } from 'react-redux';
import { addExerciseEntryToDiary } from '../../actions/exercise_diary_actions';
import AddExerciseForm from './add_exercise_form';


const mapStateToProps = (state, ownProps) => {
  return {
    exercise: ownProps.selectedExercise,
    diary: ownProps.diary,
    errors: state.ui.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addExerciseEntry: (diary, exerciseLogging) => {
      return dispatch(addExerciseEntryToDiary(diary, exerciseLogging));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExerciseForm);
