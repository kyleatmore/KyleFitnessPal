import React from 'react';
import merge from 'lodash/merge';
import ExerciseSearchResultsIndex from './exercise_search_results_index';
import { Link } from 'react-router-dom';

class ExerciseSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.exercises).length === 0) {
      this.props.requestAllExercises();
    }

    this.props.requestSingleDiary(this.props.match.params.diaryId);
  }

  componentWillUnmount() {
    this.props.clearSearchedExercises();
  }

  handleInput(e) {
    this.setState({ inputVal: e.target.value }, () => {
      this.props.searchExercises(this.state.inputVal);
    });
  }

  render() {
    if (!this.props.diary) return null;

    return (
      <div className="search">
          <h1>Add Exercise To Diary</h1>

          <section className="food-search">
            <form className="search-form">
              <h2>Search our exercise database by name:</h2>
              <input
                type="text"
                onChange={this.handleInput}
                value={this.state.inputVal}
              />
            </form>
          </section>

        <ExerciseSearchResultsIndex
          exercises={this.props.searchedExercises}
          diary={this.props.diary}
        />
      </div>
    );
  }
}

export default ExerciseSearch;
