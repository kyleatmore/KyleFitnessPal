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
    if (this.state.delayTimer) { clearTimeout(this.state.delayTimer); }
    const nextState = merge({}, this.state, { inputVal: e.target.value });

    this.setState(nextState, () => {
      if (this.state.inputVal) {
        const delayTimer = setTimeout(() => this.props.searchExercises(this.state.inputVal), 400);
        this.setState({ inputVal: this.state.inputVal, delayTimer: delayTimer });
      }
    });
  }

  render() {
    if (!this.props.diary) return null;

    let searchResults;
    if (this.state.inputVal) {
      searchResults = this.props.searchedExercises;
    } else {
      searchResults = this.props.exercises;
    }

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
          exercises={searchResults}
          diary={this.props.diary}
        />
      </div>
    );
  }
}

export default ExerciseSearch;
