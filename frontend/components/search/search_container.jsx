import React from 'react';
import { connect } from 'react-redux';
import { selectAllFoods } from '../../reducers/selectors';
import { requestAllFoods } from '../../actions/food_actions';
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
    requestAllFoods: () => dispatch(requestAllFoods())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
