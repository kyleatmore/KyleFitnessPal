import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class EditExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minutes: "", cals_burned: "0" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearModal = this.clearModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedEntry) {
      this.setState({
        minutes: newProps.selectedEntry.minutes,
        cals_burned: newProps.selectedEntry.calories
      });
    }
  }

  handleInput(field) {
    return (e) => {
      const nextState = merge({}, this.state, { [field]: e.target.value });
      this.setState(nextState);
    };
  }

  clearModal() {
    this.props.clearSelectedEntry();
  }

  handleSubmit(e) {
    e.preventDefault();
    const exerciseLogging = {
      id: this.props.selectedEntry.exerciseLogging.id,
      minutes: this.state.minutes,
      exercise_id: this.props.selectedEntry.exercise.id,
      exercise_diary_id: this.props.diary.id
    };

    this.props.updateExerciseEntry(this.props.diary, exerciseLogging)
      .then(
        () => this.props.clearSelectedEntry()
      );
  }

  render() {
    const { selectedEntry, errors } = this.props;
    if (!selectedEntry) {
      return null;
    }

    const errorItems = errors.map((error, idx) => {
      return(<li key={idx}>{error}</li>);
    });

    return (
      <div className="add-form edit">

        <section className="add-form modal">
          <ul className="errors">{errorItems}</ul>

          <span className="modal-close" onClick={this.clearModal}>&times;</span>
          <form>
            <p className="food-name">{`${selectedEntry.exercise.name}`}</p>

            <h3 className="entry-option">How long?</h3>
            <input
            type="text"
            onChange={this.handleInput('minutes')}
            value={this.state.minutes}
            className="food-quantity"
            />

            <h3 className="entry-option">
              Calories Burned: <p>{this.state.minutes * selectedEntry.exercise.cals_burned_per_min}</p>
            </h3>


            <input
            className="add-food button"
            type="submit"
            value="Add Exercise To Diary"
            onClick={this.handleSubmit}
            />
          </form>
        </section>
        <div className="modal-screen" onClick={this.clearModal}></div>
      </div>
    );
  }
}

export default withRouter(EditExerciseForm);
