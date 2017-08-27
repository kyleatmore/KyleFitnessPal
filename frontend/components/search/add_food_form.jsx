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
    if (!food) { return null; }
    return (
      <div>
        <form className="search-form">
          <h1>{`${food.brand} - ${food.name}`}</h1>

          <h1>How much?</h1>
          <input
          type="text"
          onChange={this.handleInput('servings')}
          value={this.state.servings}
          />
          <span>servings of {food.serving_size}</span>

          <h1>To which meal?</h1>
          <input
          type="text"
          onChange={this.handleInput('meal')}
          value={this.state.meal}
          />

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
