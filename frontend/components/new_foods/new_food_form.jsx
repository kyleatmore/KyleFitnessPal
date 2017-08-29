import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class NewFoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      name: "",
      calories: "",
      carbohydrates: "",
      protein: "",
      fats: "",
      serving_size: "",
      addToDiary: false
    };
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

    const foodLogging = {
      servings: this.state.servings,
      meal: this.state.meal,
      food_id: this.props.food.id,
      food_diary_id: this.props.diary.id
    };

    this.props.addFoodEntry(this.props.diary, foodLogging)
      .then(
        () => {
          this.props.history.push(`/food-diary/${this.props.diary.id}`);
        }
      );
  }

  render() {
    return (
      <div className="new-form">
        <form>
          <h1>Enter Nutritional Information</h1>

          <ul className="name-info">
            <li>
              <label>Brand / Restaurant:</label>
              <input
                type="text"
                onChange={this.handleInput('brand')}
                value={this.props.current_weight}
                className="long-input"
                />
            </li>

            <li>
              <label>Food Description:</label>
              <input
                type="text"
                onChange={this.handleInput('name')}
                value={this.props.name}
                className="long-input"
                />
            </li>
          </ul>

          <h2>Nutrition Facts</h2>
          <section className="nutritional-facts">
            <label>Serving Size:</label>
            <input
            type="text"
            onChange={this.handleInput('serving_size')}
            value={this.props.serving_size}
            placeholder="e.g. 1/2 cup cooked"
            className="serving-size"
            />

            <section className="per-serving-info">
              <h3>Amount Per Serving</h3>
              <label>Calories:</label>
              <input
              type="text"
              onChange={this.handleInput('calories')}
              value={this.props.calories}
              className="macro-input"
              />
              <span>g</span>

              <label>Total Fat:</label>
              <input
              type="text"
              onChange={this.handleInput('fats')}
              value={this.props.fats}
              className="macro-input"
              />
              <span>g</span>

              <label>Total Carbs:</label>
              <input
              type="text"
              onChange={this.handleInput('carbohydrates')}
              value={this.props.carbohydrates}
              className="macro-input"
              />
              <span>g</span>

              <label>Protein:</label>
              <input
              type="text"
              onChange={this.handleInput('protein')}
              value={this.props.protein}
              className="macro-input"
              />
              <span>g</span>
            </section>
          </section>

          <p>Would you like to add this food to your food diary now?</p>

          <section>
            <ul className="add-diary-options">
              <li>
                <input
                  type="radio"
                  name="addToDiary?"
                  value={true}
                  className="radio"
                  onChange={this.handleInput('addToDiary')}
                  />
                <label className="radio diary-add">Yes, add blah</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="addToDiary?"
                  value={false}
                  className="radio"
                  onChange={this.handleInput('addToDiary')}
                  checked
                  />
                <label className="radio diary-add">
                  No, do not add this food to my food diary at this time.
                </label>
              </li>
            </ul>

          </section>


          <input
          className="add-food button"
          type="submit"
          value="Save"
          onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(NewFoodForm);
