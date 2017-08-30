import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class EditFoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { servings: "", meal: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearModal = this.clearModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedEntry) {
      this.setState({
        servings: newProps.selectedEntry.foodLogging.servings,
        meal: newProps.selectedEntry.foodLogging.meal
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
    const foodLogging = {
      id: this.props.selectedEntry.foodLogging.id,
      servings: this.state.servings,
      meal: this.state.meal,
      food_id: this.props.selectedEntry.foodLogging.food_id,
      food_diary_id: this.props.diary.id
    };

    this.props.updateFoodEntry(this.props.diary, foodLogging)
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
            <p className="food-name">{`${selectedEntry.brand} - ${selectedEntry.name}`}</p>

            <h3 className="entry-option">How much?</h3>
            <input
              type="text"
              onChange={this.handleInput('servings')}
              value={this.state.servings}
              className="food-quantity"
              />
            <span>servings of {selectedEntry.serving_size}</span>

            <h3 className="entry-option">To which meal?</h3>
            <select
              value={this.state.meal}
              onChange={this.handleInput('meal')}
              className="meal-select"
              >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>

            <input
              className="edit-food button"
              type="submit"
              value="Save"
              onClick={this.handleSubmit}
              />
          </form>
        </section>
        <div className="modal-screen" onClick={this.clearModal}></div>
      </div>
    );
  }
}

export default withRouter(EditFoodForm);
