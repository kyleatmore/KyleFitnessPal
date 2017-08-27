import React from 'react';
import merge from 'lodash/merge';

class AddFoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { servings: "1.0", meal: "breakfast" };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(field) {
    return (e) => {
      const nextState = merge({}, this.state, { [field]: e.target.value });
      this.setState(nextState);
    };
  }

  render() {
    const { food } = this.props;
    if (!food) {
      return(<div className="add-form"></div>);
    }

    return (
      <div className="add-form">
        <form>
          <p className="food-name">{`${food.brand} - ${food.name}`}</p>

          <h3 className="entry-option">How much?</h3>
          <input
          type="text"
          onChange={this.handleInput('servings')}
          value={this.state.servings}
          className="food-quantity"
          />
          <span>servings of {food.serving_size}</span>

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
          className="add-food button"
          type="submit"
          value="Add Food To Diary"
          onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default AddFoodForm;
