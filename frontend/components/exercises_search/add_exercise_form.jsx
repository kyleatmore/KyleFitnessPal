import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class AddExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minutes: "", cals_burned: "0" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => {
      const nextState = merge({}, this.state, { [field]: e.target.value });
      this.setState(nextState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const exerciseLogging = {
      minutes: this.state.minutes,
      exercise_id: this.props.exercise.id,
      exercise_diary_id: this.props.diary.id
    };

    this.props.addExerciseEntry(this.props.diary, exerciseLogging)
      .then(
        () => {
          this.props.history.push(`/exercise-diary/${this.props.diary.id}`);
        }
      );
  }

  render() {
    const { exercise, errors } = this.props;
    if (!exercise) {
      return(<div className="add-form"></div>);
    }

    const errorItems = errors.map((error, idx) => {
      return(<li key={idx}>{error}</li>);
    });

    return (
      <div className="add-form">
        <ul className="errors">{errorItems}</ul>

        <form>
          <p className="food-name">{`${exercise.name}`}</p>

          <h3 className="entry-option">How long?</h3>
          <input
          type="text"
          onChange={this.handleInput('minutes')}
          value={this.state.minutes}
          className="food-quantity"
          />

          <h3 className="entry-option">
            Calories Burned: <p>{this.state.minutes * exercise.cals_burned_per_min}</p>
          </h3>


          <input
          className="add-food button"
          type="submit"
          value="Add Exercise To Diary"
          onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(AddExerciseForm);
