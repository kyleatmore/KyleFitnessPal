import React from 'react';
import ExerciseSearchResultIndexItem from './exercise_search_result_index_item';
import AddExerciseFormContainer from './add_exercise_form_container';

class ExerciseSearchResultsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedExercise: "" };
    this.selectExercise = this.selectExercise.bind(this);
  }

  selectExercise(exercise) {
    return (e) => {
      debugger
      this.setState({ selectedExercise: exercise });
    };
  }

  render() {
    const { exercises, diary } = this.props;

    const exerciseItems = exercises.map((exercise) => {
      return (
        <ExerciseSearchResultIndexItem
          key={exercise.id}
          exercise={exercise}
          selectExercise={this.selectExercise}
        />
      );
    });

    return (
      <div className="search-results-index">
        <h2>Matching Exercises:</h2>
        <div className="search-index">

          <div className="search-results">
            <ul className="search-list">
              {exerciseItems}
            </ul>
          </div>

          <AddExerciseFormContainer
            selectedExercise={this.state.selectedExercise}
            diary={diary}
          />
        </div>
      </div>
    );

  }
}

export default ExerciseSearchResultsIndex;
