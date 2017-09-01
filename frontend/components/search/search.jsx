import React from 'react';
import merge from 'lodash/merge';
import SearchResultsIndex from './search_results_index';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "", delayTimer: null };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.foods).length === 0) {
      this.props.requestAllFoods();
    }

    this.props.requestSingleDiary(this.props.match.params.diaryId);
  }

  componentWillUnmount() {
    this.props.clearSearchedFoods();
  }

  handleInput(e) {
    if (this.state.delayTimer) { clearTimeout(this.state.delayTimer); }
    const nextState = merge({}, this.state, { inputVal: e.target.value });

    this.setState(nextState, () => {
      if (this.state.inputVal) {
        const delayTimer = setTimeout(() => this.props.searchFoods(this.state.inputVal), 400);
        this.setState({ inputVal: this.state.inputVal, delayTimer: delayTimer });
      }
    });
  }

  render() {
    if (!this.props.diary) return null;

    let searchResults;
    if (this.state.inputVal) {
      searchResults = this.props.searchedFoods;
    } else {
      searchResults = this.props.foods;
    }

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
          </form>
          </section>

        <SearchResultsIndex
          foods={searchResults}
          diary={this.props.diary}
        />

      <p>
        Can't find what you're looking for? <Link to={`/food-diary/${this.props.diary.id}/add-food`}>Add a food to the database</Link>
      </p>
      </div>
    );
  }
}

export default Search;
