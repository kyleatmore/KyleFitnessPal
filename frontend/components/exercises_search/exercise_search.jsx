import React from 'react';
import merge from 'lodash/merge';
import ExerciseSearchResultsIndex from './exercise_search_results_index';
import { Link } from 'react-router-dom';

class ExerciseSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
    this.handleInput = this.handleInput.bind(this);
    this.matches = this.matches.bind(this);
  }

  componentDidMount() {
    this.props.requestAllExercises()
      .then(() => {
        this.props.requestSingleDiary(this.props.match.params.diaryId);
      });
  }

  handleInput(e) {
    const nextState = merge({}, this.state, { inputVal: e.target.value });
    this.setState(nextState);
  }

  matches() {
    if (!this.state.inputVal) { return this.props.exercises; }

    const matches = [];
    this.props.exercises.forEach((exercise) => {
      if (exercise.name.toLowerCase().startsWith(this.state.inputVal.toLowerCase())) {
        matches.push(exercise);
      }
    });

    return matches;
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
          exercises={this.matches()}
          diary={this.props.diary}
        />
      </div>
    );
  }
}

export default ExerciseSearch;
