import React from 'react';
import merge from 'lodash/merge';
import SearchResultsIndex from './search_results_index';
import { Link } from 'react-router-dom';

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
    return (
      <div className="search">
          <h1>Add Food To Diary</h1>

          <section className="food-search">
            <form className="search-form">
              <h2>Search our food database by name:</h2>
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
          </section>

        <SearchResultsIndex
          foods={this.state.matchedFoods}
          diary={this.props.diary}
        />

      <p>
        Can't find what you're looking for? <Link to="/">Add a food to the database</Link>
      </p>
      </div>
    );
  }
}

export default Search;
