import React from 'react';
import { connect } from 'react-redux';
import { updateExerciseEntry } from '../../actions/exercise_diary_actions';
import EditExerciseForm from './edit_exercise_form';


const mapStateToProps = (state) => {
  return {
    errors: state.ui.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateExerciseEntry: (diary, exerciseLogging) => {
      return dispatch(updateExerciseEntry(diary, exerciseLogging));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExerciseForm);
