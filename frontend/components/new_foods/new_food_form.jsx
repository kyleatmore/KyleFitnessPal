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
      addToDiary: false,
      servings: "1.0",
      meal: "breakfast"
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
    // const food = {
    //   servings: this.state.servings,
    //   meal: this.state.meal,
    //   food_id: this.props.food.id,
    //   food_diary_id: this.props.diary.id
    // };

    if (this.state.addToDiary) {

    } else {
      this.props.addNewFood(this.props.diary, this.state)
      .then(
        () => {
          this.props.history.push(`/food-diary/${this.props.diary.id}`);
        }
      );
    }



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
                value={this.state.current_weight}
                className="long-input"
                />
            </li>

            <li>
              <label>Food Description:</label>
              <input
                type="text"
                onChange={this.handleInput('name')}
                value={this.state.name}
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
            value={this.state.serving_size}
            placeholder="e.g. 1/2 cup cooked"
            className="serving-size"
            />

            <section className="per-serving-info">
              <h3>Amount Per Serving</h3>
              <label>Calories:</label>
              <input
              type="text"
              onChange={this.handleInput('calories')}
              value={this.state.calories}
              className="macro-input"
              />
              <span>g</span>

              <label>Total Fat:</label>
              <input
              type="text"
              onChange={this.handleInput('fats')}
              value={this.state.fats}
              className="macro-input"
              />
              <span>g</span>

              <label>Total Carbs:</label>
              <input
              type="text"
              onChange={this.handleInput('carbohydrates')}
              value={this.state.carbohydrates}
              className="macro-input"
              />
              <span>g</span>

              <label>Protein:</label>
              <input
              type="text"
              onChange={this.handleInput('protein')}
              value={this.state.protein}
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
                <label className="radio diary-add">
                  {'Yes, add '}
                  <input
                    type="text"
                    onChange={this.handleInput('servings')}
                    value={this.state.servings}
                    className="food-quantity"
                  />
                  {'serving(s) to '}
                  <select
                    value={this.state.meal}
                    onChange={this.handleInput('meal')}
                    className="meal-select"
                  >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </label>
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
