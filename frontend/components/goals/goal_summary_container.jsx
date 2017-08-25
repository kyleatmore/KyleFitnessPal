import React from 'react';
import { connect } from 'react-redux';
import GoalSummary from './goal_summary';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default connect(mapStateToProps, null)(GoalSummary);
