import React from 'react';
import merge from 'lodash/merge';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "", matchedFoods: [] };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestAllFoods();
  }

  handleInput(e) {
    const nextState = merge({}, this.state, { inputVal: e.target.value });
    this.setState(nextState);
  }

  handleSubmit(e) {
    e.preventDefault();

    const matches = [];
    this.props.foods.forEach((food) => {
      if (food.name.toLowerCase().startsWith(this.state.inputVal.toLowerCase())) {
        matches.push(food);
      }
    });

    const nextState = Object.assign({}, this.state, { matchedFoods: matches });
    this.setState(nextState);
  }

  render() {
    const foodsList = this.state.matchedFoods.map((food) => {
      return (
        <li key={food.id}>{food.name}</li>
      );
    });

    return (
      <div>
        <form className="search-form">
          <h1>Search our food database by name:</h1>
          <input
          type="text"
          onChange={this.handleInput}
          value={this.state.inputVal}
          />

          <input
          className="search button"
          type="submit"
          value="Search"
          onClick={this.handleSubmit}
          />
        </form>

        <ul>{foodsList}</ul>
      </div>
    );
  }
}

export default Search;
