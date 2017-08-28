import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { requestAllFoods } from '../../actions/food_actions';

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllFoods: () => dispatch(requestAllFoods()),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
